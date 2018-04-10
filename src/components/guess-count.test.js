import React from 'react';
import {shallow, mount} from 'enzyme';


import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessCount />);
    });

	it.only('Should display guessCount', () => {
		let guessCount;
		const wrapper = mount(<GuessCount guessCount={3}/>);
		console.log(wrapper.props());
		expect(wrapper.props().guessCount).toEqual(3);
	}); 

}); //describe('<Game/>')