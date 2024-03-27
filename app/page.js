"use client";
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
const [maintask, setmaintask] = useState([]);

  const submithandler = (e)=>{
    e.preventDefault();
    // console.log(title, desc);
    setmaintask([...maintask, {title, desc}]);
    console.log(maintask);
    settitle("");
    setdesc("");
  };

  const deletehandler = (index)=>{
    let copytask = [...maintask];
    copytask.splice(index,1);
    setmaintask(copytask);
  }

  let rendertask = <h2>No Task Available</h2>

  if(maintask.length > 0){

    rendertask = maintask.map((Task,index)=>{
      return(
      <li key={index} className='flex items-center justify-between mb-5'>
        <div className='flex justify-between w-2/3 items-center'>
          <h5 className=' text-2xl font-semibold'>{Task.title}</h5>
          <h5 className=' text-2xl font-medium'>{Task.desc}</h5>
        </div>

        
        <button onClick={ ()=>{
          deletehandler(index);
        }}
         className=' bg-red-600 text-white px-4 py-2 font-bold rounded'>
          Delete
        </button>
      </li>
      );
  });
}
  return (
    <>
    <h1 className=' bg-black text-white p-5 text-5xl font-bold text-center'>TODO-LIST</h1>

    <form onSubmit={submithandler}>
      <input type="text"  className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter Task here'
      value={title}
      onChange={(e) =>{
        // console.log(e.target.value);
        settitle(e.target.value); 
      }}
      />

      <input type="text"  className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter Description here'
      value={desc}
      onChange={(e) =>{
        setdesc(e.target.value)
      }}
    />

      <button className=' bg-black text-white text-2xl px-4 py-3 rounded m-5 font-bold'> Add Task</button>
      
    </form>

    <hr/>

    <div className=' p-8 bg-slate-200'>
      <ul>
        {rendertask}
        </ul>
    </div>
    </>
  )
}

export default page
