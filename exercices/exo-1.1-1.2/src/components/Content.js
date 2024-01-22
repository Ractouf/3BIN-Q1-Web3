const Part = (props) => {
    return (<p>{props.part} {props.exercises}</p>)
}

const Content = (props) => {
    return (
        <>
            <Part part = {props.courses[0].part} exercises = {props.courses[0].exercises}/>
            <Part part = {props.courses[1].part} exercises = {props.courses[1].exercises}/>
            <Part part = {props.courses[2].part} exercises = {props.courses[2].exercises}/>
        </>
    )
}

export default Content;