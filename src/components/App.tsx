import { useState } from 'react'
import classes from './App.module.css'
import { Link, Outlet } from 'react-router-dom'
export const App = () => {

  return (
    <div>
      <h1> PLATFORM={__PLATFORM__} </h1>
      
        <Outlet/>
    </div>
  )
}
