import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import React,{Component} from 'react';

class App extends Component  {
  render(){
    return (
      <div className="App">
        <Message /> 
      </div>
    );
  }
  
}

export default App;
