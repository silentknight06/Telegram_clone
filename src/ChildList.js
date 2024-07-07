import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setname } from './utils/hamburgerSlice';

const ChildList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);


 const datafinding = async() =>{
    const data = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
    const json = await  data.json();
    setChats(json.data.data);
 }
    const dispatch=useDispatch();
  useEffect(() => {
    datafinding();
  }, []);
   const hendleid =(chatid, name)=>{
    onSelectChat(chatid);
    dispatch(setname(name));
   }
  return (
      
    <div className="mx-8 my-6 bg-slate-800  w-96">
        
         <h1 className=' text-white font-bold  text-center pt-3'>All Chats</h1>
         <div className='px-5 py-7'> 
      {chats.map(chat => (
        <div key={chat.id} onClick={() =>{ hendleid(chat.id, chat.creator.name)} } className='p-1 cursor-pointer '>
         <div className=' bg-slate-100  rounded-md px-6 font-bold'> {chat.creator.name} </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ChildList;