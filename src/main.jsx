import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import store from './features/Store.jsx'
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
=======
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'

>>>>>>> 687c85bee7baa8dd3a478ae06c752cb83be9fee0
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
