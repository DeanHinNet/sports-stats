import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            links: []
        }
    }

    render() {
        return (
            <div>Welcome</div>
        )
    }
}

ReactDOM.render(<App/>, 

    document.getElementById('app'))
