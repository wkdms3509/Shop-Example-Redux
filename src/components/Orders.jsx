import { useMemo } from 'react';
import '../css/Orders.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllItemfromCart, removeItemfromCart } from '../reducer/reducers';

const Orders = () => {
    const orders = useSelector((state) => state.myCart);
    const items = useSelector((state) => state.allItems);

    // console.log(orders);

    const dispatch = useDispatch();

    const removeAll = () => {
        dispatch(removeAllItemfromCart());
    }

    const totalPrice = useMemo(() => {
        return orders.map(order => {
            const {id, qty} = order;
            const orderitem = items.find(item => item.id === id);
            return orderitem.price * qty;
        })
        .reduce((l,r) => l + r, 0);
    }, [orders]);

    // 천 단위 표시
    const totalPrice2 = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    

    if(orders.length === 0) {
        return (
            <aside>
                <div className="empty">
                    <div className="title">You don't have any orders.</div>
                    <div className="subtitle">Click on a + add an order.</div>
                </div>
            </aside>
        );
    }

    return <aside >
        <div className="orders__body">
            {orders.map(order => {
                const {id, qty} = order;

                const onClickRemoveBtn = () => {
                    dispatch(removeItemfromCart(id));
                }

                return (
                    <div className="item" key={id}>
                        <div className="item__img">
                            <img src={order.thumnail} alt={order.title} />
                        </div>
                        <div className="content">
                            <p className="title">
                                {order.title} x {qty}
                            </p>
                        </div>
                        <div className="action">
                            <p className="price">₩{order.price * qty}</p>
                            <button className="btn__plus">+</button>
                            <button className="btn__minus">-</button>
                            <button className="btn__remove" onClick={onClickRemoveBtn} >x</button>
                        </div>
                    </div>
                );
                })
            }
        </div>
        <div className="total">
            <br />
            <div className="item">
                <div className="content">
                    <p>총 결제금액: {totalPrice2}원</p>
                    <button onClick={removeAll} className="removeAllBtn" >전체삭제</button>
                </div>
            </div>
            <button className="btn__order">주문하기</button>
        </div>
    </aside>
}

export default Orders;