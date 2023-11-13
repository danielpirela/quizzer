import { preguntasCiencia1, preguntasCiencia2, preguntasCiencia3, preguntasCultura1,preguntasCultura2,preguntasCultura3,preguntasJuegos1,preguntasJuegos2, preguntasJuegos3,preguntasMusica1,preguntasMusica2,preguntasMusica3,preguntasPeliculas1,preguntasPeliculas2,preguntasPeliculas3,preguntasProgramacion1,preguntasProgramacion2,preguntasProgramacion3 } from './mook'


export const classify = (category) => {

    if (category === 'Programacion') {
        let index = generateNum(1,3)
        if (index === 1) return preguntasProgramacion1
        if (index === 2) return preguntasProgramacion2
        if (index === 3) return preguntasProgramacion3
    }
    if (category === 'Cultura') {
        let index = generateNum(1,3)
        if (index === 1) return preguntasCultura1
        if (index === 2) return preguntasCultura2
        if (index === 3) return preguntasCultura3
    }

    if (category === 'Video Juegos') {
        let index = generateNum(1,3)
        if (index === 1) return preguntasJuegos1
        if (index === 2) return preguntasJuegos2
        if (index === 3) return preguntasJuegos3
    }
    if (category === 'Peliculas') {
        let index = generateNum(1,3)
        if (index === 1) return preguntasPeliculas1
        if (index === 2) return preguntasPeliculas2
        if (index === 3) return preguntasPeliculas3
    }

    if (category === 'Musica') {
        let index = generateNum(1,3)
        if (index === 1) return preguntasMusica1
        if (index === 2) return preguntasMusica2
        if (index === 3) return preguntasMusica3
    }

    if (category === 'Ciencia') {
        let index = generateNum(1,3)
        console.log(index)
        if (index === 1) return preguntasCiencia1
        if (index === 2) return preguntasCiencia2
        if (index === 3) return preguntasCiencia3
    }
}


function generateNum(offset, limit) {
    if (offset >= limit) {
        throw new Error('El offset debe ser menor que el límite.')
    }

    const rango = limit - offset + 1
    const numeroAleatorio = Math.floor(Math.random() * rango) + offset
    return numeroAleatorio
}
