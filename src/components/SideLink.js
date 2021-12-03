import React from 'react'

const SideLink = ({ name, Icon,active, OnMenuItemClick }) => {

    const isActive = active === name;

    return (
        <li className="group" onClick={()=>OnMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="cursor-pointer text-lg block pointer-events-none">
                <div className="inline-block">
                    <div className={`flex items-center px-2 py-3 group-hover:bg-primary-light group-hover:text-primary-base rounded-full ${isActive ? "text-primary-base" : ""}`}>
                        <Icon />
                        <span className="font-bold px-3">{name}</span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink
