import React from 'react'
import CreateIssue from './createIssue'
import { useState } from 'react'

export default function Todo() {
    const [add , setAdd] = useState(false)
    const handleTask = () => {
        setAdd((prev) => !prev)
    }
  return (
    <div>
        <button onClick={handleTask}>Add todo</button>
        {add && <div>  <CreateIssue/></div>}
      
    </div>
  )
}
