import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { expenses } from '../fixtures/expenses';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Adapter configuration
Enzyme.configure({ adapter: new Adapter() });

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});