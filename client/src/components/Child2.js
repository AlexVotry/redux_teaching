import React from 'react';

class Child2 extends React.Component {
    state = { counter: 0, subZero: false };

    increment = () => {
        const counter = this.state.counter + 1;
        this.setState({ counter, subZero: false })
    }

    decrement = () => {
        let counter = this.state.counter - 1;

        if (counter < 0) {
            counter = 0;
            this.setState({ subZero: true });
        }

        this.setState({ counter })
    }

    belowZero = () => {
        if (this.state.subZero) {
            return <h2 data-test="error-display">You can't go below zero!!</h2>
        }
        return null;
    }

    render() {
        return (
            <div className="child2" data-test="component-child2">
                <h3>Child of Child</h3>
                <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
                <button data-test="increment-button" onClick={this.increment}>Increment counter</button>
                <button data-test="decrement-button" onClick={this.decrement}>Decrement counter</button>
                {this.belowZero()}
            </div>
        );
    }
}

export default Child2;