'use client'
import { useEffect, useState} from 'react'
// import { fetchData } from '../utils/fetchData'
import preguntas from '../utils/mook'

export const Card = ()  => {
    //const [preguntas, setPreguntas] = useState([])
    // const [isloading, setIsLoading] = useState(true)
    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntuación, setPuntuación] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [tiempoRestante, setTiempoRestante] = useState(10)
    const [areDisabled, setAreDisabled] = useState(false)
    const [answersShown, setAnswersShown] = useState(false)


    /* useEffect(() => {
		setIsLoading(true)
			async function aux (){
			const response = await fetchData()
			setPreguntas(JSON.parse(response))
		}
		aux()
		setIsLoading(false)
	},[])
	*/

    function handleAnswerSubmit(isCorrect, e) {

        // añadir puntuación
        if (isCorrect) setPuntuación(puntuación + 1)
        // añadir estilos de pregunta
        e.target.classList.add(isCorrect ? 'correct' : 'incorrect')
        // cambiar a la siguiente pregunta

        setTimeout(() => {
            if (preguntaActual === preguntas.length - 1) {
                setIsFinished(true)
            } else {
                setPreguntaActual(preguntaActual + 1)
                setTiempoRestante(10)
            }
        }, 1500)
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1)
            if (tiempoRestante === 0) setAreDisabled(true)
        }, 1000)

        return () => clearInterval(intervalo)
    }, [tiempoRestante])

    if (isFinished)
        return (
            <main className="app bg-zinc-900">
                <div className="juego-terminado">
                    <span>
                        {' '}
            Obtuviste {puntuación} de {preguntas.length}{' '}
                    </span>
                    <button onClick={() => (window.location.href = '/')} className='bg-zinc-800 hover:bg-zinc-700 rounded-lg'>
                        {' '}
            Volver a jugar
                    </button>
                    <button
                        onClick={() => {
                            setIsFinished(false)
                            setAnswersShown(true)
                            setPreguntaActual(0)
                        }}
                        className=' bg-zinc-800 hover:bg-zinc-700 rounded-lg'
                    >
            Ver respuestas

                    </button>
                </div>
            </main>
        )

    if (answersShown)
        return (
            <main className="app bg-zinc-900">
                <div className="lado-izquierdo">
                    <div className="numero-pregunta">
                        <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                    </div>
                    <div className="titulo-pregunta">
                        {preguntas[preguntaActual].titulo}
                    </div>
                    <div>
                        {
                            preguntas[preguntaActual].opciones.filter(
                                (opcion) => opcion.isCorrect
                            )[0].textoRespuesta
                        }
                    </div>
                    <button
                        onClick={() => {
                            if (preguntaActual === preguntas.length - 1) {
                                window.location.href = '/'
                            } else {
                                setPreguntaActual(preguntaActual + 1)
                            }
                        }}
                    >
                        {preguntaActual === preguntas.length - 1
                            ? 'Volver a jugar'
                            : 'Siguiente'}
                    </button>
                </div>
            </main>
        )

    return (
        <main className="app bg-zinc-800">
            <div className="lado-izquierdo">
                <div className="numero-pregunta">
                    <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                </div>
                <div className="titulo-pregunta">
                    {preguntas[preguntaActual].titulo}
                </div>
                <div>
                    {!areDisabled ? (
                        <span className="hidden">
              Tiempo restante: {tiempoRestante}{' '}
                        </span>
                    ) : (
                        <button
                            onClick={() => {
                                setTiempoRestante(10)
                                setAreDisabled(false)
                                if (preguntaActual === preguntas.length - 1) {
                                    setIsFinished(true)
                                } else {
                                    setPreguntaActual(preguntaActual + 1)
                                }
                            }}
                        >
              Continuar
                        </button>
                    )}
                </div>
            </div>
            <div className="lado-derecho p-1">
                {preguntas[preguntaActual].opciones.map((respuesta) => (
                    <button
                        disabled={areDisabled}
                        key={respuesta.textoRespuesta}
                        onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                        className='m-1 bg-zinc-700 rounded-lg'
                    >
                        {respuesta.textoRespuesta}
                    </button>
                ))}
            </div>
        </main>
    )
}
