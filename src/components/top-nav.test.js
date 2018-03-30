import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
       shallow(<TopNav />);
    }); {/*Renders without crashing*/}

    it('Should be able to click "WHAT?" button', () => {
    const wrapper = shallow(<TopNav />);
    wrapper.find('.what').simulate('click');
    expect (wrapper.find('.new').length).toEqual(1);
	}); {/* Should be able to click "WHAT?" button */}

	it('Should be able to click "NEW GAME" button', () => {
    const wrapper = shallow(<TopNav onRestartGame={function(){}}/>);
    wrapper.find('.new').simulate('click');
    expect (wrapper.find('a').first().hasClass('what')).toEqual(true);
	}); {/* Should be able to click "NEW GAME" button */}

}); //describe('<Game/>')