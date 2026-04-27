function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function shuffleQuestions(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const getQuestions = async (categoria, dificultad, cantidad = 10) => {
    try {

        const categoryMap = {
            anime: 31,
            games: 15,
            films: 11,
            computers: 18
        };

        const difficultyMap = {
            easy: "easy",
            medium: "medium",
            hard: "hard"
        };

        const url = new URL("https://opentdb.com/api.php");
        url.searchParams.append("amount", cantidad);
        url.searchParams.append("category", categoryMap[categoria]);
        url.searchParams.append("difficulty", difficultyMap[dificultad]);
        url.searchParams.append("type", "multiple");

        const response = await fetch(url.toString());

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.results.length === 0) {
            throw new Error("No hay preguntas disponibles con estos parámetros");
        }

        const transformedQuestions = data.results.map((question) => ({
            question: decodeHTML(question.question),
            correct: decodeHTML(question.correct_answer),
            answers: shuffleQuestions([
                decodeHTML(question.correct_answer),
                ...question.incorrect_answers.map(decodeHTML)
            ])
        }));
        const translatedQuestions = await translateQuestions(transformedQuestions);
        return translatedQuestions;
    }
    catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
}

export const translateToSpanish = async (text) => {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|es`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    } else {
      throw new Error("Translation failed");
    }
  } catch (error) {
    console.error("Error:", error);
    return text;
  }
};

export const translateQuestions = async (questions) => {
  try {
    const translatedQuestions = await Promise.all(
      questions.map(async (question) => ({
        question: await translateToSpanish(question.question),
        correct: await translateToSpanish(question.correct),
        answers: await Promise.all(
          question.answers.map(answer => translateToSpanish(answer))
        )
      }))
    );

    return translatedQuestions;

  } catch (error) {
    console.error("Error translating questions:", error);
    return questions;
  }
};