export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ALL_ITEM = "REMOVE_ALL_ITEM";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
    myCart: [],
    allItems: [
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
    ]
};

// 액션 생성 함수
export const addItemToCart = (id) => {
    const findedItem = initialState.allItems.find(item => item.id === id);

    // if(orderItem === undefined) {
    //     return {
    //         type: ADD_ITEM,
    //         id,
    //         title: findedItem.title,
    //         desc: findedItem.desc,
    //         thumnail: findedItem.thumnail,
    //         url: findedItem.url,
    //         price: findedItem.price,
    //         quantity: 1,
    //     }
    // } else {
    //     return initialState.myCart.map(order => {
    //             if(order.id === id) {
    //                 return {
    //                     type: ADD_ITEM,
    //                     id,
    //                     title: findedItem.title,
    //                     desc: findedItem.desc,
    //                     thumnail: findedItem.thumnail,
    //                     url: findedItem.url,
    //                     price: findedItem.price,
    //                     quantity: order.quantity + 1
    //                 }
    //             } else {
    //                 return order;
    //             }
    //         }
    //     )}
    // }


    // return {
    //     type: ADD_ITEM,
    //     id,
    //     title: findedItem.title,
    //     desc: findedItem.desc,
    //     thumnail: findedItem.thumnail,
    //     url: findedItem.url,
    //     price: findedItem.price,
    //     quantity: 1,
    // }

    return {
        type: ADD_ITEM,
        id,
        title: findedItem.title,
        desc: findedItem.desc,
        thumnail: findedItem.thumnail,
        url: findedItem.url,
        price: findedItem.price,
    }
}

export const removeItemfromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        id: id,
    }
}

export const removeAllItemfromCart = () => {
    return {
        type: REMOVE_ALL_ITEM,
    }
}

export const increment = (id, quantity) => {
    return {
        type: INCREMENT,
        id: id,
        quantity,
    }
}


function itemReducer(state = initialState, action) {

    switch(action.type) {
        case ADD_ITEM:
            const item = state.allItems.find(product => product.id === action.id);
              
            const cartItem = state.myCart.find(item => item.id === action.id ? true : false);
        
              return {
                ...state,
                myCart: cartItem ? state.myCart.map(item => item.id === action.id
                        ? { ...item, qty: item.qty + 1 }
                        : item)
                  : [...state.myCart, { ...item, qty: 1 }],
              };

        case REMOVE_ITEM:
            return {
                ...state,
                myCart: state.myCart.filter(order => order.id !== action.id)
            }

        case REMOVE_ALL_ITEM:
            return {
                ...state,
                myCart: []
            }

        default: 
            return {
                ...state
            }
    }
    // if(previousState === undefined) {
    //     return []
    // }

    // if(action.type === ADD_ITEM) {
    //     return [...previousState, action.item]
    // }
    // return state;
}

// function cartReducer(state = initialState.myCart, action) {

// }

// export default combineReducers({
//     itemReducer, cartReducer
// })

export default itemReducer;