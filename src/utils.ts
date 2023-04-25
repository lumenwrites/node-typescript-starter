import fs from 'fs-extra'

export function readText(path) {
  const str = fs.readFileSync(path, 'utf8')
  return str
}
