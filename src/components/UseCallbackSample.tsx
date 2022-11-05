import React, {useCallback, useState} from 'react'

type ButtonProps = {
    onClick: ()=>void    
}

const DecrementButton = (props: ButtonProps) => {
    console.log('DecrementButton is plessed.')
    return <button onClick={props.onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) => {
    console.log('IncrementButton is plessed.')
    return <button onClick={props.onClick}>Increment</button>
})

const DoubleButton = React.memo((props: ButtonProps) => {
    console.log('DoubleButton is plessed.')
    return <button onClick={props.onClick}>Double</button>
})

export const Parent = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((c)=>c-1)
    }
    const increment = () => {
        setCount((c)=>c+1)
    }
    const double = useCallback(() => {
        setCount((c)=>c*2)
    },[])

    return (
        <div>
            <p>count={count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}

