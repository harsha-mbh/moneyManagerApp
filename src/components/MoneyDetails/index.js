// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense} = props
  const balance = income - expense
  return (
    <div className="money-details-container">
      <div className="balance-container money-details-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="heading">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container money-details-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="heading">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expense-container money-details-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
