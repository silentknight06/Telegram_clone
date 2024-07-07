import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setItem } from "./utils/hamburgerSlice";

const Header = () => {
    //    const [flg, setflg]=useState(false);
       const dispatch=useDispatch();
       const hendlechlick=()=>{
           dispatch(setItem());
       }
  return (
      <div className="h-16 w-full bg-slate-500 flex">
         <img onClick={hendlechlick} className="h-12 rounded-sm pt-4  pl-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s" />
         <h1 className=" font-bold  m-auto">TELEGRAM</h1>
         <img className="h-12 rounded-md pt-4 pr-4" src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" />
      </div>
  )
}

export default Header