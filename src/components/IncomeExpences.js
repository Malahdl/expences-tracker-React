import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpences = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(tx => Number(tx.amount));

    const balance = amounts.reduce((sum, currentValue) => sum + currentValue, 0);
    const income = amounts.filter(amount => amount > 0).reduce((sum, currentValue) => sum + currentValue, 0);
    const expence = amounts.filter(amount => amount < 0).reduce((sum, currentValue) => sum + currentValue, 0) * -1;

    const balanceSign = balance < 0 ? '-' : '';
  
    return (
    <div className='balance-div'>
        <div className='balance-text-div'>
            <h3>Balance</h3>
            <h2>{balanceSign}${transactions.length < 1 ? 0.00 : Math.abs(balance)}</h2>
        </div>
        <div className='income-expence-div'>
            <div className='income-div'>
                <h3>Income</h3>
                <h2>${transactions.length < 1 ? 0.00 : income}</h2>
            </div>
            <div className='divider'></div>
            <div className='expence-div'>
                <h3>Expence</h3>
                <h2>${transactions.length < 1 ? 0.00 : expence}</h2>
            </div>
        </div>
    </div>
  )
}
