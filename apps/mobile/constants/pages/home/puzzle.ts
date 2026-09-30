function mezclar(array: number[]) {
  const resultado = [...array]
  for (let i = resultado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[resultado[i], resultado[j]] = [resultado[j], resultado[i]]
  }

  return resultado
}

export function generarPosicionesIniciales(
  total: number,
  columns: number,
  pieceWidth: number,
  pieceHeight: number,
  trayGap: number
) {
  const posiciones = []
  const mezcladas = mezclar(Array.from({ length: total }, (_, index) => index))
  for (let index = 0; index < total; index++) {
    const posicion = mezcladas[index]
    const column = posicion % columns
    const row = Math.floor(posicion / columns)
    posiciones.push({
      x: column * pieceWidth,
      y: trayGap + row * pieceHeight
    })
  }

  return posiciones
}

export const PUZZLES = {
  'puzzle-1': {
    rows: 5,
    columns: 3,
    image: require('../../../assets/images/icon.png')
  }
}
