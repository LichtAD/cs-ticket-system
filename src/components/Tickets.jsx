import React, { use } from 'react'
import IssueCard from './IssueCard'

const Tickets = ( {issuesPromise, taskStatus, setTaskStatus} ) => {

    const issuesData = use(issuesPromise)

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-4'>Customer Tickets</h1>

            <div className='grid grid-cols-2 gap-4'>
                {
                    issuesData.map(issue => (<IssueCard key={issue.id} issue={issue} taskStatus={taskStatus} setTaskStatus={setTaskStatus}></IssueCard>))
                }
            </div>
        </div>
    )
}

export default Tickets