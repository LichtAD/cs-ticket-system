import React from 'react'
import { toast } from 'react-toastify';

const Status = ({ taskStatus, setTaskStatus, resolvedTasks, setResolvedTasks, issues, setIssues }) => {

    const handleComplete = (task) => {
        // console.log(task);

        // adding to resolved tasks after completing
        setResolvedTasks([...resolvedTasks, task]);

        // after completing, removing from task status
        setTaskStatus(taskStatus.filter(t => t.id !== task.id));

        // now removing from customer tickets
        setIssues(issues.filter(issue => issue.id !== task.id));

        toast.success("Task Completed");
    }

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

                <div>
                    {
                        resolvedTasks.length === 0 ?
                            <p className='text-gray-500'>No Resolved Task Found</p>
                            :
                            <div className='flex flex-col gap-4'>
                                {
                                    resolvedTasks.map(task => (
                                        <div key={task.id} className="card w-96 bg-[#E0E7FF] card-sm shadow-sm">
                                            <div className="card-body">
                                                <h2 className="card-title">{task.title}</h2>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Status