import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between border-b items-center'>
        <div className='font-bold text-lg'>mealapp</div>
        <ul className="md:flex md:h-14 md:items-center items-start text-base ">
                <Link to={'/'}>
                    <li className='md:px-7 py-2'>
                        <a href='#'> Home </a>
                    </li>
                </Link>
                <Link to={'/foods'}>
                    <li className='md:px-7 py-2'>
                        <a href='#'> Foods </a>
                    </li>
                </Link>
        </ul>
    </nav>
  )
}

export default Navbar