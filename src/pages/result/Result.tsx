import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router'
import axios from 'axios';

const Result = () => {
    const baseUrl = "https://www.themealdb.com/api/json/v1/1";
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    const getResult = async () =>{
        setLoading(true)
        try {
           const res = await axios.get(`${baseUrl}/filter.php?c=${category}`)
           setLoading(false);
           console.log(res);
           setState(res.data.meals)
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getResult()
    }, [])


  return (
    <div className='container-internal'>
        <h2 className='text-4xl pb-10'>{category}</h2>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 pt-10 border-t'>
        {!!state && state.length > 0  &&
            state.map((i: any) => (
                // <Link to={{pathname:`/detail/${i.idMeal}`}}>
                    <div className='relative w-full'>
                        <img src={i.strMealThumb} width={'100%'} className='object-cover rounded-2xl' />
                        <span className='overlay flex justify-center items-center text-white font-semibold md:text-lg text-sm'>{i.strMeal}</span>
                    </div>
                // </Link>
            ))
        }
        </div>
    </div>
  )
}

export default Result