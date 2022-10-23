import React, { useEffect } from 'react'

import '../styles/App.css';

const App = () => {

 const [date,setDate] = React.useState()

 useEffect(()=>{

   setDate(new Date().toLocaleString())

   const timerId = setInterval(()=>{

     setDate(new Date().toLocaleString())

   },1000)

   return () => clearInterval(timerId)

 },[])

 return (

   <div id="main">

     <div className="date">{date}</div>

   </div>

 )

}

 

 

export default App;
