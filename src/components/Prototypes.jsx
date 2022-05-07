import '../css/Prototypes.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../reducer/reducers';

const Prototypes = () => {
    const items = useSelector(state => state.allItems);
    const dispatch = useDispatch();

    const itemList = items.map(item => {
        const {id, title, thumnail, url, price, desc} = item;
        
        const onClickInsertBtn = () => {
            dispatch(addItemToCart(id));
        }

        return (
            <div key={id} className="item">
                <a href={url} target="_blank" rel="noreferrer">
                    <div>
                        <img className="item__img" src={thumnail} alt={title} />
                    </div>
                </a>
                <div className="item__info">
                    <div className="main__info">
                        <div className="item__title">
                            {title}
                            <p className="item__price">₩ {price}</p>
                        </div>
                        <div className="btn">
                            <BsFillCartPlusFill onClick={onClickInsertBtn} className="icon icon--plus" size="32" />
                        </div>
                    </div>
                    <p className="item__desc">{desc}</p>
                </div>
            </div>
            
        );
    })

    return (
        <div className="itemList">
            {itemList}
        </div>
    );
}

export default Prototypes;