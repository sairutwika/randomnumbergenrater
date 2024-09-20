import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
    state ={count:0}
    onGenrate=()=>{
        const randomNumber = Math.ceil(Math.random()*100)
        this.setState({count:randomNumber})

    }
    
    
    render(){
        const {count} = this.state
        return(
            <div className = "bg-container">
            <h1 className= "head">Random Number</h1>
            <p className = "para">Genrate random number from 1 to 100</p>
            <button className="btn" onClick={this.onGenrate}>Genrate</button>
            <p className="number">{count}</p>
            </div>
            
        )
    }
}
export default RandomNumberGenerator
