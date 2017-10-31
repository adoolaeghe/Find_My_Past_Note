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
  it('renders 1 <NoteForm /> component with appropriate elements', () => {
    const component = shallow(<NoteForm />);
    expect(component).toHaveLength(1);
    expect(component.find('p.titleHeader').length).toEqual(1);
    expect(component.find('input.noteTitle').length).toEqual(1);
    expect(component.find('p.contentHeader').length).toEqual(1);
    expect(component.find('input.noteInput').length).toEqual(1);
    expect(component.find('input.noteButton').length).toEqual(1);
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
