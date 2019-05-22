import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class AdminNavbar extends Component {
    render() {
        return(
            <Router>
                <div>
                    <nav className="admin-nav">
                        <Link to="/catalog/admin">Catalog Administration</Link>
                        <Link to="/user/admin">User Administration</Link>
                    </nav>
                    <Switch>
                        <Route exact path = "/catalog/admin" component={CatalogAdmin}/>
                        <Route exact path = "/user/admin" component={UserAdmin}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AdminNavbar