const IntialState = {
    cart: {}
}

  export default function RootReducer(state = IntialState, action) {

    switch (action.type) {
        case 'ADD_CART':
            state.cart[action.payload[0]] = action.payload[1]
            return { cart: state.cart }

        case 'UPDATE_CART':
            state.cart[action.payload[0]] = action.payload[1]
            return { cart: state.cart }

        case 'DELETE_CART':
            delete state.cart[action.payload[0]]
            return { cart: state.cart }
    }
}