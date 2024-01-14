import { useExpenseContext } from '../../contexts/ExpenseContext';
import styles from './Details.module.css';

export default function Details() {
    const { allExpenses, cost, onDeleteExpense } = useExpenseContext();

    return (
        <div className={`${styles['expense-table']}`}>
            <table>
                <thead>
                    <tr>
                        <th>Expense Name</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="expense-list">
                    {allExpenses.map((expense, index) =>
                        <tr key={index}>
                            <td>{expense.expenseName}</td>
                            <td>${expense.expenseValue}</td>
                            <td className={`${styles['delete-btn']}`} onClick={() => onDeleteExpense(index)}>Delete</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className={`${styles['total-amount']}`}>
                <strong>Total:</strong>
                $<span id="total-amount">{cost}</span>
            </div>
        </div>
    );
}