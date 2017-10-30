import React from 'react';
import App from '../App';
import Note from '../components/Note/Note';
import NoteForm from '../components/NoteForm/NoteForm'
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App/>);
    expect(component).toHaveLength(1);
  })
})

describe('<Note />', () => {
  it('renders 1 <Note /> component', () => {
    const component = shallow(<Note />);
    expect(component).toHaveLength(1);
    expect(component.find('p.noteContent').length).toEqual(1);
    expect(component.find('div.note').length).toEqual(1);
  })

  it('renders props correctly', () => {
    const component = shallow(<Note  noteContent = {'a new note'}/>);
    expect(component.instance().props.noteContent).toBe('a new note');
  })
})

describe('<NoteForm />', () => {
  it('renders 1 <NoteForm /> component', () => {
    const component = shallow(<NoteForm />);
    expect(component).toHaveLength(1);
  })
})
