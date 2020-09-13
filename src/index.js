
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './pages'
import { Provider } from 'react-redux'
import store from './stores'

class App extends Component {
    render(){
        return (
            <Provider store={store.configure(null)}>
                <Home />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
