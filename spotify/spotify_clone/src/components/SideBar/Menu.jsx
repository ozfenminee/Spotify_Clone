import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
export const Menu = () => {
  return (
    <div>
        <nav className='px-2'>
            <ul className='flex flex-col'> 
                <li>
                    <NavLink activeClassName="bg-active text-white" exact to={"/"} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 '>
                       <span><HomeIcon/></span>
                        AnaSayfa
                        </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink activeClassName="bg-active text-white" to={"/search"} className='h-10 flex gap-x-4 items-center text-sm font-semibold  text-link rounded hover:text-white px-4'>
                       <span>
                        <SearchIcon/>
                       </span>
                        Ara
                        </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink activeClassName="bg-active text-white" to={"/collection"} className='h-10 flex gap-x-4 items-center text-sm font-semibold  text-link rounded hover:text-white px-4'>
                      <span>
                        <LibraryBooksIcon/>
                      </span>
                        Kitaplığın
                        </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        

   

  )
} 

