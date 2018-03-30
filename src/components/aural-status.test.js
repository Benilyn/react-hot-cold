import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AurialStatus />', () => {
	it('Renders without crashing', () => {
       shallow(<AuralStatus />);
    });

{/*    it.only('Renders AuralStatus', () => {
    	const auralStatus = "testing";
    	const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
    	expect (wrapper.contains(<p id="status-readout">{auralStatus}</p>)).toEqual(true);
    	console.log(auralStatus);
    });
*/}
	it('Renders AuralStatus', () => {
		const wrapper = shallow(<AuralStatus />);
		expect (wrapper.find('p').length).toEqual(1);
	});
}); 