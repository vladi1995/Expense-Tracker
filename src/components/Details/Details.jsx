import { useExpenseContext } from '../../contexts/ExpenseContext';
import styles from './Details.module.css';

export default function Details() {
    const { allExpenses, cost, onDeleteExpense, onEditExpense, isEditMode } = useExpenseContext();

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
                            <td>
                                {isEditMode ? <input type="text" /> : <p>{expense.expenseName}</p>}
                            </td>
                            <td>${expense.expenseValue}</td>
                            <td>
                                <span className={`${styles['delete-btn']}`} onClick={() => onDeleteExpense(index)}>Delete</span>
                                <span className={`${styles['edit-btn']}`} onClick={() => onEditExpense(index)}>Edit</span>
                            </td>
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