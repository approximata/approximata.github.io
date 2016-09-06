'use strict';

let Game = React.createClass({

  getInitialState() {
    return {
      tiles: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      turn: 'o',
      winner: 'n', // n if there is no winner
      mode: 'single',
    };
  },

  componentWillMount() {
    if (typeof localStorage.state !== 'undefined' && JSON.parse(localStorage.state).tiles.join('').length > 0) {
      this.setState(JSON.parse(localStorage.state))
    } return;
  },

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state);
  },

  checkBoard() {
    const t = this.state.tiles;
    const check = function(a, b, c) {
      return (a + b + c) === 'xxx' || (a + b + c) === 'ooo';
    };
    if (check(t[0], t[1], t[2])) return t[0];
    if (check(t[3], t[4], t[5])) return t[3];
    if (check(t[6], t[7], t[8])) return t[6];

    if (check(t[0], t[3], t[6])) return t[0];
    if (check(t[1], t[4], t[7])) return t[1];
    if (check(t[2], t[5], t[8])) return t[2];

    if (check(t[0], t[4], t[8])) return t[0];
    if (check(t[2], t[4], t[6])) return t[2];

    if (t.join('').length === 9) return 'd';
    return 'n';
  },

  tileClick(position, player) {
    const tiles = this.state.tiles;
    if ((tiles[position]=== 'x' || tiles[position]=== 'o') || (this.state.winner !== 'n')) return;
    tiles[position] = player;
    this.setState({ tiles: tiles, turn: player === 'o' ? 'x' : 'o', winner: this.checkBoard() });
    if (this.state.mode === 'single'){
      const that = this;
      setTimeout(function(){that.tileClickByComputer(player)}, 200);
    } return;
  },

  defenderLogic() {
    const t = this.state.tiles;
    const tIndex = [];
    this.state.tiles.forEach((e, i) => {
      tIndex.push(i);
    });
    const checkCriticalValue = function(a, b, c){
      return (a + b + c) === 'oo';
    };
    if (checkCriticalValue(t[0], t[1], t[2])) return [0, 1, 2];
    if (checkCriticalValue(t[3], t[4], t[5])) return [3, 4, 5];
    if (checkCriticalValue(t[6], t[7], t[8])) return [6, 7, 8];

    if (checkCriticalValue(t[0], t[3], t[6])) return [0, 3, 6];
    if (checkCriticalValue(t[1], t[4], t[7])) return [1, 4, 7];
    if (checkCriticalValue(t[2], t[5], t[8])) return [2, 5, 8];

    if (checkCriticalValue(t[0], t[4], t[8])) return [0, 4, 8];
    if (checkCriticalValue(t[2], t[4], t[6])) return [2, 4, 6];

    return tIndex;
  },

  getMatch(a, b) {
    var matches = [];
    for ( var i = 0; i < a.length; i++ ) {
      for ( var e = 0; e < b.length; e++ ) {
        if ( a[i] === b[e] ) matches.push( a[i] );
      }
    }
    return matches;
  },

  tileClickByComputer(player) {
    const tiles = this.state.tiles;
    const defTiles = this.defenderLogic();
    let newTiles = []
    if (this.state.winner !== 'n') return;
    player = player === 'o' ? 'x' : 'o';
    let tileIndex = [];
    tiles.forEach(function(e, i){
      if(e ===''){
        tileIndex.push(i);
      }
    })
    newTiles = this.getMatch(tileIndex, defTiles);
    let newValue = newTiles[Math.floor(newTiles.length * Math.random())];
    tiles[newValue] = player;
    this.setState({ tiles: tiles, turn: player === 'o' ? 'x' : 'o', winner: this.checkBoard() });
  },

  resetGame() {
    this.setState(this.getInitialState());
    localStorage.state = JSON.stringify(this.getInitialState());
  },

  changeMode() {
    this.setState({ mode: this.state.mode === 'single' ? 'multi' : 'single' });
  },

  render() {
    return (
      <div>
        <div id="game">
          {this.state.tiles.map(function(tile, pos){
            return (
              <Tile status={tile} key={pos} id={pos} turn={this.state.turn} tileClick={this.tileClick}/>
            );
          }, this)}
        </div>
        <Menu turn={this.state.turn} winner={this.state.winner} resetAction={this.resetGame} changeMode={this.changeMode} mode={this.state.mode}/>
      </div>
    );
  }
});

let Tile = React.createClass({
  clickHandler() {
    this.props.tileClick(this.props.id, this.props.turn);
  },
  render() {
    return <div className={this.props.status === '' ? 'tile' : 'tile status-' + this.props.status} onClick={this.clickHandler}>{this.props.status}</div>;
  }
});

let Menu = React.createClass({
  render() {
    return <div id='menu'>
      <h3 className={this.props.winner === 'n' ? 'visible' : 'hidden'}>player {this.props.turn}  turn</h3>
      <h3 className={(this.props.winner === 'n') || (this.props.winner === 'd') ? 'hidden' : 'visible'}>player {this.props.winner} won!</h3>
      <h3 className={this.props.winner === 'd' ? 'visible' : 'hidden'}>draw game :(</h3>
      <button className="btn btn-default" onClick={this.props.resetAction}>reset game</button>
      <button className="btn btn-default" onClick={this.props.changeMode}>mode: {this.props.mode}</button>
    </div>;
  }
});

ReactDOM.render(
  <Game />,
  document.querySelector('.main')
);
