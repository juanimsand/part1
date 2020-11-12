// TIENE RESUELTO EL 1.12 Y 1.13, Y TAMBIEN DEL 1.14

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>    
    );
}

const Header = (props) => {
    return (
        <h1>{props.titulo}</h1>
    );
}

const Cantvotos = (props) => {
    return (
        <div>
            Has {props.votos} votes
        </div>    
    );
}

const Masvotada = (props) => {
    const maximo = Math.max(...props.votos)
    const indice = props.votos.indexOf(maximo)
    return (
        <div>{props.anecdotas[indice]}</div>
    );
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votos, setVotos] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf, 0))

    const longitud = props.anecdotes.length
    
    const setUnValor = nuevoNumero => setSelected(nuevoNumero)
    
    const Votado = voto => {
        const nuevosVotos = [...votos]
        nuevosVotos[voto] += 1
        setVotos(nuevosVotos)
    }
    
    return (
        <div>
            <Header titulo="Anecdote of the date" />
            {props.anecdotes[selected]}<br></br>
            <Button onClick={() => setUnValor(Math.floor(Math.random() * (longitud)))} text="Next anecdote" />
            <Button onClick={() => Votado(selected)} text="Vote" /><br></br>
            <Cantvotos votos={votos[selected]} />
            <Header titulo="Anecdote with most votes" />
            <Masvotada votos={votos} anecdotas={props.anecdotes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,document.getElementById('root'))