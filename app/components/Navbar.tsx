import React from 'react'
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="logo text-xl font-bold">Logo</div>
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/feed" className="hover:text-gray-400">Feed</a></li>
                <li><button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Write</button></li>
                <li><button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Toggle Theme</button></li>
            </ul>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
};

export default Navbar