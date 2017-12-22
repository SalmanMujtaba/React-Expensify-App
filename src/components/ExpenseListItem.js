import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props)=>(
    <div>
        {props.expense.description}
        {props.expense.amount}
        {props.expense.createdAt}   
        <button onClick={()=>{
            props.dispatch(removeExpense(props.expense))}}>
        Remove</button>  
    </div>
);

export default connect()(ExpenseListItem);
