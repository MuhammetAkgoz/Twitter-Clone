import React, { useEffect,useState } from 'react'
import { collection, onSnapshot,orderBy } from '@firebase/firestore'
import db from "../firebase"
import { PopulerIcon } from '../icons/icons'
import mami from "../images/mami.jpeg"
import Divider from '../components/Divider'
import TweetBox from '../components/TweetBox'
import FeedList from '../components/FeedList'


const Content = () => {

    const colRef = collection(db,("tweets"));
    const [tweets, setTweets] = useState([])

    useEffect(() => {   
         onSnapshot(colRef,orderBy("timestamp","desc"),(snapshot) => {
          console.log(snapshot.docs) 
          setTweets(snapshot.docs.map(doc => doc.data()))
         })
    }, [])
    
    return (
        <div className="flex-1 flex-col border-l-2 border-r-2 border-gray-lightest"> 
          <header className="sticky top-0 z-10 bg-white flex items-center justify-between p-4 border-b border-gray-lightest">
            <span className="text-xl text-gray-900 font-bold">Home</span>
            <PopulerIcon className="w-6 h-6 text-primary-base"/>
          </header>
          <div className="flex px-4 py-3 space-x-4">
            <img src="https://pbs.twimg.com/profile_images/1303449606618054656/2gkYCRJh_400x400.jpg" alt="Muhammet Akgöz" className="w-10 h-10 rounded-full"/>
            <TweetBox/>
          </div>        
          <Divider/>
          <FeedList tweets={tweets}/>
        </div>
    )
}

export default Content
