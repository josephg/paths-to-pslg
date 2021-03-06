
module.exports = pathsToPSLG

function pathsToPSLG(paths) {
  const points = [], edges = []

  for (let i = 0; i < paths.length; i++) {
    const line = paths[i]
    if (line.length < 2) continue
    
    let prevPoint = points.push(line[0]) - 1
    for (let k = 1; k < line.length; k++) {
      const p0 = line[k-1]
      const p1 = line[k]
      const nextPoint = points.push(p1) - 1
      edges.push([prevPoint, nextPoint])
      prevPoint = nextPoint
    }
  }

  return {points, edges}
}

