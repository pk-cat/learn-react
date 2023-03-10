import React from "react";
const image = require("../public/logo192.png")
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  // handle user input value
  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  // when user click submit button, add input value to state
  handleClick() {
    const list = [...this.state.list, this.state.inputValue];
    this.setState({ list, inputValue: "" });
  }

  // click item, remove it from list
  handleRemoveItem(sub) {
    const list = this.state.list.slice();
    list.splice(sub, 1);
    this.setState({ list });
  }

  render() {
    return (
      <>
        <input
          defaultValue={this.state.inputValue}
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
        <button onClick={this.handleClick}>submit</button>
        <ul>
          {this.state.list.map((e, i) => {
            return (
              // click item, remove it from list
              <li key={`${e}-${i}`} onClick={() => this.handleRemoveItem(i)}>
                {e}
              </li>
            );
          })}
        </ul>
        <img src={image} alt=""/>
      </>
    );
  }
}

export default TodoList;
