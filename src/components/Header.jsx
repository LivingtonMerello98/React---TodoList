import React from "react";

function Header() {
    return (
        <header className="bg-slate-800 p-4 flex flex-row">
            <h3 className="text-white me-8">Header</h3>
            <nav>
                <ul className="flex flex-row">
                    <li className="hover:line me-4 text-white"><a href="#">Home</a></li>
                    <li className="hover:line me-4 text-white"><a href="#">About</a></li>
                    <li className="hover:line me-4 text-white"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;