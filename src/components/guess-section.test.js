import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessSection />);
    });

    it('Renders Feedback', () => {
    	const wrapper = mount(<GuessSection feedback="ok" guessCount={3}/>);
    	expect (wrapper.find('Feedback').length).toEqual(1);
    	console.log(wrapper.props());
    	expect (wrapper.props().feedback).toEqual("ok");
    	expect (wrapper.props().guessCount).toEqual(3);
    });

    it('Renders GuessForm', () => {
    	const wrapper = shallow(<GuessSection />);
    	expect (wrapper.find('GuessForm').length).toEqual(1);
    });

}); //describe('<Game/>')