import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AurialStatus />', () => {
	it('Renders without crashing', () => {
       shallow(<AuralStatus />);
    });

    it.only('Renders AuralStatus', () => {
    	const auralStatus = "testing";
    	const wrapper = mount(<AuralStatus auralStatus={auralStatus} />);
    	expect (wrapper.find('p').text()).toEqual(auralStatus);
    });
}); 