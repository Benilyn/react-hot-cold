import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessForm />);
    });

    it('should call onMakeGuess function when submit is clicked', () => {
    	const callback = jest.fn();
	    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = "88";
        wrapper.find('input[type="number"]').instance().value = value;
	    wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    
    });

    it.only('should not call onMakeGuess function when form is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });

}); 