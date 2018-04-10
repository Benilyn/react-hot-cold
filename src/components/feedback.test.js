import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
       shallow(<Feedback />);
    });

    it.only('Display .visuallyhidden if key is not 0', () => {
       const wrapper = mount(<Feedback guessCount={1} feedback='ok'/>);
       expect (wrapper.find('.visuallyhidden').length).toEqual(1);
       expect (wrapper.props().feedback).toEqual('ok');
    });

    it.only('Not display .visuallyhidden if key is 0', () => {
       const wrapper = mount(<Feedback guessCount={0} feedback='ok'/>);
       expect (wrapper.find('.visuallyhidden').length).toEqual(0);
       expect (wrapper.props().feedback).toEqual('ok');
    });
}); //describe('<Game/>')