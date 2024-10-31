import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 shadow-md">
      <div className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300">
        <Link href="/">
          Quiz App
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link 
              href="/" 
              className="relative text-lg text-white transition duration-300 group"
            >
              Home
              <span className="absolute left-0 right-0 h-0.5 bg-blue-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/categories" 
              className="relative text-lg text-white transition duration-300 group"
            >
              Categories
              <span className="absolute left-0 right-0 h-0.5 bg-blue-200 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
