import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-between h-14 items-center text-base border-b">
                <li>
                    <a href='#' className='font-bold text-lg'>mealapp</a>
                </li>
            <div className='flex'>
                <Link to={'/'}>
                    <li className='px-7'>
                        <a href='#'> Home </a>
                    </li>
                </Link>
                <li className='px-7'>
                    <a href='#'> Foods </a>
                </li>
                <li className='px-7'>
                    <a href='#'> Ingredients </a>
                </li>
                <li>
                    <a href='#'> Local Culinary </a>
                </li>
            </div>
        </ul>
        
    </nav>
  )
}

export default Navbar