import { Link, Outlet } from 'react-router-dom';
import { css } from './Styles/app_styles';


function Navbar() {
    return (
      <div >
        <nav className='p-2 flex bg-black '>
         <div> 
         <img src='logoAE.png' alt='logo' className='flex h-14 m-2'/>
         </div>
         <div className= {css._navBarTittle} ><Link to="/">Check In</Link>      </div>
         <div className= {css._navBarTittle} ><Link to="/login">Login</Link>      </div>
        </nav>
  
        <hr />
  
        <div className='grid h-screen place-items-center'>
         <Outlet />
        </div>
        
      </div>
    );  
  }

  export default Navbar;