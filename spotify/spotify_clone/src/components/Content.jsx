import React from 'react'
import { Navbar } from './Navbar'
import {Routes,Route } from 'react-router-dom'
import {Home} from "./views/Home"
import {Search} from "./views/Search"
import { Collection } from './views/Collection'

export const Content = () => {
  return (
    <div className=' flex-auto overflow-auto'> 
        <Navbar/>
        <div className='px-8 pt-4'></div>
        
        <Routes>
          <Route exact path='/' element={<Home/>}> 

          </Route>
          <Route path='/search' element={<Search/>}>

          </Route>
          <Route path='/collection' element={<Collection/>}>

          </Route>
          
      
        </Routes>
        
       

    </div>
    
  )
}
