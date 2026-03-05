import React from 'react'

const Banner = ( { taskStatus, resolvedTasks } ) => {
    return (
        <div className='flex items-center justify-center gap-4 mt-8 lg:px-8 px-2'>
            <div className='border-2 flex-1 bg-linear-to-r from-[#632ee3] via-[#8448ea] to-[#9f62f2] text-white h-52 rounded-lg flex flex-col items-center justify-center gap-2'>
                <h1 className='text-lg'>In Progress</h1>
                <span className='text-5xl font-semibold'>{taskStatus.length}</span>
            </div>
            <div className='border-2 flex-1 bg-linear-to-r from-[#54cf68] via-[#00aa7d] to-[#00827a] text-white h-52 rounded-lg flex flex-col items-center justify-center gap-2'>
                <h1 className='text-lg'>Resolved</h1>
                <span className='text-5xl font-semibold'>{resolvedTasks.length}</span>
            </div>
        </div>
    )
}

export default Banner