import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Adapter configuration
Enzyme.configure({adapter: new Adapter()});

test('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

