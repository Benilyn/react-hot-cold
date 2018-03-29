import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessCount />);
    });

{/* wrapper.setProps({guessCount: 3});
	expect(wrapper.find('#count').text()).toEqual(3); */}
}); //describe('<Game/>')