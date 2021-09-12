const minmax = (value, min = -Infinity, max = Infinity) =>
  Math.min(Math.max(value, min), max)

export default minmax
