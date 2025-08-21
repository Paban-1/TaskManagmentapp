import React from 'react'
import { Outlet } from 'react-router-dom'

const ContentBox = () => {
  return (
    <div className="h-screen w-screen px-2 overflow-x-hidden overflow-y-scroll py-2 space-y-2 border-black dark:bg-black text-black dark:text-white">
        <Outlet/>
    </div>
  )
}

export default ContentBox