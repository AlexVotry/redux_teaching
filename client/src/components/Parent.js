import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = (props) => {
    return (
        <div className="parent">
        <h3>Parent</h3>
            <div className="content">
                <p>I can pass state (or any information) down to a nested component. </p>
                <p>The color state button above will change both component's color. </p>
                <p>We do this by passing the state as a prop </p>
                <p><code>{'<Parent color={this.state.color} />;'}</code></p>
            </div>
            <div className="colorState" style={{ backgroundColor: props.color }}>
                <div className="stateNotice">Notice this state doesn't change when we close the component.</div>
                <h3><pre><code>{'style={{ backgroundColor: props.color }}'}</code></pre>{props.color}</h3>
            </div>
        <div className="children">
            <Child1 />
            <Child2 />
        </div>
        </div>
    );
}

export default Parent;