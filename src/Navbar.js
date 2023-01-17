import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
      <div >
        <nav className='p-2 flex justify-evenly bg-blue-800  '>
         <div className=' font-semibold text-white p-3 ease-linear transform hover:scale-95 transition duration-250'><Link to="/">Pointeur</Link>      </div>
         <div className='font-semibold text-white p-3 ease-linear transform hover:scale-95 transition duration-250'><Link to="/login">Login</Link>      </div>
        </nav>
  
        <hr />
  
        <div className='grid h-screen place-items-center'>
         <Outlet />
        </div>
        
      </div>
    );
  }

  export default Navbar;