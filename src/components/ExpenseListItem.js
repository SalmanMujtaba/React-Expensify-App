import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props)=>(
    <div>
        <h3>{props.expense.description}</h3>
        <p>{props.expense.amount}</p>
        {props.expense.createdAt}<br/>   
        <button onClick={()=>{
            props.dispatch(removeExpense(props.expense))}}>
        Remove</button>  
    </div>
);

export default connect()(ExpenseListItem);
