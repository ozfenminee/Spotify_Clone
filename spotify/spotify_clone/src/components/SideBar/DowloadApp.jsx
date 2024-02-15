import React from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export const DowloadApp = () => {
  return (
    <div  >
     <nav >
        <ul>
            <li>
                <a className='py-1 px-3 flex items-center group text-sm text-link font-semibold hover:text-white ' href="#">
                  <span className='mr-1' ><ArrowCircleDownIcon/></span>
                  Uygulamayı Yükle
                </a>
            </li>
        </ul>
     </nav>
    </div>
  )
}
