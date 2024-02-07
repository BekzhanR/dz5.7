import { useSelector } from 'react-redux'

import classes from '../components/app.module.sass'
import { Busketcard } from '../components/Busketcard.jsx'



export const BasketPage = () => {
    const { basketProducts } = useSelector(state => state.basket)

    return (
        <div>
            <div>
                <div>

                    <div>
                        {basketProducts.length > 0
                            ? basketProducts.map(item => <Busketcard item={item}/>)
                            : <p>Пусто</p>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
