import React from 'react'
import {hydrate, render } from 'react-dom'
import HelloWorld from './HelloWorld'
import App from './App'


render(<App/>, document.getElementById('root'))
// hydrate(<App/>, document.getElementById('root'))
// render(<HelloWorld/>, document.getElementById('root'))
