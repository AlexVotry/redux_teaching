import React from 'react';
import Parent from './Parent';

class Landing extends React.Component {
    state = { show: false, next: false, color: "blue" };
    
    onClick = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    getNext = () => {
        this.setState(prevState => ({
            next: !prevState.next
        }));
    }

    changeColor = () => {
        if (this.state.color === 'blue') {
            this.setState({ color: 'green'});
        } else {
            this.setState({ color: 'blue'});
        }
    }

    renderParent() {
        if(this.state.next) {
            return <Parent color={this.state.color} />;
        }
    }

    renderContent() {
        if (this.state.show) {
            return <div>The state can be changed by an event handler (button, link, hover, submit, etc).
                <pre><code>state =  {'{ show: true }'};</code></pre>
                by clicking the button I am toggling between two states of "show" (true and false). This state is only accessible in the Landing Component.
                </div>;
        } else {
            return <pre><code>state = {'{ show: false }'};</code></pre>
        }
    }

    render() {
        const clickComponent = this.state.next ? 'Hide Component' : 'Show Component';
        const clickColor = this.state.color === "blue" ? 'Blue State' : 'Green State';
        return (
            <div className="landing">
                <p>
                The App component(purple) is the wrapper for the entire application. The Landing component is nested inside the app Component and is red.
                The Landing component has a state that can be changed with the "state" button.</p>
                <button onClick={this.onClick}>Show State</button>
                <button onClick={this.getNext}>{clickComponent}</button>
                <button className="changeColorBtn" style={{ backgroundColor: this.state.color }} onClick={this.changeColor}>{clickColor}</button>
                <div>{this.renderContent()}</div>
                {this.renderParent()}
            </div>
        );
    }
}

export default Landing;