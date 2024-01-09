const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

const Header = ({ course }) => {
return (
    <h1>{course.name}</h1>
)
}

const Content = ({ parts }) => {
return (
    <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
)
}

const Part = ({ part }) => {
return (
    <p>{part.name} {part.exercises}</p>
)
}

const Total = ({ parts }) => {
const total = parts.reduce((summa, part) => summa + part.exercises, 0)
return (
    <p>total of {total} exercices</p>
    )
}


export default Course