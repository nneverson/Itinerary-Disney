import React, {useState} from 'react'

export default function History() {

const useHistory = (initialState) =>{
    const [index, setIndex] = useState({initialState:0}) 
    const [history, setHitory] = useState({initialState:[initialState]})

const setState = (action) => {
    const newState = typeof action === 'function' ? action(prevState) : action;
    setHistory(prevState => [...prevState, newState])
    setIndex(preState => prevState + 1)
}

return [history[index], setState]
}

    return (
        <div>
            
        </div>
    )
}
