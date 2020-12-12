import { render, screen } from '@testing-library/react';
import App from './App';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Word from './components/word';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
describe ('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<App />, div)
  })

  it('check if word is in app', () => {
    const wrapper = shallow(<App />)
    let word = 'banane'.toUpperCase().split('');
    let arrayObjectWord = word.map(letter => {return ({id: Date.now()+Math.random() * 10000, value: letter, found:false})});
    expect(wrapper).to.contain(<Word />)
  })

  it('word has 6 letters', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Word')).to.have.length(1)
  })
})