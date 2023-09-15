import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

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