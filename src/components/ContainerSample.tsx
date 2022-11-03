import React from 'react'

type ContainerProps = {
    title: string
    children: React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {
    const {title, children} = props
    return (
        <div style = {{background: 'lightblue' }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="Hello">
            <p>background color</p>
        </Container>
    )
}

export default Parent