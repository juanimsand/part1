import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.titulo.name}</h1>
        </div>
    );
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    );
}


const Content = (props) => {
    console.log(props)
    console.log(props.parts[0])
    return (
        <div>
            <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises} />
            <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises} />
            <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises} />
        </div>
    );
}

const Total = (props) => {
    return (
        <div>
            <p>Number of excercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises
                + props.parts.parts[2].exercises}</p>
        </div>
    );
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header titulo={course}/>
            <Content parts={course} />
            <Total parts={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root') );
