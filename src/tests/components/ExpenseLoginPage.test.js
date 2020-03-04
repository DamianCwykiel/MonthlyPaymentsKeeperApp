import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseLoginPage } from '../../components/ExpenseLoginPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


//Adapter configuration
Enzyme.configure({adapter: new Adapter()});

test('should render ExpenseLoginPage', () => {
    const wrapper = shallow(<ExpenseLoginPage />);
    expect(wrapper).toMatchSnapshot();
});

//login button
test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<ExpenseLoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
