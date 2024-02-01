import { useState } from 'react'
import classes from './App.module.css'
export const App = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <h3>{count}</h3>
        <button className={classes.button} onClick={()=>setCount(count => count+1)}>+</button>

    </div>
  )
}
