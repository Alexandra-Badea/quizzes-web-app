import React from "react";
import Link from 'next/link';
import { categories } from "@/app/data";

export default function Quizz({ params }) {
    const { categoryId, quizzId } = React.use(params);

    const catIdNumber = parseInt(categoryId);
    const quizzIdNumber = parseInt(quizzId);

    console.log("Category ID is: ", catIdNumber);
    console.log("Quizz ID is: ", quizzIdNumber);

    const category = categories.find(q => q.id === catIdNumber);
    const quizz = category.quizzes.find(q => q.id === quizzIdNumber);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
                Category: {category.name}
            </h1>
            <p className="text-lg text-gray-800 mb-8 text-center">
                You selected the topic: <span className="font-semibold">{quizz.title}</span>
            </p>
            <div className="flex justify-center">
                <Link href={`/quizzes/${catIdNumber}/${quizzIdNumber}/question/1`}>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                        Start Quiz
                    </button>
                </Link>
            </div>
        </div>
    );
}