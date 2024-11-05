
import './App.css';
import { useState } from 'react';

function App() {
  let rendom =''
  let[pro,setpro]=useState(false)
 
   
      if (pro) {
        rendom=<>
        <button className='p-[5px] pl-[10px] pr-[10px] bg-[black] text-[#fff] mt-[10px]' onClick={()=>{setpro(!pro)}}>hide</button>
        <p className='text-[30px] text-[aqua]'>You are invalid</p>
        </>
      }else{
        rendom=<>
        <button className='p-[5px] pl-[10px] pr-[10px] bg-[black] text-[#fff] mt-[10px]' onClick={()=>{setpro(!pro)}}>show</button>
        </>
      }
      return (
     <div className="App">
      {rendom}
     </div>
  );
}

export default App;
