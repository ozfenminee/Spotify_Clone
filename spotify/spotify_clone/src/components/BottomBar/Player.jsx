import React, { useState } from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
 import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ReorderIcon from '@mui/icons-material/Reorder';
import DevicesIcon from '@mui/icons-material/Devices';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Range, getTrackBackground } from "react-range";

export const Player = () => {
  const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const [values,setValues]=useState([50])
  return (
    <div className='flex px-4 justify-between items-center h-full'>
        <div className='min-w-[11.25rem] w-[30%]'>
            
        </div>
        <div className=' max-w-[45.125rem] w-[40%]flex flex-col items-center '>
      <div className='flex items-center gap-x-2'>
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'><ShuffleIcon/></button>
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'><SkipPreviousIcon/></button>
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'><PauseIcon/></button>
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'><SkipNextIcon/></button>
       <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'><RepeatIcon/></button>
      </div>
      <div className='w-full'>
      <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
         onChange={(values) => setValues({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className='w-full h-7 flex group'
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              className={`h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100`}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
      </div>
      </div>
      <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
        
      </div>
        </div>
  )
}
