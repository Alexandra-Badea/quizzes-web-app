import { categories } from "@/app/data";
import Link from 'next/link';
import React from "react";

export default function Quizzes({ params }) {
    const { categoryId } = React.use(params);
    const catIdNumber = parseInt(categoryId);

    const category = categories.find(cat => cat.id === catIdNumber); 

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">Quizzes: {category.name}</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.quizzes.map(q => (
                    <li key={q.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <Link 
                            href={`/quizzes/${catIdNumber}/${q.id}`} 
                            className="block p-6 text-center transition-colors duration-300 hover:bg-blue-600 group"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-white">{q.title}</h2>
                            <p className="text-gray-600 group-hover:text-white">Click to start the quiz!</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}