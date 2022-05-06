import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext"

const AppStateProvider = ({children}) => {
    const [prototypes, setPrototypes] = useState([
        {
            id: "a-1",
            title: "바나나",
            desc: "아침에 먹기 좋은 바나나",
            thumnail: "https://sitem.ssgcdn.com/31/32/54/item/1000033543231_i1_1200.jpg",
            url: "https://www.ssg.com/item/itemView.ssg?itemId=1000033543231&siteNo=6001&salestrNo=2034&tlidSrchWd=%EB%B0%94%EB%82%98%EB%82%98&srchPgNo=1&src_area=ssglist",
            price: 4000,
        },
        {
            id: "a-2",
            title: "베이글",
            desc: "최고의 베이글",
            thumnail: "https://sitem.ssgcdn.com/38/91/19/item/2097001199138_i1_1200.jpg",
            url: "https://www.ssg.com/item/itemView.ssg?itemId=2097001199138&siteNo=7009&salestrNo=2449&tlidSrchWd=%EB%B2%A0%EC%9D%B4%EA%B8%80&srchPgNo=1&src_area=ssglist",
            price: 10000,
        },
        {
            id: "a-3",
            title: "피자",
            desc: "American cheese pizza",
            thumnail: "https://sitem.ssgcdn.com/92/03/39/item/1000018390392_i1_1200.jpg",
            url: "https://www.ssg.com/item/itemView.ssg?itemId=1000230214984&siteNo=6001&salestrNo=2034&tlidSrchWd=%ED%94%BC%EC%9E%90&srchPgNo=1&src_area=ssglis",
            price: 20000,
        },
        {
            id: "a-4",
            title: "콜라",
            desc: "콜라는 코카콜라",
            thumnail: "https://sitem.ssgcdn.com/17/06/97/item/1000129970617_i1_1200.jpg",
            url: "https://www.ssg.com/item/itemView.ssg?itemId=1000129970617&siteNo=6001&salestrNo=2034&tlidSrchWd=%EC%BD%9C%EB%9D%BC&srchPgNo=1&src_area=ssglist",
            price: 2500,
        },
        {
            id: "a-5",
            title: "망고",
            desc: "하와이에서 방금 따온 망고",
            thumnail: "https://sitem.ssgcdn.com/38/92/18/item/2097001189238_i1_1200.jpg",
            url: "https://www.ssg.com/item/itemView.ssg?itemId=2097001189238&siteNo=7009&salestrNo=2449",
            price: 30000,
        },
        {
            id: "a-6",
            title: "해남 꿀고구마",
            desc: "해남 산지배송 ! 꿀고구마 3kg",
            thumnail: "https://sitem.ssgcdn.com/83/30/40/item/1000288403083_i1_1200.jpg",
            url: "https://www.ssg.com/item/itemView.ssg?itemId=1000288403083&siteNo=6001&salestrNo=2034",
            price: 23000,
        },
    ])
    const [orders, setOrders] = useState([]);

    const addToOrder = useCallback((id) => {
        setOrders(orders => {
            const finded = orders.find(order => order.id === id);

            if(finded === undefined) {
                return [...orders, {id, quantity: 1}];
            } else {
                return orders.map(order => {
                    if(order.id === id) {
                        return {
                            id,
                            quantity: order.quantity + 1
                        }
                    } else {
                        return order;
                    }
                })
            }
        });
    }, []);

    const remove = useCallback((id) => {
        // const newCartArr = orders.filter(order => order.id !== id);
        // setOrders(newCartArr);
        setOrders(orders => {
            return orders.filter(order => order.id !== id);
        })
    }, [orders]);

    const removeAll = useCallback(() => {
        setOrders([]);
    }, []);

    return (
        <AppStateContext.Provider 
            value={{
                prototypes,
                orders,
                addToOrder,
                remove,
                removeAll,
            }}>
            {children}
        </AppStateContext.Provider>
    );
}

export default AppStateProvider;