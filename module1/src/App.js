const Hello = (props) => {
    return (<div><p>Hello {props.name}, you are {props.age} years old</p></div>)
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
      <div>
        <p>Hello world, it is {now.toString()}</p>
        <p>
            {a} + {b} = {a + b}
        </p>
          <Hello name = "Dami1" age = "12"/>
          <Hello name = "Migouel" age = "3"/>
          <Hello name = "Kyle" age = "14"/>
          <Hello name = "KekMan" age = "99999"/>
      </div>
  )
}

export default App;
