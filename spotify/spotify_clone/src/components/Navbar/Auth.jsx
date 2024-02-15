import { Menu } from '@headlessui/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';

export const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: 'Mine Özfen',
    avatar: '/Users/mineozfen/Desktop/spotify/spotify_clone/src/assets/istockphoto-1473534533-612x612.jpg'
  };

  return (
    <Menu as='nav' className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button 
            className={`flex items-center h-8 rounded-3xl pr-1 ${isOpen ? 'bg-active' : 'bg-black'} hover:bg-active`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={user.avatar} className='w-8 h-8 rounded-full p-px mr-2' alt="User Avatar" />
            <span className='text-sm font-semibold mr-2'>{user.name}</span>
            <span className={isOpen ? 'rotate-180' : ''}><ArrowDropDownIcon/></span>
          </Menu.Button>
          {isOpen && (
            <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded-lg mt-1"}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`block px-4 py-1 text-xs ${active ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-500 hover:text-white`}
                    href="#"
                  >
                    <span className='mr-1'><LinkIcon/></span>
                    Account 
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`block px-4 py-1 text-xs ${active ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-500 hover:text-white`}
                    href="#"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`block px-4 py-1 text-xs ${active ? 'bg-blue-500 text-white' : 'text-black'} hover:bg-blue-500 hover:text-white`}
                    href="#"
                  >
                    Log Out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
};
