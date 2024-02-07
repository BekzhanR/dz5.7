import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'

import classes from '../components/app.module.sass'
import { asyncGetProducts } from '../redux/slices/Mainslices.jsx'
import { Productcard } from '../components/Productcard.jsx'
import { Loading } from '../components/Loading.jsx'



export const MainPage = () => {
    const { products, loading } = useSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetProducts())
    }, [dispatch])

    return loading ? <Loading/> : (
        <div>
            <div className={'container'}>
                <div>
                    <div>
                        {products.map(item =>
                            <Productcard  item={item} key={item.id}/>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}
