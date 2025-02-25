import connectDB from './databases/index.js'
import { app } from './app.js'
import { PORT } from './constants.js'

const lol = connectDB()
  .then(() => {
    app.on('error', error => {
      console.log('App Error:\n\n', error)
      throw error
    })
    app.listen(PORT || 8000, () => {
      console.log(`Server is running at: http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    console.log('MongoDB Connection Failed:\n', err)
  })
