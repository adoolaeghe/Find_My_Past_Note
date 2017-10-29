import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App name='app'/>);
    expect(component).toHaveLength(1);
  })
})
