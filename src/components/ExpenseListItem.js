import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = (props)=>(
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link> 
        <p>
            {numeral(props.expense.amount).format('$0,0.00')}</p>
            {moment(props.expense.createdAt).format('MMMM Do, YYYY')}<br/>    
    </div>
);

export default ExpenseListItem;
