'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PacmanLoader } from 'react-spinners'

export const Quiz = ({preguntas}) => {
    const category = useSelector(state => state.categoryState.title)

    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntuación, setPuntuación] = useState(0)
    const [isloading, setIsLoading] = useState(true)
    const [isFinished, setIsFinished] = useState(false)
    const [tiempoRestante, setTiempoRestante] = useState(10)
    const [areDisabled, setAreDisabled] = useState(false)
    const [answersShown, setAnswersShown] = useState(false)

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
        setIsLoading(true)
        if (preguntas.length !== 0) {
            setIsLoading(false)
        }
    }, [preguntas, isloading, category])


    return (
        <div className='flex justify-center items-center'>

            {
                isloading && (
                    <PacmanLoader color='#36d7b7' />
                )
            }

            {
                preguntas && !isFinished && !answersShown && (
                    <main className="app bg-slate-100 ring-2 ring-indigo-800 flex justify-center items-center m-2">
                        <div className="lado-izquierdo">
                            <div className="numero-pregunta">
                                <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                            </div>
                            <div className="titulo-pregunta">
                                {preguntas[preguntaActual]?.titulo}
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
                            {preguntas[preguntaActual]?.opciones.map((respuesta) => (
                                <button
                                    disabled={areDisabled}
                                    key={respuesta.textoRespuesta}
                                    onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                                    className='m-1 rounded-lg text-black font-medium ring-2 ring-indigo-700'
                                >
                                    {respuesta.textoRespuesta}
                                </button>
                            ))}
                        </div>
                    </main>
                )
            }
            {
                preguntas && (
                    isFinished  && (
                        <main className="app bg-slate-100">
                            <div className="juego-terminado gap-2">
                                <span>
                                    {' '}
                            Obtuviste {puntuación} de {preguntas.length}{' '}
                                </span>
                                <button onClick={() => (window.location.href = '/')} className='bg-slate-100 hover:bg-zinc-700 rounded-lg text-center   text-black ring-2 ring-indigo-700'>
                                    {' '}
                            Volver a jugar
                                </button>
                                <button
                                    onClick={() => {
                                        setIsFinished(false)
                                        setAnswersShown(true)
                                        setPreguntaActual(0)
                                    }}
                                    className='bg-slate-100 hover:bg-zinc-700 rounded-lg text-center   text-black ring-2 ring-indigo-700'
                                >
            Ver respuestas

                                </button>
                            </div>
                        </main>
                    )
                )
            }
            {
                answersShown && (
                    <main className="app bg-slate-100 ring-2 ring-indigo-700 mx-3">
                        <div className="lado-izquierdo">
                            <div className="numero-pregunta">
                                <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                            </div>
                            <div className="titulo-pregunta">
                                {preguntas[preguntaActual].titulo}
                            </div>
                            <div className='text-green-700'>
                                {
                                    preguntas[preguntaActual].opciones.filter(
                                        (opcion) => opcion.isCorrect
                                    )[0].textoRespuesta
                                }
                            </div>
                            <button className='text-black ring-2 ring-indigo-700 w-32 text-center rounded-lg font-semibold mt-2 '
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
            }
        </div>
    )
}

