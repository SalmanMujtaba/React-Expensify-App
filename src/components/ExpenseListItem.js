import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
const ExpenseListItem = (props)=>(
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link> 
        <p>{props.expense.amount}</p>
        {props.expense.createdAt}<br/>   
        <button onClick={()=>{
            props.dispatch(removeExpense(props.expense))}}>
        Remove</button>  
    </div>
);

export default connect()(ExpenseListItem);
