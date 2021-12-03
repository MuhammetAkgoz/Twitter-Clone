
import React from 'react'
import Mami from "../images/mami.jpeg"

function UserBox() {
    return (
        <div className="flex justify-between items-center mb-3 px-3 py-2 hover:bg-primary-light rounded-full cursor-pointer">
            <img src="https://pbs.twimg.com/profile_images/1303449606618054656/2gkYCRJh_400x400.jpg" alt="Muhammet Akgöz" className="w-11 h-11 rounded-full"></img>
            <div className="flex flex-col">
                <span className="text-base text-black font-bold">Muhammet Akgöz</span>
                <span className="text-sm text-gray-dark">@mami_akgz</span>
            </div>
            <div className="flex space-x-1 ml-3">
                <div className="w-1 h-1 rounded-full bg-gray-900"/>
                <div className="w-1 h-1 rounded-full bg-gray-900"/>
                <div className="w-1 h-1 rounded-full bg-gray-900"/>
            </div>
        </div>
    )
}

export default UserBox
