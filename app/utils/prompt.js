export const promptCustom = (theme) => {
    return `
    Genera preguntas con formato objeto con tres niveles de dificultad sobre el tema ${theme}, de cada dificultad solo una pregunta, legible para hacerle un map en javascript.

    Ejemplo:
    [
      {
        "nivel": "facil",
        "titulo": "¿Cuál es el mejor lenguaje de programación?",
        "opciones": [
          { "textoRespuesta": "JavaScript", "isCorrect": true },
          { "textoRespuesta": "PHP", "isCorrect": false },
          { "textoRespuesta": "C++", "isCorrect": false },
          { "textoRespuesta": "Kotlin", "isCorrect": false }
        ]
      },
      {
        "nivel": "medio",
        "titulo": "¿Cuál es el mejor lenguaje de programación?",
        "opciones": [
          { "textoRespuesta": "JavaScript", "isCorrect": true },
          { "textoRespuesta": "PHP", "isCorrect": false },
          { "textoRespuesta": "C++", "isCorrect": false },
          { "textoRespuesta": "Kotlin", "isCorrect": false }
        ]
      },
      {
        "nivel": "dificil",
        "titulo": "¿Cuál es el mejor lenguaje de programación?",
        "opciones": [
          { "textoRespuesta": "JavaScript", "isCorrect": true },
          { "textoRespuesta": "PHP", "isCorrect": false },
          { "textoRespuesta": "C++", "isCorrect": false },
          { "textoRespuesta": "Kotlin", "isCorrect": false }
        ]
      }
    ]
    `
}
