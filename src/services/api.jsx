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
        return transformedQuestions;
    }
    catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
}