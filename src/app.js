import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';

const store = configureStore();
store.dispatch(addExpense({
    description:'water bill',
    amount: 45000
}));
store.dispatch(addExpense({
    description:'gas bill',
    createdAt: 1000
}));
store.dispatch(addExpense({
    description:'rent',
    amount: 99999
}));

const state = store.getState();

//react-redux (Provider) helps us to make the store local to the react components
const jsx = (
    <Provider store={store}> 
        <AppRouter/>
    </Provider>
    );
ReactDOM.render(jsx, document.getElementById('app'));
