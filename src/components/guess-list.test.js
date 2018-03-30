import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessList />);
    });

    it('Renders GuessList', () => {
    	const guesses = [3];
    	const items = guesses.map((guess, index) => (
		    <li key={index}>
		      {guess}
		    </li>
		    ));
    	const wrapper = shallow(<GuessList />);
    	expect (wrapper.contains(<ul id='guessList'> {items} </ul>)).not.toEqual(0);
    });
}); //describe('<Game/>')