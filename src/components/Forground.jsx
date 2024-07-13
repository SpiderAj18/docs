import React, { useRef } from 'react'
import Card from './Card'



function Forground() {
    const ref = useRef(null);
    const data =[
        { 
            desc:"This is description 1",
            filesize:".9mb",
            close:true, 
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"green-600"}
        },
        { 
            desc:"This is description 2",
            filesize:".4mb",
            close:false, 
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green-600"}
        },
        { 
            desc:"This is description 2",
            filesize:".4mb",
            close:false, 
            
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green-600"}
        },
    ]

  return (
    <div ref={ref} className='absolute z-[3] w-full h-screen flex flex-wrap'>
      { data.map((item,index)=><Card data={item} reference={ref}/>)}
    </div>
  )
}

export default Forground