import React from 'react'
import { SearchIcon } from '../icons/icons'
import { Timeline } from 'react-twitter-widgets'

const Widget = () => {
    return (
        <aside className="w-80">
            <div className="m-3 p-3 flex items-center space-x-4 bg-gray-200 rounded-full focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-5 h-5 text-gray-dark" />
                <input type="text" placeholder="Search Twitter" className="bg-transparent focus:outline-none w-full text-sm text-gray-dark"></input>
            </div>
            <div>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'fatihamaercu'
                    }}
                    options={{
                        height: "1000"
                    }}
                />
            </div>
        </aside>
    )
}

export default Widget
