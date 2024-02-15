import React from 'react'
import logo from "../assets/Spotify_Logo_CMYK_Green.png"
import { Menu } from './SideBar/Menu'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PlayList } from './SideBar/PlayList';
import { DowloadApp } from './SideBar/DowloadApp';
export const SideBar = () => {
  return (
    <div className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
      <a href="#" className='mb-7 px-6'>
      <img src={logo} alt="" className='h-10'/>
      </a>
      <Menu/>
      <nav className='mt-6'>
        <ul>
          <li>
            <a href="#" className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white '>
              <span className='w-6 h-6 flex items-center justify-center mr-1 bg-opacity-60 rounded-sm  '><AddBoxIcon/></span>
              Çalma Listesi Oluştur
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className='w-6 h-6 flex items-center justify-center mr-1 bg-opacity-60 rounded-sm'><FavoriteIcon/></span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>

      </nav>
      
      <PlayList/>
      <DowloadApp/>
      </div>
  )
}
