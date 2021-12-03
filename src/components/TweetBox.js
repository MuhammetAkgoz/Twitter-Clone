import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PopulerIcon, ScheduleIcon } from '../icons/icons'
import db from '../firebase'
import { collection,addDoc,serverTimestamp } from '@firebase/firestore'

const TweetBox = () => {

    const colRef = collection(db, ("tweets"))

    const [tweet, setTweet] = useState("")

    const sendTweet = async () => {
        if(tweet !== ""){
            await addDoc(colRef,{
                displayName: "Muhammet Akgöz",
                username : "@mami_akgz",
                tweet,
                timestamp: serverTimestamp(),
                image : "https://picsum.photos/200/300",
                avatar: "https://pbs.twimg.com/profile_images/1303449606618054656/2gkYCRJh_400x400.jpg"
            })
        }
    }

    return (
        <div className="flex-1 flex-col mt-2 px-2">
            <textarea
                className="text-lg w-full text-gray-dark outline-none resize-none"
                placeholder="What's happening?"
                onChange={e => setTweet(e.target.value)}
                value={tweet} />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
                        <ImageIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
                        <GIFIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
                        <EmojiIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
                        <PopulerIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center hover:bg-gray-extraLight w-10 h-10 rounded-full">
                        <ScheduleIcon className="w-5 h-5 text-primary-base" />
                    </div>
                </div>
                <button onClick={sendTweet} className="bg-primary-base text-white py-2 px-4 rounded-full font-medium">Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
