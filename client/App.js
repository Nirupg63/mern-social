import {MuiThemeProvier, createMuiTheme} from '@material-ui/core/styles'
import {indigo, pink} from '@material-ui/core/colors'
import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader'

const App = () => (
    <BrowserRouter>
    <MuiThemeProvier theme={theme}>
        <MainRouter></MainRouter>
    </MuiThemeProvier>
    </BrowserRouter>
)

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '',
            main: '',
            dark: '',
            contrastText: '',
        },
        secondary: {
            light: '',
            main: '',
            dark: '',
            contrastText: '',
        },
        openTitle: indigo['400'],
        protectedTitle: pink['400'],
        type: 'dark'
    }
})

export default hot(module)(App)