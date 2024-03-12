import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

import { Transaction } from './Transaction'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
  return (
    <div className='tx-list'>
        {transactions.length < 1 ? <h3>No Transactions Yet!</h3> : transactions.map(
            tx => (<Transaction key={tx.id} transaction={tx} />)
        )}
    </div>
  )
}
