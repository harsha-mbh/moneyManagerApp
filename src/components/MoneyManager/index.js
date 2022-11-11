import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: 0,
    transactionType: 'INCOME',
    income: 0,
    expense: 0,
    transactionsList: [],
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({transactionType: event.target.value})
  }

  onDeleteTransaction = deleteId => {
    const {transactionsList} = this.state
    const deletedTransaction = transactionsList.filter(
      eachTransaction => eachTransaction.id === deleteId,
    )
    if (deletedTransaction[0].type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income - deletedTransaction[0].amount,
      }))
    } else if (deletedTransaction[0].type === 'EXPENSES') {
      this.setState(prevState => ({
        expense: prevState.expense - deletedTransaction[0].amount,
      }))
    }
    const filteredTransactions = transactionsList.filter(
      eachTransaction => eachTransaction.id !== deleteId,
    )
    this.setState({transactionsList: filteredTransactions})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, transactionType} = this.state
    if (transactionType === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amountInput),
      }))
    }
    if (transactionType === 'EXPENSES') {
      this.setState(prevState => ({
        expense: prevState.expense + parseInt(amountInput),
      }))
    }
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: transactionType,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: 0,
      transactionType: 'INCOME',
    }))
  }

  render() {
    const {
      titleInput,
      amountInput,
      income,
      expense,
      transactionsList,
      transactionType,
    } = this.state
    return (
      <div className="main-container">
        <div className="title-card">
          <h1 className="username">Hi, Richard</h1>
          <p className="welcome-message">
            Welcome back to your
            <span className="app-title"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expense={expense} />
        <div className="transactions-container">
          <form
            className="add-transaction-form"
            onSubmit={this.onAddTransaction}
          >
            <h1 className="form-heading">Add Transaction</h1>
            <div className="input-container">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                value={titleInput}
                id="title"
                placeholder="TITLE"
                className="title-input"
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="input-container">
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="number"
                value={amountInput}
                id="amount"
                placeholder="AMOUNT"
                className="amount-input"
                onChange={this.onChangeAmount}
              />
            </div>
            <div className="input-container">
              <label htmlFor="type">TYPE</label>
              <select
                id="type"
                value={transactionType}
                defaultValue="INCOME"
                onChange={this.onChangeType}
              >
                <option value="INCOME" id="INCOME" selected>
                  Income
                </option>
                <option value="EXPENSES" id="EXPENSES">
                  Expenses
                </option>
              </select>
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="form-heading">History</h1>
            <ul className="transactions-header">
              <li className="transaction-details">Title</li>
              <li className="transaction-details">Amount</li>
              <li className="transaction-details">Type</li>
            </ul>
            <ul>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
