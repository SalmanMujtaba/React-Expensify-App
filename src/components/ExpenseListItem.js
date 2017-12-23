import React from 'react';
import {Link} from 'react-router-dom';
const ExpenseListItem = (props)=>(
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link> 
        <p>{props.expense.amount}</p>
        {props.expense.createdAt}<br/>    
    </div>
);

export default ExpenseListItem;
