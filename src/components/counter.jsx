import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: []
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        {/* <h4>Counter #{this.props.counter.id}</h4> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncreament()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.renderTags()}; */}
      </div>
    );
  }

  handleIncreament = () => {
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length == 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
