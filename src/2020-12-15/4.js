const test = [
  [0, 1],
  [1, 3],
  [2, 2],
  [0, 0],
  [1, 2],
  [4, 3],
  [1, 4],
  [3, 1],
  [2, 2],
  [1, 3],
  [4, 0],
  [2, 1],
  [1, 4],
  [0, 0],
  [1, 0],
  [1, 1],
  [3, 4]
]

const build = (M, N, i) => {
  return {
    row: test[i][0],
    column: test[i][1]
  }
}

const calculate = (M, N) => {
  let count = 0
  const grid = []
  const canReachedGrid = []
  let visitedGrid = []
  for (let i = 0; i < M; i++) {
    grid.push(Array(N).fill(0))
    canReachedGrid.push(Array(N).fill(0))
  }
  while (count < N) {
    const { row, column } = build(M, N, count)
    grid[row][column] = 1
    count++
  }

  const move = (row, column) => {
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
    if (canReachedGrid[row][column] === 1 || column === 0) {
      return true
    }
  
    return move(row, column - 1) || move(row - 1, column) || move(row + 1, column)
  }

  const canArrived = () => {
    const lastColumnWithLand = grid.map(row => row[N - 1])
    if (lastColumnWithLand.filter(v => !!v).length) {
      visitedGrid = []
      for (let i = 0; i < M; i++) {
        visitedGrid.push(Array(N).fill(0))
      }
      return lastColumnWithLand.some((v, i) => {
        return move(i, N - 1)
      })
    }
    return false
  }

  let success = canArrived()

  while (!success) {
    const { row, column } = build(M, N, count)
    count++
    grid[row][column] = 1
    success = canArrived()
  }
  return count
}

console.log(calculate(5, 5))
