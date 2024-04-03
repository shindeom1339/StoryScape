import React from 'react'
import appWriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import parse from 'html-react-parser'

function Postcard({ $id, title, content, featuredImage }) {
    const name = useSelector((state) => state.auth.userData?.name);
    return (

        <div className='p-5 bg-white sm:p-2 w-full duration-300 shadow-[0_10px_15px_-3px_rgba(17,66,50,0.3)] flex flex-col justify-between hover:scale-105 rounded-md min-w-64 h-full sm:w-72 md:w-1/4 lg:w-1/5 xl:w-1/6'>
            <span className="block p-3 relative h-48 rounded overflow-hidden">
                <img
                    src={appWriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                />
            </span>
            <hr className='border-[1.5px] border-black/25' />
            <div className="mt-4 mb-4">
                {/* <h3 className="text-gray-500 leading-3 font-semibold uppercase text-xs tracking-widest title-font mb-1">
                    Author: {name}
                </h3> */}
                <h2 className="text-black title-font text-lg font-medium line-clamp-2">
                    {title}
                </h2>
                <div className="mt-1 text-md mb-2 leading-5 text-gray-600 line-clamp-2">
                    {parse(content)}
                </div>
            </div>
            <Link to={`/post/${$id}`}>
                <div className='flex items-center border-2 w-[50%] py-1 px-2 justify-between  text-[#114232] font-medium hover:border-[#114232] duration-300 cursor-pointer'>
                    <button>
                        Read
                    </button>
                    <MdOutlineKeyboardDoubleArrowRight size={20} />
                </div>
            </Link>
        </div>
    )
}

export default Postcard
