import { NextResponse} from 'next/server'
import OpenAI from 'openai'

// Guarda la key de la api
const API_KEY = process.env.API_KEY

console.log(API_KEY)
// Hace un promt personalizada sobre la categoria seleccionada
const promptCustom = (theme) => {
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

const promptFinal = promptCustom('programacion')

// Creamos la sesion con la api key
const openai = new OpenAI({
    apiKey: API_KEY
})
// Hace una peticion a la api de openai con el metodo post
export async function POST() {
    try {
        // Hace la peticion al modelo completions text-davinci-003
        const response = await openai.completions.create({
            prompt: promptFinal,
            model: 'text-davinci-003',
            max_tokens: 700,
        })
        // Devuelve los datos generados por OpenAI

        console.log(response.choices[0].text)
        return NextResponse.json(response.choices[0].text)

    // Arroja un error sin no se pudo hacer la peticion
    } catch (error) {
        console.error('Error al generar preguntas:', error)
        NextResponse.error(error, {
            status: 500
        })
    }
}
