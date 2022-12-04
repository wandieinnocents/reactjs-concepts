import React,{Component} from 'react'

// class
class Message extends Component{

    // create state object
    constructor(){
        super()
        this.state = {
            message:'welcome visitor'
        }
    }

    // change message 
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }



    // render
    render(){
    // return
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button  onClick={() => this.changeMessage() } >SUBSCRIBE</button>
            </div>
        )
    }
}

export default Message;