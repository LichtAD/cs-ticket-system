import React from 'react'

const Status = ({ taskStatus }) => {

    return (
        <div >
            <div className='mb-4'>
                <h1 className='text-2xl font-semibold mb-4'>Task Status</h1>

                {
                    taskStatus.length === 0 ?
                        <p className='text-gray-500'>No Task Found</p>
                        :
                        <div className='flex flex-col gap-4'>
                            {
                                taskStatus.map(task => (
                                    <div key={task.id} className="card w-96 bg-base-100 card-sm shadow-sm">
                                        <div className="card-body">
                                            <h2 className="card-title">{task.title}</h2>
                                            <div className="">
                                                <button onClick={() => handleComplete(task)} className="btn btn-success w-full">Complete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }


            </div>
            <div>
                <h1 className='text-2xl font-semibold mb-4'>Resolved Task</h1>
            </div>
        </div>
    )
}

export default Status