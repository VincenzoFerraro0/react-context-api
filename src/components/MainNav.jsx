
// Importa NavLink per creare link di navigazione dinamici
import { NavLink } from "react-router-dom";

// Componente di navigazione principale
export default function MainNav() {
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo del sito */}
                <a href="#" className="text-2xl font-bold text-blue-600">Blog</a>
                
                {/* Links di navigazione - Visibili solo su schermi medi e grandi */}
                <ul className="hidden md:flex space-x-6">
                    <li><NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink></li>
                    <li><NavLink to="/about-us" className="text-gray-700 hover:text-blue-600">Chi Siamo</NavLink></li>
                    <li><NavLink to="/posts" className="text-gray-700 hover:text-blue-600">Posts</NavLink></li>
                </ul>
                
                {/* Bottone di login - Visibile solo su schermi medi e grandi */}
                <div className="hidden md:block">
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
                </div>
            </div>
        </nav>
    );
};
