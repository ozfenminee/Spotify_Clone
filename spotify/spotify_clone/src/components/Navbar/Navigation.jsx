import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
export const Navigation = () => {
    const history=useNavigate()
  return (
  <nav className='flex items-center gap-x-4'>
    
    <button onClick={()=> history(-1)}> 
    <span><ArrowBackIosIcon/></span>
    </button>
    <button onClick={()=> history(1)}><span><ArrowForwardIosIcon/></span></button>
  </nav>
  )
}
