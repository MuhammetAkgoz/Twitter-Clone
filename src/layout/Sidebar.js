import React, {useState} from 'react'
import TwitterLogo from "../images/twitter.svg"
import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon } from '../icons/icons'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'

const Sidebar = () => {

    const SideLinks = [
        {
            name: "Home",
            icon: HomeIcon
        },
        {
            name: "Explore",
            icon: ExploreIcon
        },
        {
            name: "Bookmark",
            icon: BookmarksIcon
        }, 
        {
            name: "Lists",
            icon: ListsIcon
        },
        {
            name: "Messages",
            icon: MessagesIcon
        },
        {
            name: "More",
            icon: MoreIcon
        },
        {
            name: "Notification",
            icon: NotificationsIcon
        },
        {
            name: "Profile",
            icon: ProfileIcon,
        }
    ]

    const [active, setActive] = useState("home")

    const handleItemClick = (name) => {
            setActive(name)
    }

    return (
        <div className="flex flex-col justify-between px-3 w-72 sticky top-0 h-screen">
            <div>
                <div className="mb-4 mt-1 flex items-center justify-center hover:bg-primary-light w-12 h-12 rounded-full">
                    <img src={TwitterLogo} alt="Twitter Logo"></img>
                </div>
                <nav className="mb-4">
                    <ul>
                        {SideLinks.map(link => {
                           return <SideLink key={link.name} name={link.name} Icon={link.icon} active={active} OnMenuItemClick={handleItemClick}/>
                        })}
                    </ul>
                </nav>
                <button className="bg-primary-base py-3 px-8 w-11/12 rounded-full text-white shadow-lg hover:bg-primary-dark transform transition-colors delay-100">Tweet</button>
            </div>
            <UserBox/>
        </div>
    )
}

export default Sidebar
