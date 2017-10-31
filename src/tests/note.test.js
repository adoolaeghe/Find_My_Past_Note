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
    noteId: "1",
    noteTitle: 'a new note title',
    date: 'a new note date',
    onClick: () => {},
  }

  it('renders 1 <Note /> component with appropriate element', () => {
    const component = shallow(<Note {...minProps}/>);
    expect(component).toHaveLength(1);
    expect(component.find('p.noteContent').length).toEqual(1);
    expect(component.find('div.noteTime').length).toEqual(1);
    expect(component.find('button.btnModal').length).toEqual(1);
  })

  it('receive the props', () => {
    const component = shallow(
      <Note  {...minProps}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('renders element according to props correctly', () => {
    const component = shallow(<Note  {...minProps}/>);
    expect(component.instance().props.noteContent).toBe('a new note');
    expect(component.instance().props.noteTitle).toBe('a new note title');
    expect(component.instance().props.date).toBe('a new note date');
  })
})
