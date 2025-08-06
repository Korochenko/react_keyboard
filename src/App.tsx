import React from 'react';

interface AppState {
  pressedKey: string | null;
}

class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    pressedKey: null,
  };

  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     pressedKey: null,
  //   };
  // }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? 'The last pressed key is' + this.state.pressedKey
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
export default App;
