import { createContext, useState } from "react";

const CountContext = createContext()

const CountProvider = ({children}) => {
    const [count, setCount] = useState(5)
    const [variable2, setVariable2] = useState(10)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <CountContext.Provider value={{count, variable2, increment, setCount}}>
            {children}
        </CountContext.Provider>
    )
}
export { CountContext, CountProvider }