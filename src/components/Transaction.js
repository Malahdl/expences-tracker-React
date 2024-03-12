import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    const amount = Number(transaction.amount);
    const sign = amount < 0 ? '-' : '+';

  return (
    <div className="tx-item">
        <div className={`tx-item-labels-section ${amount < 0 ? 'red' : 'green'}`}>
            <p>{transaction.title}</p>
            <p>{sign}${amount < 0 ? amount * -1 : amount}</p>
        </div>
        <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>
            X
        </button>
    </div>
  )
}
