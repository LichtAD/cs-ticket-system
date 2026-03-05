import React from 'react'

const Navbar = () => {

    const lists = <div className='flex items-center gap-2 lg:flex-row flex-col'>
        <li><a>Item1</a></li>
        <li><a>Item3</a></li>

        <button className="btn bg-linear-to-r from-[#632ee3] via-[#8448ea] to-[#9f62f2] text-white">+ New Ticket</button>
    </div>

    return (
        <div className="navbar bg-base-100 shadow-sm px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
        </div>
    )
}

export default Navbar