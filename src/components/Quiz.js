import { QuizContext } from '../contexts/quiz';
import Question from './Question';
import { useContext } from 'react';

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
//    console.log("quizState", quizState);

    return (
        <div
        className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congrats!</div>
                    <div className='results-info'>
                        <div>You have finished the quiz.</div>
                        <div>You got {quizState.correctAnswerCount} of {quizState.questions.length} questions correct.</div>
                    </div>
                     <div className="next-button"
                        onClick={() => dispatch({ type: 'RESTART' })}>Restart</div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1}/
                        {quizState.questions.length}
                    </div>
                    <Question />
                    <div className="next-button"
                        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>Next question
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz;