import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//PLN currency
numeral.register('locale', 'pln', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: 'zł'
    }
});

// switch between locales
numeral.locale('pln');

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to = {`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <h3 className="list-item__sub-title">{moment(createdAt).format('MMMM Do YYYY')}</h3>
        </div>
        <h3 className="list-item__data">
            <p>{numeral(amount / 100).format('0,0.00 $')}</p>
            <p>~ {numeral((amount / 100) / 4.30).format('0,0.00')} €.</p>
        </h3> 
    </Link>
); 
export default ExpenseListItem;