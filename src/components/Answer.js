const Answer = ({ answerText, onSelectAnswer, index, currentAnswer, correctAnswer }) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';
    const isDisabled = currentAnswer ? true : false;
    return (
        <button disabled={isDisabled} className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}    
            onClick={() => onSelectAnswer(answerText)}>
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text">{answerText}</div>
        </button>
    );
};

export default Answer;