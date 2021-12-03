import React from 'react'
import { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon } from '../icons/icons'

const FeedItem = ({ avatar, image, displayName, timestamp, tweet, username }) => {
    return (
        <div>
            <article className="p-4 flex space-x-3 border-b border-gray-extraLight">
                <img src={avatar} className="w-10 h-10 rounded-full"></img>
                <div className="flex-1">
                    <div className="flex items-center text-sm">
                        <h4 className="font-bold">{displayName}</h4>
                        <span className="text-gray-dark  ml-2">{username}</span>
                        <div className="bg-gray-dark rounded-full h-1 w-1 mx-2" />
                        <span>{timestamp?.toDate().toLocaleTimeString('tr-TR')}</span>
                    </div>
                    <p className="mt-2 text-gray-dark text-sm">{tweet}</p>
                    {
                        image && <img src={image} className="mt-2 rounded-xl max-h-96 " />
                    }
                    <ul className="flex justify-between">
                        <li className="flex items-center space-x-1 text-sm text-gray-dark group mt-2 cursor-pointer">
                            <div className="w-7 h-7 group-hover:bg-primary-light flex items-center justify-center rounded-full">
                                <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base">7</span>
                        </li>
                        <li className="flex items-center space-x-1 text-sm text-gray-dark group mt-2 cursor-pointer">
                            <div className="w-7 h-7 group-hover:bg-primary-light flex items-center justify-center rounded-full">
                                <ReTweetIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base">7</span>
                        </li>
                        <li className="flex items-center space-x-1 text-sm text-gray-dark group mt-2 cursor-pointer">
                            <div className="w-7 h-7 group-hover:bg-primary-light flex items-center justify-center rounded-full">
                                <LikeIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base">7</span>
                        </li>
                        <li className="flex items-center space-x-1 text-sm text-gray-dark group mt-2 cursor-pointer">
                            <div className="w-7 h-7 group-hover:bg-primary-light flex items-center justify-center rounded-full">
                                <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                            </div>
                            <span className="group-hover:text-primary-base"></span>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    )
}

export default FeedItem
