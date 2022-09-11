import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import bg from '../../assets/images/basket.jpg'

interface DetailProps {
    strMeal: string
    strArea: string
    strMealThumb: string
    strInstructions: string
    strIngredients: string

}

const Detail = () => {
    const [state, setState] = useState<DetailProps>()
    const {id} = useParams()
    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    const getDetail = async () =>{
        try {
           const res = await axios.get(`${baseUrl}/lookup.php?i=${id}`)
        //    console.log(res.data.meals);
           setState(res.data.meals[0])
        } catch (error) {
            console.log(error);
        }
    }

    const getIngredients = (strIngredients: DetailProps) => {
        let ingredients: any = [];
    
        Object.entries(strIngredients).map(i => {
            const [key, value] = i;
    
            if (key.includes('strIngredient') && value) {
                ingredients.push(value)
            } else return
        })
    
        return ingredients
    }

    useEffect(() => {
        getDetail()
    }, [])

    // useEffect(() => {
    //     console.log(state)
    // }, [state])


  return (
    <div className='container-internal'>
        <h2 className='text-4xl font-medium pb-10'>{state?.strMeal}</h2>
        <p className='text-red-500 font-medium'>{state?.strArea} </p>
        <div className='grid md:grid-cols-2 grid-cols-1 '>
            <div className='relative w-full'>
                <img src={state?.strMealThumb} alt='image-food' width={'100%'} className='object-cover' />
            </div>
            <div className='md:pl-6 pl-0'>
                <div>
                    <h3 className='text-3xl md:mt-0 mt-5 mb-3'>Instructions</h3>
                    <p className='text-neutral-500 text-justify'>{state?.strInstructions}</p>
                </div>
                <div className='pt-3'>
                    <h3 className='text-3xl mb-3'>Recipes</h3>
                        {!!state && getIngredients(state).map((i: string) => (
                            <button className='border m-1 p-2'>{i}</button>
                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail