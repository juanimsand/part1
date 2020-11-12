// TIENE LO PEDIDO POR LOS EJERCICIOS 1.9 Y 1.10, BUENO Y TAMBIEN DEL 1.11

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}

const Button = (props) => {
    return (<button onClick={props.onClick}>
        {props.text}
    </button>
    );
}

const Estadisticas = (props) => {
    if (props.datos[3] === 0) {
        return (
            <div>
                No feedback given
            </div>
        );
    }
    return (
        <table><tbody>
            <Estadistica text={props.statnames[0]} numero={props.datos[0]} />
            <Estadistica text={props.statnames[1]} numero={props.datos[1]} />
            <Estadistica text={props.statnames[2]} numero={props.datos[2]} />
            <Estadistica text={props.statnames[3]} numero={props.datos[3]} />
            <Estadistica text={props.statnames[4]} numero={props.datos[4]} />
            <Estadistica text={props.statnames[5]} numero={props.datos[5] + ' %'} />
        </tbody></table>
        );
}

const Estadistica = (props) => {
    return (
        <tr><td>{props.text}</td><td>{props.numero}</td></tr>    
    );
}

const App = () => {
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const titulo = 'Give feedback'
    const estadistica = 'Statistics'
    const total = good + neutral + bad
    let promedio = (good - bad) / total
    let porcentaje = good * 100 / total

    const setValorGood = nuevoValor => setGood(nuevoValor)
    const setValorNeutral = nuevoValor => setNeutral(nuevoValor)
    const setValorBad = nuevoValor => setBad(nuevoValor)

    const datos = [good, neutral, bad, total, promedio, porcentaje]
    const statnames = ['Good', 'Neutral', 'Bad', 'All', 'Promedio', 'Porcentaje']

    return (
        <div>
            <Header title={titulo} />
            <Button onClick={() => setValorGood(good + 1)} text="Good" />
            <Button onClick={() => setValorNeutral(neutral + 1)} text="Neutral" />
            <Button onClick={() => setValorBad(bad + 1)} text="Bad" />
            <Header title={estadistica} />
            <Estadisticas datos={datos} statnames={statnames} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))