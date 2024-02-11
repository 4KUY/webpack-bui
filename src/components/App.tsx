import { useState } from 'react'
import classes from './App.module.css'
import { Link, Outlet } from 'react-router-dom'
import avatarPng from '../assets/cscs.png'
import Logo from '../assets/logo.svg'
export const App = () => {
    const [count, setCount] = useState<number>(0)

  if(__PLATFORM__ === 'mobile'){
    return <div>mobileComponent</div>
  }

  return (
    <div>
      <h1> PLATFORM={__PLATFORM__} </h1>
      <img width={100} alt='' src={avatarPng}  />
      <Logo width={180} fill={"red"} height={80}/>
      <Link to={'/about'} >about</Link><br/><Link to={'/shop'} >shop</Link>
        <h3 className={classes.value} >{count}</h3>
        <button className={classes.button} onClick={()=>setCount(count => count+1)}>+</button>

        <Outlet/>
    </div>
  )
}
