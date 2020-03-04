import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});
//first item
test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195)
});
//all items
test('should correctly add up a total expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});