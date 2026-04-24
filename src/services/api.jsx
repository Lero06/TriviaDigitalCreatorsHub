exportconstgetQuestions=async () => {
constres=awaitfetch("https://opentdb.com/api.php?amount=10&type=multiple")
constdata=awaitres.json()
returndata.results
}