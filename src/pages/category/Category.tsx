import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const Category = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);

    const getCategory = async () =>{
        setLoading(true)
        try {
           const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
           setLoading(false);
           console.log(res);
           setState( res.data.categories )
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getCategory()
    }, [])


  return (
    <>
        <div className='text-center p-20 bg-slate-100'>
            <p className='text-xs'>mealapp API website</p>
            <h1>See All The Delicious Foods</h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 pt-10 container-internal'>
            {loading && <Loader/>}
            {!!state && state.length > 0 &&
                state.map((i: any) => (
                    <Link to={{pathname:`/result/${i.strCategory}`}}>
                        <div className='relative w-full max-h-[100px]'>
                            <img src={i.strCategoryThumb} width={'100%'} height={'100px'} className='object-cover img-home' />
                            <span className='overlay flex justify-center items-center text-white font-semibold md:text-lg text-sm break-all'>{i.strCategory}</span>
                        </div>
                    </Link>
              ))
            }
        </div>
    </>
  )
}

export default Category