import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {

    super(props)

    this.state = {
        firstWord: '',
        secondWord: '',
        isAnagram: false


    }
}

handleChanges(newWord1, newWord2) {
    this.setState({
      firstWord: newWord1,
      secondWord: newWord2,
    })
}

handleClick() {
    this.setState({
        ...this.state,
        isAnagram: (this.testAnagram(this.state.firstWord,this.state.secondWord)),
    })
}

testAnagram (s1, s2){

  if(!s1 || !s2 || s1.length !== s2.length){return false;}
 
  var lS1 = s1.toLowerCase();
  var lS2 = s2.toLowerCase();
 
  if(lS1 === lS2) {return false;}
 
  var rS1 = lS1.split('').sort().join('');
  var rS2 = lS2.split('').sort().join('');
 
  return (rS1 === rS2);
 }

render() {
    let isAnagram = this.state.isAnagram
    return (
        <div>
                    <p>Anagram: {isAnagram.toString()}</p>
                <p>
                <input type="text" value={this.state.firstWord} onChange={(e) => this.handleChanges(e.target.value, this.state.secondWord)}></input>
                </p>
                <p>
                <input type="text" value={this.state.secondWord} onChange={(e) => this.handleChanges(this.state.firstWord, e.target.value)}></input>
                </p>
                <p>
                <button onClick={(e) => this.handleClick()}>submit</button>
                </p>
        </div>
    );
}
}


export default App;
