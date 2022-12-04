import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    // increment count
    incrementCount(){
        this.setState({
            count: this.state.count+1
        } ,

        // callback
        ()=>  {console.log('Callback values; ',this.state.count)})

    }

    // decrement count
    decrement(){
        this.setState({
            count: this.state.count-1
        } ,
        
        // callback
        ()=>{console.log(this.state.count)})
    }

  render() {
    return (
      <div>
          <h1>Count - {this.state.count}</h1>
          {/* increment count */}

          <button  onClick={() => this.incrementCount() } >INCREMENT</button>
          <button onClick={() => this.decrement() }>DECREMENT</button>
    </div>
    )
  }
}

export default Counter