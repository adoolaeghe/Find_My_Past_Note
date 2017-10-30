import React from 'react';
import NoteForm from '../components/NoteForm/NoteForm'
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import spy from 'sinon'

configure({ adapter: new Adapter() });

const minProps = {
  noteContent: 'a new note',
  noteId: 'he',
  noteTitle: {},
  addForm: () => {}
}

describe('<NoteForm />', () => {
  it('renders 1 <NoteForm /> component', () => {
    const component = shallow(<NoteForm />);
    expect(component).toHaveLength(1);
  })

  it('had a note content originally empty', () => {
    const component = shallow(<NoteForm />);
    expect(component.find('noteInput').value).toEqual(undefined)
  })

  it('had a note title originally empty', () => {
    const component = shallow(<NoteForm />);
    expect(component.find('noteTitle').value).toEqual(undefined)
  })
})
