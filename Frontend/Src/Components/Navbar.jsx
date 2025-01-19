export default function Navbar(){
    return(
        <>
    <div className="bg-[gray-900] text-gray-300 font-sans flex flex-col items-center mt-10">
      <header className="w-full max-w-5xl py-6 px-4 flex justify-between items-center bg-[#2F2C2C] rounded-tl-lg rounded-tr-lg shadow-lg">
        <div className="text-2xl font-bold text-white">N</div>
            <nav className="flex space-x-6 text-lg">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#profile" className="hover:text-gray-400">Profile</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="#login" className="hover:text-gray-400">Login</a>
            </nav>
      </header>
      </div>
        </>
    )
}