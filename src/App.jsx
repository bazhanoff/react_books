import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
class App extends Component {
    state = {
        user: null
    }

    login = user => {
        if (user.username === 'admin' && user.password === "123") {
            this.setState({ user }, () => { this.props.history.push('/books') })
        }
    }

    logout = () => {
        this.setState({ user: null }, () => { this.props.history.push('/') })
    }

    render() {
        const { topics, books } = this.props;
        const { user } = this.state;
        return (
            <div className="app">
                <Toolbar user={user} />

                <Content>
                <Route path='/books' render={props => <Sidenav topics={topics} {...props} />} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/about' component={About} />
                        <Route path="/login" render={ props => <Login onLogin={this.login} {...props} />} />
                        <Route path="/logout" render={ props => <Logout onLogout={this.logout} {...props} />} />
                        <PrivateRoute exact path='/books/:topic?' user={user} data={books} component={Books}  />
                        <PrivateRoute exact path='/books/:topic/:book' user={user} data={books} component={Book}  />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);