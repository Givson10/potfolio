import { Link } from "react-router-dom";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";



export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
     
        <Link

          to="/"
          className="text-2xl font-bold text-blue-700 dark:text-blue-400"
        >
          MyApp
        </Link>

      
        <ul className="hidden md:flex space-x-6">
          <li>Givson</li>
          <li></li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 dark:hover:text-blue-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle Dark Mode"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-800" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>

      </div>
    </nav>
  );
}