import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
       shallow(<TopNav />);
    }); {/*Renders without crashing*/}

    it('Should be able to click "WHAT?" button', () => {
    const wrapper = shallow(<TopNav />);
    wrapper.find('.what').simulate('click')
	}); {/* Should be able to click "WHAT?" button */}

{/*
	it('Should be able to click "NEW GAME" button', () => {
    const wrapper = shallow(<TopNav />);
    wrapper.find('.new').simulate('click')
	}); 
*/}
}); //describe('<Game/>')