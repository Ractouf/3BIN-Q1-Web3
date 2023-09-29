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

    const exercises = course.parts.map((part) => part.exercises)
    const sum  = exercises.reduce((a, c) => a + c);

    return (
        <>
            <Course course = {course} />
            <p>Total of {sum} exercises</p>
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header title = {course.name}/>
            <Content parts = {course.parts}/>
        </>
    )
}

const Header = ({title}) => {
    return <h1>{title}</h1>
}

const Content = ({parts}) => {
    return (
        <>
            {parts.map(cont => <Part key = {cont.id} part = {cont}/>)}
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
