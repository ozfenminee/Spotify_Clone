import React from 'react'

export const PlayList = () => {
  return (
    <div className='flex h-96'>
        <nav className='mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-10 overflow-auto'>
            <ul>
                {new Array(40).fill(<li>
                    <a href="#" className='text-sm text-link hover:text-white flex h-8 items-center'>
                       22.Çalma Listem
                    </a>
                </li>)}
            </ul>

        </nav>
     </div>
     
  )
}
export default PlayList
