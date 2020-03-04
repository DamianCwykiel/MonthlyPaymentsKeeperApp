import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expensesPhrase = expenseCount === 1 ? 'payment' : 'payments';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('0,0.00 $');
    const formattedExpenseTotalEuroCurrency = numeral ((expensesTotal / 100) / 4.29).format('0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">
                    Check your bills! There are: <span>{expenseCount}</span> {expensesPhrase}. In total that is: <span>{formattedExpensesTotal}</span>.
                    That equals ~ <span>{formattedExpenseTotalEuroCurrency} €</span>.
                    <div className="page-header__actions">
                        <Link className="create-button" to="/create">Add Your Bill</Link>
                    </div>
                </h2>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);