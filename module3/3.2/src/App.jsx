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

    const array1 = [1, 2, 3, 4];

    const sumWithInitial = array1.reduce((accumulator, currentValue) => {
        console.log(accumulator)
        console.log(currentValue)
        return accumulator + currentValue
    });

    console.log(sumWithInitial);

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
