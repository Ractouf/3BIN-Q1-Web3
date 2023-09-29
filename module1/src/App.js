const Hello = (props) => {
    return (<div><p>Hello {props.name}, you are {props.age} years old</p></div>)
}

const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    const friends = [
        { name: 'Dami1', age: 12 },
        { name: 'Migouel', age: 3 },
        { name: 'Kyle', age: 14 },
        { name: 'KekMan', age: 99999 },
        { name: 'Peter', age: 4 }
    ]

    return (
        <div>
            <p>Hello world, it is {now.toString()}</p>
            <p>
                {a} + {b} = {a + b}
            </p>

            <Hello name={friends[0].name} age={friends[0].age}/>
            <Hello name={friends[1].name} age={friends[1].age}/>
            <Hello name={friends[2].name} age={friends[2].age}/>
            <Hello name={friends[3].name} age={friends[3].age}/>
            <Hello name={friends[4].name} age={friends[4].age}/>

            <Footer />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app
        </div>
    )
}

export default App;
