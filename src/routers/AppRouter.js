import React from 'react';
import { 
    //BrowserRouter, 
    Router,
    Route, 
    Switch, 
    Link, 
    NavLink 
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
//import Header from '../components/Header';
import ExpenseLoginPage from '../components/ExpenseLoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//create own history
export const history = createHistory();

const AppRouter = () => (
    //<BrowserRouter> switch from BrR to regular Router
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={ExpenseLoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
    //</BrowserRouter>
);
export default AppRouter;