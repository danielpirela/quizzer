export const preguntas = [
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


export const preguntasProgramacion1 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es un tipo de dato primitivo en JavaScript?',
        opciones: [
            { textoRespuesta: 'String', isCorrect: false },
            { textoRespuesta: 'Boolean', isCorrect: false },
            { textoRespuesta: 'Number', isCorrect: true },
            { textoRespuesta: 'Array', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué significa CSS en desarrollo web?',
        opciones: [
            { textoRespuesta: 'Computer Style Sheets', isCorrect: false },
            { textoRespuesta: 'Cascading Style Sheets', isCorrect: true },
            { textoRespuesta: 'Code Style Sheets', isCorrect: false },
            { textoRespuesta: 'Creative Style Sheets', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el resultado de la operación 5 + 3 en JavaScript?',
        opciones: [
            { textoRespuesta: '53', isCorrect: false },
            { textoRespuesta: '8', isCorrect: true },
            { textoRespuesta: 'Syntax Error', isCorrect: false },
            { textoRespuesta: '13', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué es AJAX en programación web?',
        opciones: [
            { textoRespuesta: 'Un lenguaje de programación', isCorrect: false },
            { textoRespuesta: 'Un tipo de base de datos', isCorrect: false },
            { textoRespuesta: 'Asynchronous JavaScript and XML', isCorrect: true },
            { textoRespuesta: 'Un framework de desarrollo', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el propósito del operador "typeof" en JavaScript?',
        opciones: [
            { textoRespuesta: 'Comparación de valores', isCorrect: false },
            { textoRespuesta: 'Declaración de variables', isCorrect: false },
            { textoRespuesta: 'Obtener el tipo de dato de una variable', isCorrect: true },
            { textoRespuesta: 'Iteración sobre un array', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál de los siguientes NO es un bucle en JavaScript?',
        opciones: [
            { textoRespuesta: 'for', isCorrect: false },
            { textoRespuesta: 'if', isCorrect: true },
            { textoRespuesta: 'while', isCorrect: false },
            { textoRespuesta: 'do-while', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué es el patrón de diseño "Singleton" en programación?',
        opciones: [
            { textoRespuesta: 'Un algoritmo de ordenamiento', isCorrect: false },
            { textoRespuesta: 'Un tipo de base de datos', isCorrect: false },
            { textoRespuesta: 'Un patrón de diseño que garantiza la existencia de una única instancia de una clase', isCorrect: true },
            { textoRespuesta: 'Una estructura de control de flujo', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la diferencia entre "let", "const" y "var" en JavaScript?',
        opciones: [
            { textoRespuesta: 'Son sinónimos y se pueden usar indistintamente', isCorrect: false },
            { textoRespuesta: 'Var y let son lo mismo, const es diferente', isCorrect: false },
            { textoRespuesta: 'Var tiene ámbito de función, let tiene ámbito de bloque, const es inmutable', isCorrect: true },
            { textoRespuesta: 'Const solo se puede usar para números', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué es una promesa (Promise) en JavaScript?',
        opciones: [
            { textoRespuesta: 'Una declaración de intenciones', isCorrect: false },
            { textoRespuesta: 'Un tipo de variable', isCorrect: false },
            { textoRespuesta: 'Un objeto que representa la eventual finalización o falla de una operación asincrónica', isCorrect: true },
            { textoRespuesta: 'Un tipo de función', isCorrect: false },
        ],
    },
]

export const preguntasProgramacion2 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el resultado de la siguiente expresión en JavaScript: 2 + 2?',
        opciones: [
            { textoRespuesta: '4', isCorrect: true },
            { textoRespuesta: '5', isCorrect: false },
            { textoRespuesta: '3', isCorrect: false },
            { textoRespuesta: '6', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: 'En programación, ¿qué significa la sigla HTML?',
        opciones: [
            { textoRespuesta: 'HyperText Markup Language', isCorrect: true },
            { textoRespuesta: 'High-level Text Language', isCorrect: false },
            { textoRespuesta: 'Home Tool Management Language', isCorrect: false },
            { textoRespuesta: 'Hyperlink and Text Management Language', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el operador utilizado para asignar un valor a una variable en JavaScript?',
        opciones: [
            { textoRespuesta: '=', isCorrect: true },
            { textoRespuesta: ':', isCorrect: false },
            { textoRespuesta: '+', isCorrect: false },
            { textoRespuesta: '==', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué hace la función parseInt() en JavaScript?',
        opciones: [
            { textoRespuesta: 'Convierte una cadena a un número entero', isCorrect: true },
            { textoRespuesta: 'Convierte un número a una cadena', isCorrect: false },
            { textoRespuesta: 'Calcula la raíz cuadrada de un número', isCorrect: false },
            { textoRespuesta: 'Devuelve un valor booleano', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el resultado de la expresión lógica "true && false" en JavaScript?',
        opciones: [
            { textoRespuesta: 'true', isCorrect: false },
            { textoRespuesta: 'false', isCorrect: true },
            { textoRespuesta: 'null', isCorrect: false },
            { textoRespuesta: 'undefined', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: 'En programación, ¿qué es un bucle "for"?',
        opciones: [
            { textoRespuesta: 'Una estructura de control de flujo', isCorrect: true },
            { textoRespuesta: 'Un tipo de dato', isCorrect: false },
            { textoRespuesta: 'Una función predefinida', isCorrect: false },
            { textoRespuesta: 'Un operador aritmético', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué es una API en el contexto de desarrollo de software?',
        opciones: [
            { textoRespuesta: 'Application Programming Interface', isCorrect: true },
            { textoRespuesta: 'Advanced Programming Instruction', isCorrect: false },
            { textoRespuesta: 'Automated Program Integration', isCorrect: false },
            { textoRespuesta: 'Application Process Integration', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el propósito principal del patrón de diseño MVC en desarrollo web?',
        opciones: [
            { textoRespuesta: 'Separar la lógica de presentación de la lógica de negocio', isCorrect: true },
            { textoRespuesta: 'Optimizar el rendimiento del servidor', isCorrect: false },
            { textoRespuesta: 'Definir la estructura de una base de datos', isCorrect: false },
            { textoRespuesta: 'Facilitar la comunicación entre servidores', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué es el concepto de "callback" en programación?',
        opciones: [
            { textoRespuesta: 'Una función que se pasa como argumento a otra función y se ejecuta después de un evento', isCorrect: true },
            { textoRespuesta: 'Un error en tiempo de ejecución', isCorrect: false },
            { textoRespuesta: 'Una variable que no ha sido declarada', isCorrect: false },
            { textoRespuesta: 'Una condición que verifica la validez de una expresión', isCorrect: false },
        ],
    },
]

export const preguntasProgramacion3 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es un lenguaje de programación ampliamente utilizado para el desarrollo web?',
        opciones: [
            { textoRespuesta: 'JavaScript', isCorrect: true },
            { textoRespuesta: 'PHP', isCorrect: false },
            { textoRespuesta: 'C++', isCorrect: false },
            { textoRespuesta: 'Kotlin', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el propósito principal de las funciones en programación?',
        opciones: [
            { textoRespuesta: 'sin contenido', isCorrect: false },
            { textoRespuesta: 'para rellenar', isCorrect: true },
            { textoRespuesta: 'sin gracia :v', isCorrect: false },
            { textoRespuesta: 'sin código', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué es un bucle en programación?',
        opciones: [
            { textoRespuesta: 'Una ciudad importante', isCorrect: false },
            { textoRespuesta: 'Una estructura de control que repite un bloque de código', isCorrect: true },
            { textoRespuesta: 'Una función matemática', isCorrect: false },
            { textoRespuesta: 'Una variable especial', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuánto es `11` + 1 en JavaScript?',
        opciones: [
            { textoRespuesta: '111', isCorrect: true },
            { textoRespuesta: '12', isCorrect: false },
            { textoRespuesta: 'Error de sintaxis', isCorrect: false },
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
        titulo: '¿Qué es un repositorio en Git?',
        opciones: [
            { textoRespuesta: 'Un lugar para almacenar comida', isCorrect: false },
            { textoRespuesta: 'Un espacio de almacenamiento en la nube', isCorrect: false },
            { textoRespuesta: 'Un historial de cambios de código fuente', isCorrect: true },
            { textoRespuesta: 'Un tipo de base de datos', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el concepto principal detrás de la programación orientada a objetos?',
        opciones: [
            { textoRespuesta: 'Herencia múltiple', isCorrect: false },
            { textoRespuesta: 'Polimorfismo', isCorrect: false },
            { textoRespuesta: 'Abstracción y encapsulamiento', isCorrect: true },
            { textoRespuesta: 'Programación procedural', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué es AJAX en el contexto de desarrollo web?',
        opciones: [
            { textoRespuesta: 'Una marca de productos de limpieza', isCorrect: false },
            { textoRespuesta: 'Una técnica de programación asíncrona', isCorrect: true },
            { textoRespuesta: 'Un lenguaje de programación', isCorrect: false },
            { textoRespuesta: 'Un estándar de codificación', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el propósito de la notación JSON en programación?',
        opciones: [
            { textoRespuesta: 'Representar ecuaciones matemáticas', isCorrect: false },
            { textoRespuesta: 'Definir reglas gramaticales', isCorrect: false },
            { textoRespuesta: 'Almacenar y transmitir datos estructurados', isCorrect: true },
            { textoRespuesta: 'Crear interfaces de usuario', isCorrect: false },
        ],
    },
]



export const preguntasPeliculas1 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el director de la película "El Padrino"?',
        opciones: [
            { textoRespuesta: 'Martin Scorsese', isCorrect: false },
            { textoRespuesta: 'Quentin Tarantino', isCorrect: false },
            { textoRespuesta: 'Francis Ford Coppola', isCorrect: true },
            { textoRespuesta: 'Steven Spielberg', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: 'En la película "Forrest Gump", ¿quién interpreta el papel principal?',
        opciones: [
            { textoRespuesta: 'Tom Hanks', isCorrect: true },
            { textoRespuesta: 'Leonardo DiCaprio', isCorrect: false },
            { textoRespuesta: 'Brad Pitt', isCorrect: false },
            { textoRespuesta: 'Johnny Depp', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué película ganó el Premio a la Mejor Película en los Premios de la Academia en 2020?',
        opciones: [
            { textoRespuesta: 'Parásitos', isCorrect: true },
            { textoRespuesta: '1917', isCorrect: false },
            { textoRespuesta: 'Joker', isCorrect: false },
            { textoRespuesta: 'Once Upon a Time in Hollywood', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué película aparece el personaje Jack Dawson interpretado por Leonardo DiCaprio?',
        opciones: [
            { textoRespuesta: 'Inception', isCorrect: false },
            { textoRespuesta: 'The Great Gatsby', isCorrect: false },
            { textoRespuesta: 'Titanic', isCorrect: true },
            { textoRespuesta: 'The Revenant', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Quién dirigió la trilogía "The Lord of the Rings"?',
        opciones: [
            { textoRespuesta: 'Christopher Nolan', isCorrect: false },
            { textoRespuesta: 'Peter Jackson', isCorrect: true },
            { textoRespuesta: 'George Lucas', isCorrect: false },
            { textoRespuesta: 'James Cameron', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la película animada de Disney que cuenta la historia de Simba?',
        opciones: [
            { textoRespuesta: 'Frozen', isCorrect: false },
            { textoRespuesta: 'Moana', isCorrect: false },
            { textoRespuesta: 'The Lion King', isCorrect: true },
            { textoRespuesta: 'Aladdin', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se estrenó la primera película de la saga "Star Wars"?',
        opciones: [
            { textoRespuesta: '1977', isCorrect: true },
            { textoRespuesta: '1983', isCorrect: false },
            { textoRespuesta: '1999', isCorrect: false },
            { textoRespuesta: '2005', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién interpretó a Hannibal Lecter en "The Silence of the Lambs"?',
        opciones: [
            { textoRespuesta: 'Robert De Niro', isCorrect: false },
            { textoRespuesta: 'Jack Nicholson', isCorrect: false },
            { textoRespuesta: 'Anthony Hopkins', isCorrect: true },
            { textoRespuesta: 'Al Pacino', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la película con más premios Oscar de la historia?',
        opciones: [
            { textoRespuesta: 'Gone with the Wind', isCorrect: false },
            { textoRespuesta: 'The Godfather', isCorrect: false },
            { textoRespuesta: 'Titanic', isCorrect: true },
            { textoRespuesta: 'Ben-Hur', isCorrect: false },
        ],
    },
]

export const preguntasPeliculas2 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el protagonista de la película "Matrix"?',
        opciones: [
            { textoRespuesta: 'Keanu Reeves', isCorrect: true },
            { textoRespuesta: 'Brad Pitt', isCorrect: false },
            { textoRespuesta: 'Tom Hanks', isCorrect: false },
            { textoRespuesta: 'Leonardo DiCaprio', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: 'En la película "El Señor de los Anillos", ¿quién es el portador del Anillo Único?',
        opciones: [
            { textoRespuesta: 'Aragorn', isCorrect: false },
            { textoRespuesta: 'Gandalf', isCorrect: false },
            { textoRespuesta: 'Frodo Bolsón', isCorrect: true },
            { textoRespuesta: 'Legolas', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Quién interpretó a Jack Dawson en la película "Titanic"?',
        opciones: [
            { textoRespuesta: 'Leonardo DiCaprio', isCorrect: true },
            { textoRespuesta: 'Johnny Depp', isCorrect: false },
            { textoRespuesta: 'Brad Pitt', isCorrect: false },
            { textoRespuesta: 'Tom Cruise', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué película aparece el personaje Darth Vader?',
        opciones: [
            { textoRespuesta: 'Star Trek', isCorrect: false },
            { textoRespuesta: 'Star Wars', isCorrect: true },
            { textoRespuesta: 'Blade Runner', isCorrect: false },
            { textoRespuesta: 'The Matrix', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el nombre del director de la película "El Padrino"?',
        opciones: [
            { textoRespuesta: 'Steven Spielberg', isCorrect: false },
            { textoRespuesta: 'Martin Scorsese', isCorrect: false },
            { textoRespuesta: 'Quentin Tarantino', isCorrect: false },
            { textoRespuesta: 'Francis Ford Coppola', isCorrect: true },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué actor interpretó a Iron Man en el Universo Cinematográfico de Marvel?',
        opciones: [
            { textoRespuesta: 'Chris Evans', isCorrect: false },
            { textoRespuesta: 'Chris Hemsworth', isCorrect: false },
            { textoRespuesta: 'Robert Downey Jr.', isCorrect: true },
            { textoRespuesta: 'Mark Ruffalo', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se estrenó la primera película de "Jurassic Park"?',
        opciones: [
            { textoRespuesta: '1993', isCorrect: true },
            { textoRespuesta: '1985', isCorrect: false },
            { textoRespuesta: '2000', isCorrect: false },
            { textoRespuesta: '1978', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién fue el director de la película "2001: Una odisea del espacio"?',
        opciones: [
            { textoRespuesta: 'Christopher Nolan', isCorrect: false },
            { textoRespuesta: 'Stanley Kubrick', isCorrect: true },
            { textoRespuesta: 'Alfred Hitchcock', isCorrect: false },
            { textoRespuesta: 'Steven Spielberg', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la película ganadora del Óscar a la Mejor Película en 2020?',
        opciones: [
            { textoRespuesta: 'Parasite', isCorrect: true },
            { textoRespuesta: '1917', isCorrect: false },
            { textoRespuesta: 'Joker', isCorrect: false },
            { textoRespuesta: 'Once Upon a Time in Hollywood', isCorrect: false },
        ],
    },
]

export const preguntasPeliculas3 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es la película ganadora del Oscar a la Mejor Película en 2020?',
        opciones: [
            { textoRespuesta: 'Parásitos', isCorrect: true },
            { textoRespuesta: 'Joker', isCorrect: false },
            { textoRespuesta: '1917', isCorrect: false },
            { textoRespuesta: 'El Irlandés', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿En qué película Leonardo DiCaprio finalmente ganó un Oscar como Mejor Actor?',
        opciones: [
            { textoRespuesta: 'Titanic', isCorrect: false },
            { textoRespuesta: 'El Lobo de Wall Street', isCorrect: false },
            { textoRespuesta: 'Revenant: El Renacido', isCorrect: true },
            { textoRespuesta: 'Django sin Cadenas', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Quién interpretó a Iron Man en el Universo Cinematográfico de Marvel?',
        opciones: [
            { textoRespuesta: 'Chris Hemsworth', isCorrect: false },
            { textoRespuesta: 'Chris Evans', isCorrect: false },
            { textoRespuesta: 'Robert Downey Jr.', isCorrect: true },
            { textoRespuesta: 'Mark Ruffalo', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué película se dice la famosa frase "Que la Fuerza te acompañe"?',
        opciones: [
            { textoRespuesta: 'Jurassic Park', isCorrect: false },
            { textoRespuesta: 'Star Wars: Una Nueva Esperanza', isCorrect: true },
            { textoRespuesta: 'Matrix', isCorrect: false },
            { textoRespuesta: 'E.T. el Extraterrestre', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el actor que interpretó a Jack Dawson en la película "Titanic"?',
        opciones: [
            { textoRespuesta: 'Brad Pitt', isCorrect: false },
            { textoRespuesta: 'Leonardo DiCaprio', isCorrect: true },
            { textoRespuesta: 'Tom Hanks', isCorrect: false },
            { textoRespuesta: 'Johnny Depp', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué película popular fue dirigida por Christopher Nolan y se centra en los sueños?',
        opciones: [
            { textoRespuesta: 'Inception', isCorrect: true },
            { textoRespuesta: 'Interstellar', isCorrect: false },
            { textoRespuesta: 'The Dark Knight', isCorrect: false },
            { textoRespuesta: 'Memento', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién fue el director de la película "Pulp Fiction"?',
        opciones: [
            { textoRespuesta: 'Steven Spielberg', isCorrect: false },
            { textoRespuesta: 'Quentin Tarantino', isCorrect: true },
            { textoRespuesta: 'Martin Scorsese', isCorrect: false },
            { textoRespuesta: 'Francis Ford Coppola', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué película de ciencia ficción aparece el personaje HAL 9000?',
        opciones: [
            { textoRespuesta: 'Blade Runner', isCorrect: false },
            { textoRespuesta: '2001: Una odisea del espacio', isCorrect: true },
            { textoRespuesta: 'Matrix', isCorrect: false },
            { textoRespuesta: 'Star Wars: El Imperio Contraataca', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la película que ganó el primer premio Oscar a la Mejor Película en la historia?',
        opciones: [
            { textoRespuesta: 'Lo que el viento se llevó', isCorrect: true },
            { textoRespuesta: 'Casablanca', isCorrect: false },
            { textoRespuesta: 'Gone Girl', isCorrect: false },
            { textoRespuesta: 'Citizen Kane', isCorrect: false },
        ],
    },
]



export const preguntasMusica1 = [
    {
        nivel: 'facil',
        titulo: '¿Quién es conocido como el Rey del Pop?',
        opciones: [
            { textoRespuesta: 'Elvis Presley', isCorrect: false },
            { textoRespuesta: 'Michael Jackson', isCorrect: true },
            { textoRespuesta: 'Madonna', isCorrect: false },
            { textoRespuesta: 'Prince', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué banda británica fue conocida como "Los Cuatro Fabulosos"?',
        opciones: [
            { textoRespuesta: 'The Rolling Stones', isCorrect: false },
            { textoRespuesta: 'The Who', isCorrect: false },
            { textoRespuesta: 'The Beatles', isCorrect: true },
            { textoRespuesta: 'Queen', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué instrumento tocaba Jimi Hendrix?',
        opciones: [
            { textoRespuesta: 'Batería', isCorrect: false },
            { textoRespuesta: 'Guitarra', isCorrect: true },
            { textoRespuesta: 'Teclado', isCorrect: false },
            { textoRespuesta: 'Bajo', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Quién es la voz principal de la banda U2?',
        opciones: [
            { textoRespuesta: 'Bono', isCorrect: true },
            { textoRespuesta: 'Chris Martin', isCorrect: false },
            { textoRespuesta: 'Thom Yorke', isCorrect: false },
            { textoRespuesta: 'Dave Grohl', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué década se originó el género musical del hip-hop?',
        opciones: [
            { textoRespuesta: '1970', isCorrect: true },
            { textoRespuesta: '1980', isCorrect: false },
            { textoRespuesta: '1990', isCorrect: false },
            { textoRespuesta: '1960', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál de estos artistas es conocido por ser el "Rey del Reggae"?',
        opciones: [
            { textoRespuesta: 'Bob Marley', isCorrect: true },
            { textoRespuesta: 'Sean Paul', isCorrect: false },
            { textoRespuesta: 'Shaggy', isCorrect: false },
            { textoRespuesta: 'Damian Marley', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el álbum más vendido de todos los tiempos?',
        opciones: [
            { textoRespuesta: 'Thriller - Michael Jackson', isCorrect: true },
            { textoRespuesta: 'The Dark Side of the Moon - Pink Floyd', isCorrect: false },
            { textoRespuesta: 'Back in Black - AC/DC', isCorrect: false },
            { textoRespuesta: 'Abbey Road - The Beatles', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién es conocido como el "Dios del Rock"?',
        opciones: [
            { textoRespuesta: 'Freddie Mercury', isCorrect: false },
            { textoRespuesta: 'Robert Plant', isCorrect: false },
            { textoRespuesta: 'Mick Jagger', isCorrect: false },
            { textoRespuesta: 'Elvis Presley', isCorrect: true },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué ciudad estadounidense se considera que nació el hip-hop?',
        opciones: [
            { textoRespuesta: 'Chicago', isCorrect: false },
            { textoRespuesta: 'Detroit', isCorrect: false },
            { textoRespuesta: 'Los Ángeles', isCorrect: false },
            { textoRespuesta: 'Bronx, Nueva York', isCorrect: true },
        ],
    },
]

export const preguntasMusica2 = [
    {
        nivel: 'facil',
        titulo: '¿Quién es conocido como "El Rey del Pop"?',
        opciones: [
            { textoRespuesta: 'Elvis Presley', isCorrect: false },
            { textoRespuesta: 'Michael Jackson', isCorrect: true },
            { textoRespuesta: 'Prince', isCorrect: false },
            { textoRespuesta: 'Madonna', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál de estos instrumentos es de viento?',
        opciones: [
            { textoRespuesta: 'Guitarra', isCorrect: false },
            { textoRespuesta: 'Trompeta', isCorrect: true },
            { textoRespuesta: 'Batería', isCorrect: false },
            { textoRespuesta: 'Violín', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué banda británica es famosa por su álbum "Sticky Fingers"?',
        opciones: [
            { textoRespuesta: 'The Rolling Stones', isCorrect: true },
            { textoRespuesta: 'The Beatles', isCorrect: false },
            { textoRespuesta: 'Led Zeppelin', isCorrect: false },
            { textoRespuesta: 'Pink Floyd', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el género musical principal de la banda Queen?',
        opciones: [
            { textoRespuesta: 'Rock', isCorrect: true },
            { textoRespuesta: 'Pop', isCorrect: false },
            { textoRespuesta: 'Country', isCorrect: false },
            { textoRespuesta: 'Rap', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué artista interpretó la canción "Purple Haze"?',
        opciones: [
            { textoRespuesta: 'Jimi Hendrix', isCorrect: true },
            { textoRespuesta: 'Eric Clapton', isCorrect: false },
            { textoRespuesta: 'Bob Dylan', isCorrect: false },
            { textoRespuesta: 'Janis Joplin', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué década se popularizó el estilo musical llamado "hip-hop"?',
        opciones: [
            { textoRespuesta: '1970', isCorrect: true },
            { textoRespuesta: '1980', isCorrect: false },
            { textoRespuesta: '1990', isCorrect: false },
            { textoRespuesta: '1960', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el nombre completo del líder de la banda U2?',
        opciones: [
            { textoRespuesta: 'Bono Vox', isCorrect: false },
            { textoRespuesta: 'Paul David Hewson', isCorrect: true },
            { textoRespuesta: 'The Edge', isCorrect: false },
            { textoRespuesta: 'Adam Clayton', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué famoso festival de música tuvo lugar en 1969 y contó con actuaciones legendarias?',
        opciones: [
            { textoRespuesta: 'Woodstock', isCorrect: true },
            { textoRespuesta: 'Coachella', isCorrect: false },
            { textoRespuesta: 'Glastonbury', isCorrect: false },
            { textoRespuesta: 'Lollapalooza', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién compuso la famosa ópera rock "Tommy"?',
        opciones: [
            { textoRespuesta: 'Roger Waters', isCorrect: false },
            { textoRespuesta: 'Pete Townshend', isCorrect: true },
            { textoRespuesta: 'Freddie Mercury', isCorrect: false },
            { textoRespuesta: 'David Bowie', isCorrect: false },
        ],
    },
]

export const preguntasMusica3 = [
    {
        nivel: 'facil',
        titulo: '¿Quién es conocido como el Rey del Pop?',
        opciones: [
            { textoRespuesta: 'Elvis Presley', isCorrect: false },
            { textoRespuesta: 'Michael Jackson', isCorrect: true },
            { textoRespuesta: 'Prince', isCorrect: false },
            { textoRespuesta: 'Madonna', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el álbum más vendido de todos los tiempos?',
        opciones: [
            { textoRespuesta: 'Dark Side of the Moon - Pink Floyd', isCorrect: false },
            { textoRespuesta: 'Thriller - Michael Jackson', isCorrect: true },
            { textoRespuesta: 'The Beatles (White Album) - The Beatles', isCorrect: false },
            { textoRespuesta: 'Back in Black - AC/DC', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Quién es el famoso guitarrista de la banda Queen?',
        opciones: [
            { textoRespuesta: 'Jimmy Page', isCorrect: false },
            { textoRespuesta: 'Brian May', isCorrect: true },
            { textoRespuesta: 'Jimi Hendrix', isCorrect: false },
            { textoRespuesta: 'Eric Clapton', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la canción más reproducida en la historia de Spotify?',
        opciones: [
            { textoRespuesta: 'Despacito - Luis Fonsi ft. Daddy Yankee', isCorrect: false },
            { textoRespuesta: 'Shape of You - Ed Sheeran', isCorrect: true },
            { textoRespuesta: 'See You Again - Wiz Khalifa ft. Charlie Puth', isCorrect: false },
            { textoRespuesta: 'Uptown Funk - Mark Ronson ft. Bruno Mars', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué banda británica es conocida como "Los Cuatro Fabulosos"?',
        opciones: [
            { textoRespuesta: 'The Rolling Stones', isCorrect: false },
            { textoRespuesta: 'The Who', isCorrect: false },
            { textoRespuesta: 'The Beatles', isCorrect: true },
            { textoRespuesta: 'Led Zeppelin', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Quién es la voz principal de la banda Coldplay?',
        opciones: [
            { textoRespuesta: 'Chris Martin', isCorrect: true },
            { textoRespuesta: 'Thom Yorke', isCorrect: false },
            { textoRespuesta: 'Bono', isCorrect: false },
            { textoRespuesta: 'Brandon Flowers', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se lanzó el álbum "Abbey Road" de The Beatles?',
        opciones: [
            { textoRespuesta: '1967', isCorrect: false },
            { textoRespuesta: '1969', isCorrect: true },
            { textoRespuesta: '1971', isCorrect: false },
            { textoRespuesta: '1965', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién es conocido como el "Dios del Trueno" en la guitarra?',
        opciones: [
            { textoRespuesta: 'Jimmy Page', isCorrect: false },
            { textoRespuesta: 'Jimi Hendrix', isCorrect: false },
            { textoRespuesta: 'Eddie Van Halen', isCorrect: true },
            { textoRespuesta: 'Eric Clapton', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el nombre real de la cantante Lady Gaga?',
        opciones: [
            { textoRespuesta: 'Stefani Joanne Angelina Germanotta', isCorrect: true },
            { textoRespuesta: 'Katy Perry', isCorrect: false },
            { textoRespuesta: 'Adele Laurie Blue Adkins', isCorrect: false },
            { textoRespuesta: 'Beyoncé Knowles', isCorrect: false },
        ],
    },
]



export const preguntasJuegos1 = [
    {
        nivel: 'facil',
        titulo: '¿En qué año se lanzó el primer juego de la serie "The Legend of Zelda"?',
        opciones: [
            { textoRespuesta: '1986', isCorrect: true },
            { textoRespuesta: '1995', isCorrect: false },
            { textoRespuesta: '2002', isCorrect: false },
            { textoRespuesta: '2010', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el personaje principal en la saga de juegos "Super Mario Bros."?',
        opciones: [
            { textoRespuesta: 'Luigi', isCorrect: false },
            { textoRespuesta: 'Bowser', isCorrect: false },
            { textoRespuesta: 'Princesa Peach', isCorrect: false },
            { textoRespuesta: 'Mario', isCorrect: true },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿En qué año se lanzó el juego "Minecraft"?',
        opciones: [
            { textoRespuesta: '2009', isCorrect: true },
            { textoRespuesta: '2015', isCorrect: false },
            { textoRespuesta: '2010', isCorrect: false },
            { textoRespuesta: '2012', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Quién es el creador de la serie de juegos "Metal Gear Solid"?',
        opciones: [
            { textoRespuesta: 'Hideo Kojima', isCorrect: true },
            { textoRespuesta: 'Shigeru Miyamoto', isCorrect: false },
            { textoRespuesta: 'Todd Howard', isCorrect: false },
            { textoRespuesta: 'Ken Levine', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el título completo del juego "CS:GO"?',
        opciones: [
            { textoRespuesta: 'Counter-Strike: Source', isCorrect: false },
            { textoRespuesta: 'Counter-Strike: Global Operations', isCorrect: false },
            { textoRespuesta: 'Counter-Strike: Global Offensive', isCorrect: true },
            { textoRespuesta: 'Counter-Strike: Online', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué año se lanzó el juego "Fortnite"?',
        opciones: [
            { textoRespuesta: '2017', isCorrect: true },
            { textoRespuesta: '2015', isCorrect: false },
            { textoRespuesta: '2018', isCorrect: false },
            { textoRespuesta: '2019', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el nombre del protagonista en la serie de juegos "Assassin\'s Creed"?',
        opciones: [
            { textoRespuesta: 'Ezio Auditore', isCorrect: false },
            { textoRespuesta: 'Connor Kenway', isCorrect: false },
            { textoRespuesta: 'Altair Ibn-LaAhad', isCorrect: false },
            { textoRespuesta: 'Desmond Miles', isCorrect: true },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se lanzó el primer juego de la serie "Final Fantasy"?',
        opciones: [
            { textoRespuesta: '1987', isCorrect: false },
            { textoRespuesta: '1990', isCorrect: false },
            { textoRespuesta: '1989', isCorrect: true },
            { textoRespuesta: '1995', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el género principal del juego "Dark Souls"?',
        opciones: [
            { textoRespuesta: 'RPG', isCorrect: true },
            { textoRespuesta: 'FPS', isCorrect: false },
            { textoRespuesta: 'Survival Horror', isCorrect: false },
            { textoRespuesta: 'RTS', isCorrect: false },
        ],
    },
]

export const preguntasJuegos2 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el personaje principal en el juego "The Legend of Zelda: Breath of the Wild"?',
        opciones: [
            { textoRespuesta: 'Link', isCorrect: true },
            { textoRespuesta: 'Mario', isCorrect: false },
            { textoRespuesta: 'Kratos', isCorrect: false },
            { textoRespuesta: 'Nathan Drake', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: 'En el juego "Fortnite", ¿cuál es el nombre del mapa principal?',
        opciones: [
            { textoRespuesta: 'Miramar', isCorrect: false },
            { textoRespuesta: 'Erangel', isCorrect: false },
            { textoRespuesta: 'Viktorya', isCorrect: false },
            { textoRespuesta: 'Isla del Renacimiento', isCorrect: true },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el estudio de desarrollo detrás de la serie de juegos "Fallout"?',
        opciones: [
            { textoRespuesta: 'Rockstar Games', isCorrect: false },
            { textoRespuesta: 'Ubisoft', isCorrect: false },
            { textoRespuesta: 'Bethesda Game Studios', isCorrect: true },
            { textoRespuesta: 'BioWare', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: 'En el juego "Overwatch", ¿cuál es el nombre del personaje con habilidad de teletransportación?',
        opciones: [
            { textoRespuesta: 'Soldier: 76', isCorrect: false },
            { textoRespuesta: 'Reaper', isCorrect: false },
            { textoRespuesta: 'Tracer', isCorrect: true },
            { textoRespuesta: 'Widowmaker', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el género principal del juego "The Witcher 3: Wild Hunt"?',
        opciones: [
            { textoRespuesta: 'RPG', isCorrect: true },
            { textoRespuesta: 'FPS', isCorrect: false },
            { textoRespuesta: 'Aventura gráfica', isCorrect: false },
            { textoRespuesta: 'Simulación', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: 'En el juego "Minecraft", ¿cuál es el nombre del bloque utilizado para fabricar herramientas?',
        opciones: [
            { textoRespuesta: 'Diamante', isCorrect: true },
            { textoRespuesta: 'Obsidiana', isCorrect: false },
            { textoRespuesta: 'Hierro', isCorrect: false },
            { textoRespuesta: 'Esmeralda', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se lanzó el primer juego de la serie "Final Fantasy"?',
        opciones: [
            { textoRespuesta: '1987', isCorrect: false },
            { textoRespuesta: '1990', isCorrect: false },
            { textoRespuesta: '1985', isCorrect: true },
            { textoRespuesta: '1992', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: 'En el juego "Metal Gear Solid", ¿quién es el antagonista principal?',
        opciones: [
            { textoRespuesta: 'Big Boss', isCorrect: false },
            { textoRespuesta: 'Solid Snake', isCorrect: false },
            { textoRespuesta: 'Liquid Snake', isCorrect: true },
            { textoRespuesta: 'Revolver Ocelot', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el título completo del juego abreviado como "CS:GO"?',
        opciones: [
            { textoRespuesta: 'Counter-Strike: Global Operations', isCorrect: false },
            { textoRespuesta: 'Counter-Strike: Global Offensive', isCorrect: true },
            { textoRespuesta: 'Call of Duty: Ghosts', isCorrect: false },
            { textoRespuesta: 'Crysis: Survival of the Great', isCorrect: false },
        ],
    },
]

export const preguntasJuegos3 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el personaje principal de la serie de juegos "The Legend of Zelda"?',
        opciones: [
            { textoRespuesta: 'Link', isCorrect: true },
            { textoRespuesta: 'Mario', isCorrect: false },
            { textoRespuesta: 'Master Chief', isCorrect: false },
            { textoRespuesta: 'Kratos', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: 'En el juego "Fortnite", ¿cuál es la ubicación más popular para aterrizar al comienzo de la partida?',
        opciones: [
            { textoRespuesta: 'Torres inclinadas', isCorrect: false },
            { textoRespuesta: 'Socavón soterrado', isCorrect: true },
            { textoRespuesta: 'Pico Polar', isCorrect: false },
            { textoRespuesta: 'Alameda Aullante', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué empresa desarrolló el juego "Overwatch"?',
        opciones: [
            { textoRespuesta: 'Riot Games', isCorrect: false },
            { textoRespuesta: 'Valve Corporation', isCorrect: false },
            { textoRespuesta: 'Blizzard Entertainment', isCorrect: true },
            { textoRespuesta: 'Ubisoft', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: 'En el juego "Minecraft", ¿cuál es el nombre del mundo en el que los jugadores pueden construir y explorar libremente?',
        opciones: [
            { textoRespuesta: 'End', isCorrect: false },
            { textoRespuesta: 'Nether', isCorrect: false },
            { textoRespuesta: 'Superficie', isCorrect: false },
            { textoRespuesta: 'Sobrevida', isCorrect: true },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el nombre del protagonista en la serie de juegos "Assassin\'s Creed"?',
        opciones: [
            { textoRespuesta: 'Ezio Auditore', isCorrect: false },
            { textoRespuesta: 'Altaïr Ibn-La\'Ahad', isCorrect: false },
            { textoRespuesta: 'Connor Kenway', isCorrect: false },
            { textoRespuesta: 'Desmond Miles', isCorrect: true },
        ],
    },
    {
        nivel: 'normal',
        titulo: 'En el juego "League of Legends", ¿cuál es el rol del personaje "Darius"?',
        opciones: [
            { textoRespuesta: 'Soporte', isCorrect: false },
            { textoRespuesta: 'Tanque', isCorrect: true },
            { textoRespuesta: 'Asesino', isCorrect: false },
            { textoRespuesta: 'Hechicero', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuántos colores tiene el título "Tetris" para representar sus bloques?',
        opciones: [
            { textoRespuesta: '6', isCorrect: false },
            { textoRespuesta: '7', isCorrect: true },
            { textoRespuesta: '5', isCorrect: false },
            { textoRespuesta: '8', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: 'En el juego "World of Warcraft", ¿cuál es el nombre del continente principal donde se desarrolla la mayor parte del juego?',
        opciones: [
            { textoRespuesta: 'Azeroth', isCorrect: true },
            { textoRespuesta: 'Kalimdor', isCorrect: false },
            { textoRespuesta: 'Los Reinos del Este', isCorrect: false },
            { textoRespuesta: 'Terrallende', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se lanzó el primer juego de la serie "Final Fantasy"?',
        opciones: [
            { textoRespuesta: '1987', isCorrect: false },
            { textoRespuesta: '1989', isCorrect: true },
            { textoRespuesta: '1992', isCorrect: false },
            { textoRespuesta: '1995', isCorrect: false },
        ],
    },
]



export const preguntasCiencia1 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es la unidad básica de la vida?',
        opciones: [
            { textoRespuesta: 'Célula', isCorrect: true },
            { textoRespuesta: 'Átomo', isCorrect: false },
            { textoRespuesta: 'Molécula', isCorrect: false },
            { textoRespuesta: 'Organelo', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué elemento químico tiene el símbolo "O" en la tabla periódica?',
        opciones: [
            { textoRespuesta: 'Oxígeno', isCorrect: true },
            { textoRespuesta: 'Oro', isCorrect: false },
            { textoRespuesta: 'Osmio', isCorrect: false },
            { textoRespuesta: 'Plata', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué tipo de energía se produce a partir de la fusión nuclear en el sol?',
        opciones: [
            { textoRespuesta: 'Energía solar', isCorrect: true },
            { textoRespuesta: 'Energía eólica', isCorrect: false },
            { textoRespuesta: 'Energía hidroeléctrica', isCorrect: false },
            { textoRespuesta: 'Energía geotérmica', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la fórmula química del agua?',
        opciones: [
            { textoRespuesta: 'H2O', isCorrect: true },
            { textoRespuesta: 'CO2', isCorrect: false },
            { textoRespuesta: 'O2', isCorrect: false },
            { textoRespuesta: 'NaCl', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la ley fundamental que establece que la energía no se puede crear ni destruir, solo transformar?',
        opciones: [
            { textoRespuesta: 'Ley de la conservación de la masa', isCorrect: false },
            { textoRespuesta: 'Ley de Boyle', isCorrect: false },
            { textoRespuesta: 'Ley de la conservación de la energía', isCorrect: true },
            { textoRespuesta: 'Ley de Ohm', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué científico formuló la teoría de la relatividad?',
        opciones: [
            { textoRespuesta: 'Isaac Newton', isCorrect: false },
            { textoRespuesta: 'Galileo Galilei', isCorrect: false },
            { textoRespuesta: 'Albert Einstein', isCorrect: true },
            { textoRespuesta: 'Niels Bohr', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la partícula subatómica con carga positiva?',
        opciones: [
            { textoRespuesta: 'Neutrón', isCorrect: false },
            { textoRespuesta: 'Electrón', isCorrect: false },
            { textoRespuesta: 'Protón', isCorrect: true },
            { textoRespuesta: 'Positrón', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se descubrió el electrón?',
        opciones: [
            { textoRespuesta: '1897', isCorrect: true },
            { textoRespuesta: '1905', isCorrect: false },
            { textoRespuesta: '1923', isCorrect: false },
            { textoRespuesta: '1932', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la distancia promedio entre la Tierra y el Sol?',
        opciones: [
            { textoRespuesta: '149.6 millones de kilómetros', isCorrect: true },
            { textoRespuesta: '100 millones de kilómetros', isCorrect: false },
            { textoRespuesta: '200 millones de kilómetros', isCorrect: false },
            { textoRespuesta: '50 millones de kilómetros', isCorrect: false },
        ],
    },
]

export const preguntasCiencia2 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es el componente químico más abundante en la Tierra?',
        opciones: [
            { textoRespuesta: 'Oxígeno', isCorrect: true },
            { textoRespuesta: 'Hidrógeno', isCorrect: false },
            { textoRespuesta: 'Carbono', isCorrect: false },
            { textoRespuesta: 'Nitrógeno', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Qué fenómeno natural mide la escala Richter?',
        opciones: [
            { textoRespuesta: 'Temperatura', isCorrect: false },
            { textoRespuesta: 'Intensidad del viento', isCorrect: false },
            { textoRespuesta: 'Magnitud de un terremoto', isCorrect: true },
            { textoRespuesta: 'Presión atmosférica', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es la velocidad de la luz en el vacío?',
        opciones: [
            { textoRespuesta: '300,000 km/s', isCorrect: true },
            { textoRespuesta: '150,000 km/s', isCorrect: false },
            { textoRespuesta: '500,000 km/s', isCorrect: false },
            { textoRespuesta: '200,000 km/s', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Qué científico propuso la teoría de la relatividad?',
        opciones: [
            { textoRespuesta: 'Isaac Newton', isCorrect: false },
            { textoRespuesta: 'Galileo Galilei', isCorrect: false },
            { textoRespuesta: 'Albert Einstein', isCorrect: true },
            { textoRespuesta: 'Niels Bohr', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el elemento químico con el símbolo "Fe"?',
        opciones: [
            { textoRespuesta: 'Oro', isCorrect: false },
            { textoRespuesta: 'Hierro', isCorrect: true },
            { textoRespuesta: 'Plata', isCorrect: false },
            { textoRespuesta: 'Cobre', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el proceso mediante el cual las plantas producen su propio alimento?',
        opciones: [
            { textoRespuesta: 'Respiración', isCorrect: false },
            { textoRespuesta: 'Fotosíntesis', isCorrect: true },
            { textoRespuesta: 'Digestión', isCorrect: false },
            { textoRespuesta: 'Transpiración', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la constante matemática que representa la relación entre la circunferencia de un círculo y su diámetro?',
        opciones: [
            { textoRespuesta: 'Pi (π)', isCorrect: true },
            { textoRespuesta: 'Euler (e)', isCorrect: false },
            { textoRespuesta: 'Phi (Φ)', isCorrect: false },
            { textoRespuesta: 'Gamma (γ)', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se descubrió el electrón?',
        opciones: [
            { textoRespuesta: '1897', isCorrect: true },
            { textoRespuesta: '1905', isCorrect: false },
            { textoRespuesta: '1923', isCorrect: false },
            { textoRespuesta: '1932', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la ley de la termodinámica que establece que la energía total de un sistema cerrado siempre se conserva?',
        opciones: [
            { textoRespuesta: 'Primera ley', isCorrect: true },
            { textoRespuesta: 'Segunda ley', isCorrect: false },
            { textoRespuesta: 'Tercera ley', isCorrect: false },
            { textoRespuesta: 'Cero ley', isCorrect: false },
        ],
    },
]

export const preguntasCiencia3 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es la partícula subatómica con carga negativa?',
        opciones: [
            { textoRespuesta: 'Protón', isCorrect: false },
            { textoRespuesta: 'Electrón', isCorrect: true },
            { textoRespuesta: 'Neutrón', isCorrect: false },
            { textoRespuesta: 'Positrón', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿En qué rama de la ciencia se estudia la evolución de las especies?',
        opciones: [
            { textoRespuesta: 'Física', isCorrect: false },
            { textoRespuesta: 'Biología', isCorrect: true },
            { textoRespuesta: 'Química', isCorrect: false },
            { textoRespuesta: 'Astronomía', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el componente fundamental de las moléculas de ADN?',
        opciones: [
            { textoRespuesta: 'Ácido ribonucleico (ARN)', isCorrect: false },
            { textoRespuesta: 'Fosfato', isCorrect: false },
            { textoRespuesta: 'Azúcar', isCorrect: false },
            { textoRespuesta: 'Nucleótido', isCorrect: true },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la ley de la física que describe la interacción entre cargas eléctricas?',
        opciones: [
            { textoRespuesta: 'Ley de Newton', isCorrect: false },
            { textoRespuesta: 'Ley de Boyle', isCorrect: false },
            { textoRespuesta: 'Ley de Coulomb', isCorrect: true },
            { textoRespuesta: 'Principio de Arquímedes', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el proceso mediante el cual las plantas producen su propio alimento?',
        opciones: [
            { textoRespuesta: 'Fotosíntesis', isCorrect: true },
            { textoRespuesta: 'Respiración celular', isCorrect: false },
            { textoRespuesta: 'Digestión', isCorrect: false },
            { textoRespuesta: 'Transpiración', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la unidad básica de la herencia genética?',
        opciones: [
            { textoRespuesta: 'Genoma', isCorrect: false },
            { textoRespuesta: 'Gen', isCorrect: true },
            { textoRespuesta: 'Alelo', isCorrect: false },
            { textoRespuesta: 'Cromosoma', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué ley de la termodinámica establece que la energía total de un sistema cerrado siempre se conserva?',
        opciones: [
            { textoRespuesta: 'Primera ley de la termodinámica', isCorrect: true },
            { textoRespuesta: 'Segunda ley de la termodinámica', isCorrect: false },
            { textoRespuesta: 'Tercera ley de la termodinámica', isCorrect: false },
            { textoRespuesta: 'Ley de Boyle', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el nombre del bosón responsable de conferir masa a otras partículas subatómicas?',
        opciones: [
            { textoRespuesta: 'Bosón de Higgs', isCorrect: true },
            { textoRespuesta: 'Bosón W', isCorrect: false },
            { textoRespuesta: 'Bosón Z', isCorrect: false },
            { textoRespuesta: 'Bosón fotón', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el proceso mediante el cual se forma el arco iris?',
        opciones: [
            { textoRespuesta: 'Reflexión', isCorrect: false },
            { textoRespuesta: 'Refracción', isCorrect: false },
            { textoRespuesta: 'Difracción', isCorrect: false },
            { textoRespuesta: 'Dispersión', isCorrect: true },
        ],
    },
]




export const preguntasCultura1 = [
    {
        nivel: 'facil',
        titulo: '¿Quién pintó la Mona Lisa?',
        opciones: [
            { textoRespuesta: 'Leonardo da Vinci', isCorrect: true },
            { textoRespuesta: 'Pablo Picasso', isCorrect: false },
            { textoRespuesta: 'Vincent van Gogh', isCorrect: false },
            { textoRespuesta: 'Claude Monet', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿En qué país se originó el sushi?',
        opciones: [
            { textoRespuesta: 'China', isCorrect: false },
            { textoRespuesta: 'Japón', isCorrect: true },
            { textoRespuesta: 'Tailandia', isCorrect: false },
            { textoRespuesta: 'Corea del Sur', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es el río más largo del mundo?',
        opciones: [
            { textoRespuesta: 'Amazonas', isCorrect: true },
            { textoRespuesta: 'Nilo', isCorrect: false },
            { textoRespuesta: 'Yangtsé', isCorrect: false },
            { textoRespuesta: 'Misisipi', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Quién escribió "Cien años de soledad"?',
        opciones: [
            { textoRespuesta: 'Gabriel García Márquez', isCorrect: true },
            { textoRespuesta: 'Isabel Allende', isCorrect: false },
            { textoRespuesta: 'Mario Vargas Llosa', isCorrect: false },
            { textoRespuesta: 'Pablo Neruda', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?',
        opciones: [
            { textoRespuesta: '1945', isCorrect: true },
            { textoRespuesta: '1955', isCorrect: false },
            { textoRespuesta: '1965', isCorrect: false },
            { textoRespuesta: '1975', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la capital de Australia?',
        opciones: [
            { textoRespuesta: 'Sídney', isCorrect: false },
            { textoRespuesta: 'Melbourne', isCorrect: false },
            { textoRespuesta: 'Canberra', isCorrect: true },
            { textoRespuesta: 'Brisbane', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es el filósofo antiguo conocido como "el padre de la filosofía occidental"?',
        opciones: [
            { textoRespuesta: 'Sócrates', isCorrect: true },
            { textoRespuesta: 'Platón', isCorrect: false },
            { textoRespuesta: 'Aristóteles', isCorrect: false },
            { textoRespuesta: 'Heráclito', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué instrumento musical tocaba el famoso compositor Wolfgang Amadeus Mozart?',
        opciones: [
            { textoRespuesta: 'Violín', isCorrect: false },
            { textoRespuesta: 'Piano', isCorrect: true },
            { textoRespuesta: 'Flauta', isCorrect: false },
            { textoRespuesta: 'Cello', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se inauguró la Torre Eiffel en París?',
        opciones: [
            { textoRespuesta: '1889', isCorrect: true },
            { textoRespuesta: '1901', isCorrect: false },
            { textoRespuesta: '1920', isCorrect: false },
            { textoRespuesta: '1955', isCorrect: false },
        ],
    },
]

export const preguntasCultura2 = [
    {
        nivel: 'facil',
        titulo: '¿Cuál es la obra literaria más vendida de todos los tiempos?',
        opciones: [
            { textoRespuesta: 'Don Quijote de la Mancha', isCorrect: false },
            { textoRespuesta: 'La Biblia', isCorrect: true },
            { textoRespuesta: 'Harry Potter y la piedra filosofal', isCorrect: false },
            { textoRespuesta: 'Cien años de soledad', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es la capital de Japón?',
        opciones: [
            { textoRespuesta: 'Seúl', isCorrect: false },
            { textoRespuesta: 'Pekín', isCorrect: false },
            { textoRespuesta: 'Bangkok', isCorrect: false },
            { textoRespuesta: 'Tokio', isCorrect: true },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Quién pintó La última cena?',
        opciones: [
            { textoRespuesta: 'Vincent van Gogh', isCorrect: false },
            { textoRespuesta: 'Pablo Picasso', isCorrect: false },
            { textoRespuesta: 'Leonardo da Vinci', isCorrect: true },
            { textoRespuesta: 'Claude Monet', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el río más largo del mundo?',
        opciones: [
            { textoRespuesta: 'Nilo', isCorrect: true },
            { textoRespuesta: 'Amazonas', isCorrect: false },
            { textoRespuesta: 'Yangtsé', isCorrect: false },
            { textoRespuesta: 'Misisipi', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué año se inauguró la Torre Eiffel?',
        opciones: [
            { textoRespuesta: '1889', isCorrect: true },
            { textoRespuesta: '1901', isCorrect: false },
            { textoRespuesta: '1925', isCorrect: false },
            { textoRespuesta: '1845', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es el monte más alto del mundo?',
        opciones: [
            { textoRespuesta: 'Monte Everest', isCorrect: true },
            { textoRespuesta: 'Monte Kilimanjaro', isCorrect: false },
            { textoRespuesta: 'Monte McKinley', isCorrect: false },
            { textoRespuesta: 'Monte Fuji', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la capital de Australia?',
        opciones: [
            { textoRespuesta: 'Sídney', isCorrect: false },
            { textoRespuesta: 'Melbourne', isCorrect: false },
            { textoRespuesta: 'Brisbane', isCorrect: false },
            { textoRespuesta: 'Camberra', isCorrect: true },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?',
        opciones: [
            { textoRespuesta: '1945', isCorrect: true },
            { textoRespuesta: '1919', isCorrect: false },
            { textoRespuesta: '1955', isCorrect: false },
            { textoRespuesta: '1967', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Quién escribió la tragedia griega "Edipo Rey"?',
        opciones: [
            { textoRespuesta: 'Eurípides', isCorrect: false },
            { textoRespuesta: 'Sófocles', isCorrect: true },
            { textoRespuesta: 'Esquilo', isCorrect: false },
            { textoRespuesta: 'Aristófanes', isCorrect: false },
        ],
    },
]

export const preguntasCultura3 = [
    {
        nivel: 'facil',
        titulo: '¿Quién es el autor de la Mona Lisa?',
        opciones: [
            { textoRespuesta: 'Leonardo da Vinci', isCorrect: true },
            { textoRespuesta: 'Pablo Picasso', isCorrect: false },
            { textoRespuesta: 'Vincent van Gogh', isCorrect: false },
            { textoRespuesta: 'Claude Monet', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Cuál es la capital de Japón?',
        opciones: [
            { textoRespuesta: 'Pekín', isCorrect: false },
            { textoRespuesta: 'Seúl', isCorrect: false },
            { textoRespuesta: 'Tokio', isCorrect: true },
            { textoRespuesta: 'Bangkok', isCorrect: false },
        ],
    },
    {
        nivel: 'facil',
        titulo: '¿Quién escribió "Cien años de soledad"?',
        opciones: [
            { textoRespuesta: 'Julio Cortázar', isCorrect: false },
            { textoRespuesta: 'Isabel Allende', isCorrect: false },
            { textoRespuesta: 'Gabriel García Márquez', isCorrect: true },
            { textoRespuesta: 'Mario Vargas Llosa', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?',
        opciones: [
            { textoRespuesta: '1945', isCorrect: true },
            { textoRespuesta: '1955', isCorrect: false },
            { textoRespuesta: '1965', isCorrect: false },
            { textoRespuesta: '1975', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿Cuál es la montaña más alta del mundo?',
        opciones: [
            { textoRespuesta: 'Monte Everest', isCorrect: true },
            { textoRespuesta: 'Monte Kilimanjaro', isCorrect: false },
            { textoRespuesta: 'Monte McKinley', isCorrect: false },
            { textoRespuesta: 'Monte Fuji', isCorrect: false },
        ],
    },
    {
        nivel: 'normal',
        titulo: '¿En qué continente se encuentra la Gran Muralla China?',
        opciones: [
            { textoRespuesta: 'Asia', isCorrect: true },
            { textoRespuesta: 'Europa', isCorrect: false },
            { textoRespuesta: 'África', isCorrect: false },
            { textoRespuesta: 'América', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Cuál es la capital de Australia?',
        opciones: [
            { textoRespuesta: 'Sídney', isCorrect: false },
            { textoRespuesta: 'Melbourne', isCorrect: false },
            { textoRespuesta: 'Canberra', isCorrect: true },
            { textoRespuesta: 'Brisbane', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿Qué filósofo griego fue discípulo de Sócrates y maestro de Aristóteles?',
        opciones: [
            { textoRespuesta: 'Platón', isCorrect: true },
            { textoRespuesta: 'Epicuro', isCorrect: false },
            { textoRespuesta: 'Heráclito', isCorrect: false },
            { textoRespuesta: 'Zenón', isCorrect: false },
        ],
    },
    {
        nivel: 'dificil',
        titulo: '¿En qué año se proclamó la Declaración de los Derechos Humanos?',
        opciones: [
            { textoRespuesta: '1948', isCorrect: true },
            { textoRespuesta: '1958', isCorrect: false },
            { textoRespuesta: '1968', isCorrect: false },
            { textoRespuesta: '1978', isCorrect: false },
        ],
    },
]
