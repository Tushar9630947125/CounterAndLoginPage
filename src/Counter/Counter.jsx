import React, { useState } from 'react'

const Counter = () => {
    let [state,setState] = useState(0)
     
    let handleIncrement = ()=>{
        setState(state+1)

    }
    let handleDecrement = ()=>{
        setState(state-1)

    }
  return (
    <div style={{border:"2px solid ",backgroundColor:"red"}}>
        <h1 style={{textAlign:'center'}}>{state}</h1>
        <div style={{display:"flex", justifyContent:"center",gap:"10px"}}>
        <button style={{backgroundColor:"white",color:'black'}} onClick={handleIncrement}>Increment</button>
        <button  style={{backgroundColor:"white",color:'black'}} onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter