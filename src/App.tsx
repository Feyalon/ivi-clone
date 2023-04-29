import React from 'react'
import { Provider } from 'react-redux'

import './assets/css/main.css'
import './assets/css/fonts.css'
import './assets/css/nebula-gambit.css'
import './assets/css/gallery.css'
import './assets/css/ivi-carousel.css'
import './assets/css/defer_ds.css'
import './assets/css/response.css'

import MainRouter from './routes'
import { store } from './store'

const App: React.FC = () => {
  return (
      <Provider store={ store }>
        <MainRouter />
      </Provider>
  )
}

export default App