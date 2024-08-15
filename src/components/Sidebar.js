import React from 'react';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";





export default function Sidebar() {
    const mainLinks = [
        {
            icon: <GoHome className='text-xl' />,
            name: "Home",
        },
        {
            icon: <SiYoutubeshorts className='text-xl'/>,
            name : "Shorts",
        },
        {
            icon: <MdOutlineSubscriptions className='text-xl'/>,
            name : "Subscriptions",
        },

    ];
    const otherLinks =[
        {
            icon: <GoHistory className='text-xl'/>,
            name: "History",
        },
        {
            icon: <CgPlayList className='text-xl'/>,
            name: "Playlists",
        },
        {
            icon: <RiVideoLine className='text-xl'/>,
            name: "Your videos",
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name: "Watch Later",
        },
        {
            icon: <BiLike className='text-xl'/>,
            name:"Like videos",
        }
    ];


    return(
        <div className='w-2/12 pr-5 pt-2 overflow-auto pb-8 font-thin sidebar'>
            <ul className='flex flex-col border-b border-gray-600'>
                {mainLinks.map(({icon,name})=>{
                    return(
                        <li key={name} className={`pl-6 py-3 hover:bg-[#212121] ${name ==="Home"? "bg-[#212121]": "" } rounded-xl `}>
                            <a href="#" className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                })

                }
            </ul>
            <ul className='flex flex-col border-b border-gray-600'>
                {otherLinks.map(({icon,name})=>{
                    return(
                        <li key={name} className={`pl-6 py-3 hover:bg-[#212121] rounded-xl`}>
                            <a href="#" className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                }) 
                }
            </ul>
        </div>

    )
}