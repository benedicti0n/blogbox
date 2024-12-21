const HeroSection: React.FC = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center bg-gray-100 p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Hero Text</h1>
            <p className="text-lg mb-6 text-gray-700">This is a description that provides more information about the content.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Write</button>
        </div>
    );
};

export default HeroSection; 