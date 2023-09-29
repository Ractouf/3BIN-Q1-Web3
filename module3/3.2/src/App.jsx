const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <>
            <Course course = {course} />
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header title = {course.name}/>
            <Content content = {course.parts}/>
        </>
    )
}

const Header = ({title}) => {
    return <h1>{title}</h1>
}

const Content = ({content}) => {
    return (
        <>
            {content.map(cont => <Part key = {cont.id} part = {cont}/>)}
        </>
    )
}

const Part = ({part}) => {
    return (
        <>
            <p>{part.name} {part.exercises}</p>
        </>
    )
}

export default App
