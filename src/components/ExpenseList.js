import React from 'react';
import { connect } from 'react-redux';
import ExpeneListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Adapter configuration
Enzyme.configure({adapter: new Adapter()});

export const ExpenseList = (props) => (
    <div className="content-container__add">
    <div className="list-header">
        <div className="see-on-mobile">Payments</div>
        <div className="see-on-desktop">Bill & Date</div>
        <div className="see-on-desktop">Amount</div>
    </div>
        <div className="list-body">
        {
        props.expenses.length === 0 ? (
            <div className="list-item">
                <span className="list-item__message">No payments to worry about!</span>
            </div>
        ) : (
            props.expenses.map((expense) => {
                return <ExpeneListItem key={expense.id} {...expense} />;
            })
        )
    }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    }
};
export default connect(mapStateToProps)(ExpenseList); 

