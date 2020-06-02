import * as actionTypes from './Actions';
let initialState = {
    counter: 0,
    result: []
}
let c = 0;
const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        const temp = () => {
            const result = [...state.result]
            result.push({ id: c++, value: state.counter + 1 })
            return result
        }

        return {
            ...state,
            counter: state.counter + 1,
            result: temp()
        }

    }
    else if (action.type === actionTypes.DECREMENT) {
        const temp = () => {
            const result = [...state.result]
            result.push({ id: c++, value: state.counter - 1 })
            return result
        }

        return {
            ...state,
            counter: state.counter - 1,
            result: temp()
        }


    }
    else if (action.type === actionTypes.ADD) {
        const temp = () => {
            const result = [...state.result]
            result.push({ id: c++, value: state.counter + action.value })
            return result
        }

        return {
            ...state,
            counter: state.counter + action.value,
            result: temp()
        }

    }
    else if (action.type === actionTypes.SUB) {
        const temp = () => {
            const result = [...state.result]
            result.push({ id: c++, value: state.counter - action.value })
            return result
        }


        return {
            ...state,
            counter: state.counter - action.value,
            result: temp()
        }
    }
    else if (action.type === actionTypes.DELETE) {
        let result = []
        state.result.forEach(element => {
            if (element.id !== action.value)
                result.push({ id: element.id, value: element.value })
        });


        return {
            ...state,
            result: result
        }
    }
    else {
        return state
    }

}

export default reducer;