import { css } from "./Styles/app_styles";

function CheckIn() {
    return (

        
        
    
        <div className="flex space-x-4">
       
         <input className= {css._input} type="text" placeholder="Code"/>
         <button className= {css._button}>Check In</button>
        </div>
    );
  }
  
  export default CheckIn;