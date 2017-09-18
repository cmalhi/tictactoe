import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turn: 'Player 1',
      choice: 'x',
      coordinates: [['..','..','..',],['..','..','..',],['..','..','..',]],
    }
    this.handleChoice = this.handleChoice.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }

  checkWin() {
    console.log('checking for win')
    
  }

  handleChoice(c1, c2) {
    var arr = [...this.state.coordinates]
    arr[c1][c2] = this.state.choice;
    if (this.state.turn === 'Player 1'){
      this.setState({turn: 'Player 2', choice: 'o', coordinates: [...arr]}, ()=>{
        this.checkWin();
      });
    } else if (this.state.turn === 'Player 2') {
      this.setState({turn: 'Player 1', choice: 'x', coordinates: [...arr]}, ()=>{
        this.checkWin();
      });
    }
  }

  render() {
    return (
        <div style={{backgroundColor: '#262626'}}>
          <div style={{fontSize: 46, color: 'white', fontFamily: 'Tw Cen MT'}}>
            It is {this.state.turn}'s turn.
          </div>
          <div className="Board" style={{color: 'white', fontFamily: 'Tw Cen MT'}}>
            <div style={{display: 'flex', flexDirection: 'row', fontSize: 40}}>
              <div onClick={this.handleChoice.bind(this, 0, 0)}>{this.state.coordinates[0][0]}</div> <div>|</div>
              <div onClick={this.handleChoice.bind(this, 0, 1)}>{this.state.coordinates[0][1]}</div> <div>|</div>
              <div onClick={this.handleChoice.bind(this, 0, 2)}>{this.state.coordinates[0][2]}</div>
            </div>
            <div>___________</div>
            <div style={{display: 'flex', flexDirection: 'row', fontSize: 40}}>
              <div onClick={this.handleChoice.bind(this, 1, 0)}>{this.state.coordinates[1][0]}</div> <div>|</div>
              <div onClick={this.handleChoice.bind(this, 1, 1)}>{this.state.coordinates[1][1]}</div> <div>|</div>
              <div onClick={this.handleChoice.bind(this, 1, 2)}>{this.state.coordinates[1][2]}</div>
            </div>
            <div>___________</div>
            <div style={{display: 'flex', flexDirection: 'row', fontSize: 40}}>
              <div onClick={this.handleChoice.bind(this, 2, 0)}>{this.state.coordinates[2][0]}</div> <div>|</div>
              <div onClick={this.handleChoice.bind(this, 2, 1)}>{this.state.coordinates[2][1]}</div> <div>|</div>
              <div onClick={this.handleChoice.bind(this, 2, 2)}>{this.state.coordinates[2][2]}</div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;