import './app.css'
import App from './App.svelte'
import { createGame } from './lib/grid'

const app = new App({
  target: document.getElementById('app'),
})

console.log(createGame())

export default app
