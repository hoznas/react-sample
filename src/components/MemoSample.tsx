import {memo, useState} from 'react'


type FizzProps = {isFizz: boolean}

const Fizz = (props: FizzProps) => {
    console.log(`Fizz is redrew.  isFizz=${props.isFizz}`)
    return <span>{props.isFizz? 'Fizz': ''}</span>
}

type BuzzProps = {isBuzz: boolean}

const Buzz = memo<BuzzProps>((props)=>{
    console.log(`Buzz is redrew. isBuzz=${props.isBuzz}`)
    return(<span>{props.isBuzz? "Buzz": ""}</span>)
})

export const Parent = ()=>{
    const [count, setCount] = useState(1)
    const isFizz = (count % 3 === 0)
    const isBuzz = (count % 5 === 0)
    
    console.log(`Parent is redrew.`)
    return (
        <div>
            <button onClick={()=>setCount((c) => c + 1)}>
                +1
            </button>
            <p>{`count = ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}
