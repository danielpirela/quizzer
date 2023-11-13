import { NextResponse} from 'next/server'
import OpenAI from 'openai'
import { classify } from '../../../utils/classify'

// Guarda la key de la api
const API_KEY = process.env.API_KEY

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


export const promptFinal = promptCustom(classify)
// Creamos la sesion con la api key
export const openai = new OpenAI({
    apiKey: API_KEY,
    promt: promptFinal
})
// Hace una peticion a la api de openai con el metodo post
export async function POST(req) {
    try {
        const {category} = await req.json()
        const classi = classify(category)
        return NextResponse.json(classi)
    } catch (error) {
        console.error('Error al generar preguntas:', error)
        NextResponse.error(error, {
            status: 500
        })
    }
}
