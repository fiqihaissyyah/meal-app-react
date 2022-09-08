import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-between h-14 items-center text-base border-b">
                <li>
                    <a href='#' className='font-bold text-lg'>mealapp</a>
                </li>
            <div className='flex'>
                <li className='px-7'>
                    <a href='#'> Home </a>
                </li>
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