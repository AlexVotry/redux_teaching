import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import App from '../components/App';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
});
