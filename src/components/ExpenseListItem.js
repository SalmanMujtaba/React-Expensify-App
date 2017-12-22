import React from 'react';
import {connect} from 'react-redux';

const ExpenseListItem = (props)=>(
    <div>
        {props.expense.description}
        {props.expense.amount}
        {props.expense.createdAt}     
    </div>
);

export default ExpenseListItem;
