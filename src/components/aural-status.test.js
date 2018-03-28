import React from 'react';
import {shallow} from 'enzyme';

import AurialStatus from './aural-status';

describe('<AurialStatus />', () => {
	it('Renders without crashing', () => {
       shallow(<AurialStatus />);
    });
}); //describe('<Game/>')