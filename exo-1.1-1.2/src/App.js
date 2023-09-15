const Header = (props) => {
    return (<h1>{props.course}</h1>)
}

const Content = (props) => {
    return (<p>{props.part} {props.exercises}</p>)
}

const Total = (props) => {
    return (<p>Number of exercises {props.total}</p>)
}

const App = () => {
    const course = 'Half Stack application development';
    const courses = [
        { part: "Fundamentals of React", exercises: 10 },
        { part: "Using props to pass data", exercises: 7 },
        { part: "State of a component", exercises: 14 },
    ];

    return (
        <>
            <Header course = {course}/>

            <Content part = {courses[0].part} exercises = {courses[0].exercises} />
            <Content part = {courses[1].part} exercises = {courses[1].exercises} />
            <Content part = {courses[2].part} exercises = {courses[2].exercises} />

            <Total total = {courses[0].exercises + courses[1].exercises + courses[2].exercises} />
        </>
    );
}

export default App;