import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [isValid, setValidation] = useState(true);

    const {addTransaction} = useContext(GlobalContext);

    function checkInputs() {
        if(title.trim().length < 1 || amount === '0' || amount === 0 || amount.toString().trim().length < 1) {
            setErrorMsg('Must Enter a Title & an Amount!');
            setValidation(false);
        } else {
            setErrorMsg('');
            setValidation(true);

            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                title,
                amount: amount.toString(),
              }
          
              addTransaction(newTransaction);
        }
    }

  return (
    <div className='add-tx-div'>
        <div className='new-tx-header'>
            <h2>Add New Transaction</h2>
            <hr />
        </div>
        <div className='new-tx-title'>
            <h4>Title</h4>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Transaction Title'/>
        </div>
        <div className='new-tx-amount'>
            <h4>Amount</h4>
            <h4>Negative ={'>'} Expence</h4>
            <h4>Positive ={'>'} Income</h4>
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Transaction Amount'/>
        </div>
        <p className={isValid ? '' : 'error-msg'}>{errorMsg}</p>
        <button className='add-btn' onClick={checkInputs}>Add Transaction</button>
    </div>
  )
}
