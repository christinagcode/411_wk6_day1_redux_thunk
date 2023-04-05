import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAKES':
            return action.value
        case 'DELETE_MAKE':
            const imports = [...state]
            console.log('in reducers')
            imports.splice(action.value, 1)
            return imports;
        default:   
            return state
    }
}

// const deletes = (state = [], action) =>{
//     switch (action.type) {
//         case 'DELETE_MAKE':
//             const imports = [...state]
//             imports.splice(action.value, 1)
//           return imports;
//         default:
//           return state;
//       }
//     };

export default combineReducers({ user, cars, makes })