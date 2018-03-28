import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessForm />);
    });

    it('should fire the onSubmit callback when the form is submitted', () => {
    	const callback = jest.fn();
	    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
	    const value = "88";
	    wrapper.instance().setEditing(true);
	    wrapper.update();
	    wrapper.find('#userGuess').instance().value = value;
	    wrapper.simulate('submit');
	    expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire onSubmit callback when form is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        wrapper.instance().setEditing(true);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
}); 