import logo from '../assets/worm-logo.png';

export function Header() {
    return (
      <header className="bg-gray-800 text-4xl font-extrabold text-white p-5 flex items-center justify-between space-x-10 rounded-2xl ">
        <div className='flex items-center gap-4'>
          <img src={logo} alt="worm" />
          <p>Min<span className='text-green-500'>h</span>oca TDA<span className="text-green-500 text-sm">H</span> </p>
        </div>
        <div className='flex'>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-2 px-4 rounded-2xl">
            Sign Up
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-2 px-4 rounded-2xl">
            Log In
          </button>
        </div>
      </header>
    )
}