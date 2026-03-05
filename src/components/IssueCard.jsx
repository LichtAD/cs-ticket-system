import React from 'react'
import { toast } from 'react-toastify';

const IssueCard = ({ issue, taskStatus, setTaskStatus }) => {

    // console.log(issue);
    const { id, title, description, customer, priority, status, createdAt } = issue;

    const handleClick = (issue) => {
        // console.log(issue);

        if (taskStatus.find(t => t.id === issue.id)) {
            toast.error("Issue already in Task Status");
            return;
        }

        setTaskStatus([...taskStatus, issue]);
        toast("Issue added to Task Status");
    }

    return (
        <div onClick={() => handleClick(issue)} className='cursor-pointer'>
            <div className="card bg-base-100 h-36 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">{title}</h2>
                        <div className={`badge ${status === 'Open' ? 'badge-success' : 'badge-warning'}`}>{status}</div>
                    </div>
                    <p>{description}</p>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <p>#{id}</p>
                            <p className={`${priority === 'HIGH PRIORITY' ? 'text-red-500' : priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : 'text-green-500'}`}>{priority}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <h1>{customer}</h1>
                            <div>
                                <p>{createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IssueCard