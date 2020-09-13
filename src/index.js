import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home  from './components/Home'
import { Provider } from 'react-redux'
import store from './stores'
import { Home } from './pages'

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