import React from 'react';
import { Section } from "../Section"; 


export const Home = () => {
  const items = [
    {
      id: 1,
      title: 'Mine Özfen-123',
      description: 'Original Soundtrack',
      image: "/src/assets/mert.jpg",
      type:'album'
    },
    {
      id: 2,
      title: 'Mine Özfen-123',
      description: 'Original Soundtrack',
      image: "/src/assets/mert.jpg",
      type: 'artist'
    },
    {
      id: 3,
      title: 'Mine Özfen-123',
      description: 'Original Soundtrack',
      image: "/src/assets/mert.jpg"  ,
      type:'podcast'
    },
    {
      id: 4,
      title: 'Mine Özfen-123',
      description: 'Original Soundtrack',
      image:"/src/assets/mert.jpg",
      type:'album'  
     },
    {
      id: 5,
      title: 'Mine Özfen-123',
      description: 'Original Soundtrack',
      image: "/src/assets/mert.jpg" ,
      type:  'artist'
     }
  ];

  return (
    <div>
    <Section
      title="Recently Played"
      more="/abcdefg"
      items={items} 
    />
     <Section
      title="Show to try"
      more="/abcdefg"
      items={items} 
    />
     <Section
      title="Made For Mine Özfen"
      more="/abcdefg"
      items={items} 
    />
    </div>
  );
};
