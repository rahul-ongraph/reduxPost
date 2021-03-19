import React from 'react'
import Login from './container/Login'
import {Provider} from "react-redux"
import {store} from './redux/store'

function App() {
  return (
    <div >
      <Provider  store={store}>
    <Login />
    </Provider>
    </div>
  );
}

export default App ;
