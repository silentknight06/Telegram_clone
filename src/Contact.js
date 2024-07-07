import React, { useState } from 'react'
import ChildList from './ChildList';
import MessageList from './MessagesList';

const Contact=()=> {
        const [selectchatid, setselectchatid]=useState(null);
        const [openmessage, setopenmessage]=useState(false);
        const handlemessage=()=>{
            setopenmessage(true);
        }
  return (
      <div className='flex'>
        <ChildList onSelectChat={setselectchatid} onClick={handlemessage}  />
        {
            selectchatid!=null &&   <MessageList chatId={selectchatid}  />
        }
      </div>
  )
}

export default Contact