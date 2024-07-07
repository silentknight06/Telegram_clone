import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  console.log(chatId)
  const nameuser=useSelector(store=>store.hamburger.username);
 const dataloading = async()=>{
        const data =  await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        const json = await data.json();
        console.log(json.data);

        setMessages(json.data);
 }

  useEffect(() => {
      dataloading();
  }, [chatId]);
  console.log(messages);
  return (
    <div className="w-96 mt-7 bg-slate-300   rounded-md">
         <h1 className=' font-bold text-center mt-3 '>{nameuser}</h1>
         <div className='pt-7 px-4 pb-4'> 
      {messages.map(msg => (
        <div key={msg.id} className="message">
          <div className=" bg-black text-white rounded-md my-4 p-3 ">{msg.message}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MessageList;