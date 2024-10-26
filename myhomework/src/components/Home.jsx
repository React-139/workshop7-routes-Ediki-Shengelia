import React, { useState } from 'react'
import { useFetchHook } from "../Hooks/useFetchHook";
import { HashLoader } from "react-spinners";
import Uni from "./Uni";

const Home = () => {
  const [country,setCountry]=useState('');
  const { isLoading, data, error } = useFetchHook(country);
const [isSubmit,setIsSubmit]=useState(false)
  const handleSubmit=(event)=>{
    event.preventDefault()
    setIsSubmit(true)
  }
  
  
  return (
   <>
   {isSubmit?<div> {isLoading && <HashLoader color="red" />}
      {data.map((item) => (
        <Uni props={item} key={item.name} />
      ))}</div>: <div>
    <h1>რომელი უნივერსიტეტი გინდა</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' placeholder='Enter country Name' value={country} onChange={(e)=>setCountry(e.target.value)}/>
      </div>
      <div>
        <button>Search</button>
      </div>
    </form>
  </div>}
   </>
  )
}

export default Home
