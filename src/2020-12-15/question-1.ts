/**
 * A river is represented by a M * N grid. 0 is water and 1 is land. You can walk on land but not on water.
 * You can only walk horizontally or vertically.
 * Original all grids are set to '0', and you are on the left side of the river.
 * API:
 * build() will build land on a random cell.
 * Question:
 * Calculate how many times build() is called if you need to get to the right side
 */

const build = (M: number, N: number) => {
  let row = Math.floor(M * Math.random())
  let column = Math.floor(N * Math.random())
  row = row === M ? M - 1 : row
  column = column === N ? N - 1 : column
  return {
    row,
    column
  }
}

const calculate = (M: number, N: number): number => {
  let count = 0
  const grid: number[][] = []
  for (let i = 0; i < M; i++) {
    grid.push(Array(N).fill(0))
  }

  // 至少 N 次
  while (count < N) {
    const { row, column } = build(M, N)
    grid[row][column] = 1
    count++
  }

  let visitedGrid: number[][] = []
  const move = (row: number, column: number): boolean => {
    if (column < 0 || row < 0 || row > N - 1) {
      return false
    }
    if (visitedGrid[row][column] === 1) {
      return false
    }
    visitedGrid[row][column] = 1
    if (grid[row][column] === 0) {
      return false
    }
    if (column === 0) {
      return true
    }
  
    return move(row, column - 1) || move(row - 1, column) || move(row + 1, column)
  }

  const canArrived = () => {
    const lastColumn = grid.map(row => row[N - 1])
    if (lastColumn.filter(v => !!v).length) {
      visitedGrid = []
      for (let i = 0; i < M; i++) {
        visitedGrid.push(Array(N).fill(0))
      }
      return lastColumn.some((v, i) => {
        return move(i, N - 1)
      })
    }
    return false
  }

  let success = canArrived()

  while (!success) {
    const { row, column } = build(M, N)
    count++
    if (grid[row][column] === 1) {
      continue
    }
    grid[row][column] = 1
    success = canArrived()
  }
  return count
}

console.log(calculate(5, 5))
