import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { ImMic } from "react-icons/im";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { clearVideos, changeSearchTerm } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";




export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state)=>state.youtubeApp.searchTerm);

    const handleSearch = ()=> {
        if (location.pathname !== "/search") navigate("/search");
        else{
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false));
        }
    };

    return (
        <div className="flex px-11 h-14 justify-between items-center bg-[#212121] opacity-95 sticky">
            <div className="flex items-center text-2xl gap-7 ">
                <div>
                    <RxHamburgerMenu />
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <FaYoutube className="text-3xl text-red-500" />
                    <div className="relative">
                        <span className="text-2xl font-normal tracking-tighter font-oswald">YouTube</span>
                        <sup className="absolute text-xs font-thin font-roboto">
                            IN
                        </sup>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl ">
                        <div className="flex gap-5 items-center pr-5">
                            <input type="text" placeholder="Search" className="w-96 bg-zinc-900 focus:outline-none border-none" value={searchTerm} onChange={e=>dispatch(changeSearchTerm(e.target.value))}/>
                            
                        </div>
                        <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl ">
                            <FiSearch className="text-xl " />
                        </button>
                    </div>
                </form>

                <div className="text-lg rounded-full bg-zinc-900 p-3 ">
                    <ImMic />
                </div>
            </div>
            <div className="flex gap-7 items-center text-xl">

                <RiVideoAddLine className="text-2xl" />
                <div className="relative">
                    <FaRegBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                        {" "}9+{" "}</span>
                </div>
                <img src="https://picsum.photos/200/300?random=1" alt="Random Image" className="w-8 h-8 rounded-full"></img>
            </div>

        </div>
    );

}