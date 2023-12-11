import { useReducer } from "react";

const inputReducer = (state, action) => {
    if (action.type === 'setBlur') {
        return { ...state, userInputTouched: action.value }
    }
    if (action.type === 'setInput') {
        return { ...state, userInput: action.value }
    }
    if (action.type === 'reset') {
        return { userInput: '', userInputTouched: false }
    }
    return {
        userInput: '',
        userInputTouched: null
    }
}

export default function useInput(logic) {
    const [inputData, dispatchInputData] = useReducer(inputReducer, {
        userInput: '',
        userInputTouched: null
    })
    const { userInput, userInputTouched } = inputData

    const handleInput = (e) => {
        dispatchInputData({ type: 'setInput', value: e.target.value })
    }
    const handleBlur = () => {
        dispatchInputData({ type: 'setBlur', value: true })
    }
    const inputIsInvalid = logic(userInput)
    const hasError = inputIsInvalid && userInputTouched

    const reset = () => {
        dispatchInputData({ type: 'reset' })
    }

    return {
        userInput,
        handleInput,
        handleBlur,
        inputIsInvalid,
        hasError,
        reset
    }
}

