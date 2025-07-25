import { QuizContext } from '../contexts/quiz';
import Question from './Question';
import { useContext, useEffect } from 'react';

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    //    console.log("quizState", quizState);
    //open trivia API
    const apiURL = "https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986"

    useEffect(() => {
if (quizState.questions.length > 0) {
    return;
}
        //console.log('useEffect on initialize');
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                dispatch({type: "LOADED_QUESTIONS", payload: data.results}); 
            });
    })
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
            {!quizState.showResults && quizState.questions.length > 0 && (
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