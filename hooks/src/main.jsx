import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './views/App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

// PARA UMA VERSAO MAIS NOVA DO REACT-DOM 
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
  