import React from 'react';
import Modal from '../components/Modal/Modal'
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import spy from 'sinon'

configure({ adapter: new Adapter() });

const minProps = {
  noteContent: 'a new note',
  noteId: 'a new noteId',
  closeModalClick: () => {}
}

describe('<Modal />', () => {
  it('renders 1 <Modal /> component with appropriate elements', () => {
    const component = shallow(<Modal {...minProps}/>);
    expect(component).toHaveLength(1);
    expect(component.find('span.close').length).toEqual(1);
    expect(component.find('div.modalTitle').length).toEqual(1);
    expect(component.find('p.modalContent').length).toEqual(1);
  })
  
  it('renders element according to props correctly', () => {
    const component = shallow(<Modal  {...minProps}/>);
    expect(component.instance().props.noteContent).toBe('a new note');
    expect(component.instance().props.noteId).toBe('a new noteId');
  })
})
