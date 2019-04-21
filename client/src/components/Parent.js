import React from 'react';
import Child1 from  './Child1';

class Parent extends React.Component {
  state = { show: false, showComponent: false, color: "#ECD078" };

  onClick = () => {
    this.setState(prevState => ({
      show: !prevState.show,
      showComponent: false
    }));
  }

  getNext = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent,
      show: false
    }));
  }

  changeColor = () => {
    if (this.state.color === '#ECD078') {
      this.setState({ color: 'green'});
    } else {
      this.setState({ color: '#ECD078'});
    }
  }

  renderParent() {
    if (this.state.showComponent) {
      return <Child1 color={this.state.color} />;
    }
  }

  renderContent() {
    if (this.state.show) {
      return (
        <div className="wbg">
          <pre><code>state = {'{ show: true }'};</code></pre>
          The state can be changed by an event handler (button, link, hover, submit, etc).
          by clicking the button I am toggling between two states of "show" (true and false). This state is only accessible in the Parent Component.
          <div className="imageWrapper">
            <img classname="sourceCode" src="/assets/ParentState.png" alt="state code" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="wbg">
          <pre><code>state = {'{ show: false }'};</code></pre>
        </div>
      )
    }
  }

  render() {
    const clickComponent = this.state.showComponent ? 'Hide Component' : 'Show Component';
    const clickColor = this.state.color === "#ECD078" ? 'Green State' : 'Yellow State';
    const showState = this.state.show ? 'Hide State' : 'Show State';
    return (
      <div className="parent">
        <h3 className="parentTitle">Parent</h3>
        <div className="wbg">
          The App component(purple) is the wrapper for the entire application. The Parent component is nested inside the app Component and is red.
          The Parent component has a state that can be changed with the "state" button.
        </div>
        <button onClick={this.onClick}>{showState}</button>
        <button onClick={this.getNext}>{clickComponent}</button>
        <button className="changeColorBtn" style={{ backgroundColor: this.state.color }} onClick={this.changeColor}>{clickColor}</button>
        <div>{this.renderContent()}</div>
        {this.renderParent()}
      </div>
    );
  }
}

export default Parent;
