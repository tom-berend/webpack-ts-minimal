import './index.css'
const greeting: string = 'Hello world'

console.log('starting....')

const el = document.createElement('div')
el.innerText = greeting
document.body.appendChild(el)
