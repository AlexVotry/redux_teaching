import React from 'react';
import Child2 from './Child2';

const Child1 = (props) => {
  const hue = props.color === '#ECD078' ? 'yellow' : props.color;
  return (
    <div className="child1" style={{ backgroundColor: props.color }}>
      <div className="title">
        <h3>Child</h3>
        <h3>{hue.charAt(0).toUpperCase() + hue.slice(1)}</h3>
      </div>
      <div className="content">
        <div className="stateNotice">
          <p>The color state doesn't change when we close the component.</p>
          <p>I can pass state (or any information) down to a nested component. </p>
          <p>The color state button above will change both component's color. </p>
          <p>We do this by passing the state as a prop from parent to child</p>
          <h3><p><code>{'<Child color={this.state.color} />;'}</code></p></h3>
          <p>The child component uses it as a prop:</p>
          <h3><pre><code>{'style={{ backgroundColor: props.color }}'}</code></pre></h3>
        </div>
        <div className="children">
          <Child2 />
        </div>
      </div>
    </div>
  );
}

export default Child1;
