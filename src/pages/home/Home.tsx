import React from 'react'
import { Link } from 'react-router-dom'
import bf from '../../assets/images/food.jpg'
import './index.css'

const Home = () => {
  return (
    <div className='home relative'>
        <img src= {bf} alt='bg-home' className='relative h-screen w-full object-cover' />
        <span className='overlay'></span>
        <Link to={'/foods'}>
            <button className='btn'>See Food List</button>
        </Link>
    </div>

  )
}

export default Home