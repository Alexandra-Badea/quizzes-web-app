import Link from 'next/link';
import { categories } from "../data";

export default function Categories() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">Categories</h1>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg">
        {categories.map(category => (
          <li key={category.id} className="border-b last:border-b-0">
            <Link 
              href={`../quizzes/${category.id}`} 
              className="block p-5 text-lg text-gray-800 hover:bg-blue-200 hover:scale-105 transition-transform duration-300 rounded-lg"
              aria-label={`Go to ${category.name} quizzes`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
