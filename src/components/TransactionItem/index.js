import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {title, amount, type, id} = transactionDetails
  const onClickDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="transaction-container">
      <p className="transaction transaction-details">{title}</p>
      <p className="transaction transaction-details"> Rs {amount}</p>
      <div className="type-delete-container transaction-details">
        <p className="transaction">{type}</p>
        <button
          type="button"
          testid="delete"
          className="delete-btn"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
