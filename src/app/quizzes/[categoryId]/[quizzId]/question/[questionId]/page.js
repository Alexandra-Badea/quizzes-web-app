"use client";

import React, { useEffect, useState } from "react";
import { categories } from "@/app/data";

const DEFAULT_QUESTION = { text: 'Loading...', options: [] };
const NO_QUESTION_FOUND = { text: 'No question found.', options: [] };

export default function Question({ params }) {
    const { categoryId, quizzId, questionId } = React.use(params);

    const categoryIdNumber = parseInt(categoryId);
    const quizzIdNumber = parseInt(quizzId);
    const questionIdNumber = parseInt(questionId);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionIdNumber - 1);
    const [question, setQuestion] = useState(DEFAULT_QUESTION);
    const [selectedOption, setSelectedOption] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [quizzCompleted, setQuizzCompleted] = useState(false);
    const [loading, setLoading] = useState(true);

    const category = categories.find(q => q.id === categoryIdNumber);
    const quizz = category.quizzes.find(q => q.id === quizzIdNumber);
    
    // const quizz = categories[categoryIdNumber]?.quizzes[quizzIdNumber]?.questions || [];

    console.log("Quizz is: ", quizz);


    useEffect(() => {
        if (quizz.questions.length > 0) {
            if (currentQuestionIndex < quizz.questions.length) {
                setQuestion(quizz.questions[currentQuestionIndex]);
            } else {
                setQuestion(NO_QUESTION_FOUND);
            }
            setLoading(false);
        } else {
            setLoading(false);
            setQuestion(NO_QUESTION_FOUND);
        }
    }, [quizz, currentQuestionIndex]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const nextQuestion = () => {
        if (selectedOption) {
            if (selectedOption === question.correctAnswer) {
                setCorrectAnswersCount(prevCount => prevCount + 1);
            }
        }

        if (currentQuestionIndex < quizz.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption("");
        } else {
            setQuizzCompleted(true);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Loading...</h2>
            </div>
        );
    }

    if (quizzCompleted) {
        return (
            <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100 p-4">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
                    You have completed the test!
                </h2>
                <p className="text-lg text-gray-700">
                    You got {correctAnswersCount} out of {quizz.questions.length} correct.
                </p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200"
                >
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
                Question {currentQuestionIndex + 1}
            </h1>
            <p className="text-lg text-gray-700 mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
                {question.text}
            </p>
            <div className="flex flex-col w-full max-w-md">
                {question.options.map((opt, index) => (
                    <div key={index} className="mb-4 flex items-center">
                        <input 
                            type="radio" 
                            id={`option-${index}`} 
                            name="options" 
                            value={opt} 
                            className="mr-2 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" 
                            checked={selectedOption === opt} 
                            onChange={handleOptionChange} 
                            aria-labelledby={`label-${index}`}
                        />
                        <label htmlFor={`option-${index}`} className="text-gray-800 text-lg" id={`label-${index}`}>{opt}</label>
                    </div>
                ))}
            </div>
            <button 
                onClick={nextQuestion} 
                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
                Next Question
            </button>
        </div>
    );
}