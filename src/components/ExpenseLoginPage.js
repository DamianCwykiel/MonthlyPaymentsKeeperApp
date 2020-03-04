import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const ExpenseLoginPage = ({ startLogin }) => (
<div className="box-layout">
    <div className ="box-layout__box">
        <h1 className="box-layout__title">Monthly$Payments€Keeper£App</h1>
        <p className="box-layout__subtitle">Use gmail account to log in to this application</p>
        <button className="login-button" onClick={startLogin}>Google login</button>
    </div>
</div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()) 
});

export default connect (undefined, mapDispatchToProps)(ExpenseLoginPage);