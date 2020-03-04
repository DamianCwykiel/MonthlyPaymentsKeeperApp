import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    removeExpense, 
    startRemoveExpense,
    editExpense, 
    startEditExpense,
    setExpenses, 
    startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

//create test uid
const uid = 'test_uid_in_place';
const defaultAuthOfState = { auth: { uid } };

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note , amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('show me remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
    });
});

//startRemoveExpense
test('should remove expense from database', (done) => {
    const store = createMockStore(defaultAuthOfState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense( { id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('show me edit expense action object', () => {
    const action = editExpense('123cba', { note:'new note number'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123cba',
        updates:{
            note: 'new note number'
        }
    });
});

//startEditExpense
test('should edit expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthOfState);
    const id = expenses[0].id;
    const updates = { amount: 60000 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

test('show me add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test ('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthOfState);
    const expenseData = {
        description: 'Mouse',
        amount: 6000,
        note: 'MadDog mouse for players',
        createdAt: 1000
    };
//startAddExpense
store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test ('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthOfState);
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefault
        }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
    
});

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthOfState);
    store.dispatch(startSetExpenses()).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

