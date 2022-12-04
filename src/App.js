import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import React,{Component} from 'react';
import Counter from './components/Counter';


class App extends Component  {

  
  render(){
    return (
      <div className="App">
        <Greet name="wandie" age="3"/> 
      </div>
    );
  }
  
}

export default App;
