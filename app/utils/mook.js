const preguntas = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el mejor lenguaje de programación?',
        opciones: [
            { textoRespuesta: 'JavaScript', isCorrect: true },
            { textoRespuesta: 'PHP', isCorrect: false },
            { textoRespuesta: 'C++', isCorrect: false },
            { textoRespuesta: 'Kotlin', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: 'Con Lasfito aprendes de tutoriales...?',
        opciones: [
            { textoRespuesta: 'sin contenido', isCorrect: false },
            { textoRespuesta: 'sin relleno', isCorrect: true },
            { textoRespuesta: 'sin gracia :v', isCorrect: false },
            { textoRespuesta: 'sin código', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es la capital de Francia?',
        opciones: [
            { textoRespuesta: 'Madrid', isCorrect: false },
            { textoRespuesta: 'Londres', isCorrect: false },
            { textoRespuesta: 'París', isCorrect: true },
            { textoRespuesta: 'Berlín', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuánto es `11` + 1 en JavaScript?',
        opciones: [
            { textoRespuesta: '111', isCorrect: true },
            { textoRespuesta: '12', isCorrect: false },
            { textoRespuesta: 'Syntax Error', isCorrect: false },
            { textoRespuesta: '`11`1', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué año fue creado JavaScript?',
        opciones: [
            { textoRespuesta: '1997', isCorrect: false },
            { textoRespuesta: '2001', isCorrect: false },
            { textoRespuesta: '1987', isCorrect: false },
            { textoRespuesta: '1995', isCorrect: true },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el océano más grande del mundo?',
        opciones: [
            { textoRespuesta: 'Océano Atlántico', isCorrect: false },
            { textoRespuesta: 'Océano Índico', isCorrect: false },
            { textoRespuesta: 'Océano Pacífico', isCorrect: true },
            { textoRespuesta: 'Océano Ártico', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el número áureo, también conocido como Phi?',
        opciones: [
            { textoRespuesta: '3.14159', isCorrect: false },
            { textoRespuesta: '1.61803', isCorrect: true },
            { textoRespuesta: '2.71828', isCorrect: false },
            { textoRespuesta: '0.57721', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién fue el primer ser humano en viajar al espacio?',
        opciones: [
            { textoRespuesta: 'Neil Armstrong', isCorrect: false },
            { textoRespuesta: 'Buzz Aldrin', isCorrect: false },
            { textoRespuesta: 'Yuri Gagarin', isCorrect: true },
            { textoRespuesta: 'Alan Shepard', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el componente químico más abundante en la Tierra?',
        opciones: [
            { textoRespuesta: 'Oxígeno', isCorrect: true },
            { textoRespuesta: 'Hidrógeno', isCorrect: false },
            { textoRespuesta: 'Carbono', isCorrect: false },
            { textoRespuesta: 'Nitrógeno', isCorrect: false },
        ],
    },
]

export default preguntas
