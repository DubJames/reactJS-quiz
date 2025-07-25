export const shuffleAnswers = question => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ]

    return unshuffledAnswers.map(unshuffledAnswer => ({
        sort: Math.random(), value: unshuffledAnswer //make objects by giving the strings a randomized sort property
    }))
    .sort((a, b) => a.sort - b.sort) //sort the randomized answers, shuffling them
    .map(a => a.value); //only return the values in new order, don't care about sort anymore
};

export const normalizeQuestions = backendQuestions => {
    return backendQuestions.map( backendQuestion => {
        const incorrectAnswers = backendQuestion.incorrect_answers.map(incorrectAnswer => decodeURIComponent(incorrectAnswer))
        return {
            correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
            question: decodeURIComponent(backendQuestion.question),
            incorrectAnswers,
        }
    })
}