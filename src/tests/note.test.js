import React from 'react';
import Note from '../components/Note/Note';
import sinon from 'sinon'
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<Note />', () => {

  const minProps = {
    noteContent: 'a new note',
    noteId: 'he',
    noteTitle: {},
    onClick: () => {},
  }

  it('renders 1 <Note /> component', () => {
    const component = shallow(<Note {...minProps}/>);
    expect(component).toHaveLength(1);
    expect(component.find('p.noteContent').length).toEqual(1);
    expect(component.find('div.note').length).toEqual(1);
    expect(component.find('button.btnModal').length).toEqual(1);
  })

  it('renders props correctly', () => {
    const component = shallow(<Note  {...minProps}/>);
    expect(component.instance().props.noteContent).toBe('a new note');
  })

})
