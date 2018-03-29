import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
	it('Renders without crashing', () => {
       shallow(<StatusSection />);
    });

    it('Renders Section', () => {
    	const wrapper = shallow(<StatusSection />);
    	expect (wrapper.find('section').length).toEqual(1);
    });

    it('Renders GuessCount', () => {
    	const wrapper = shallow(<StatusSection />);
    	expect (wrapper.find('GuessCount').length).toEqual(1); 
    });

    it('Renders GuessList', () => {
    	const guesses = [3,6,9,2];
    	const wrapper = shallow(<StatusSection />);
    	expect (wrapper.find('GuessList').length).toEqual(1);
    {/*	expect (wrapper.contains(<GuessList guesses={guesses} />).toEqual(true); */}
    });

    

    it('Renders AuralStatus', () => {
    	const wrapper = shallow(<StatusSection />);
    	expect (wrapper.find('AuralStatus').length).toEqual(1);
    });
}); //describe('<Game/>')