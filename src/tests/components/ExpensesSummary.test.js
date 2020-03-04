import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Adapter configuration
Enzyme.configure({ adapter: new Adapter() });

test ('should corectly render expensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2355}/>);
    expect(wrapper).toMatchSnapshot();
});

test ('should corectly render expensesSummary with a few expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={20} expensesTotal={1234567890}/>);
    expect(wrapper).toMatchSnapshot();
});