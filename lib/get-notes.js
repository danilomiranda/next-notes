const fs = require('fs')

export default async (type = 'topstories', { page = 1, max = 30 } = {}) => {
  const notes = await fs.readFile('../data/notes.json', function read(err, data) {
    if (err) {
      throw err
    }
    return data
  })
  return notes
}
