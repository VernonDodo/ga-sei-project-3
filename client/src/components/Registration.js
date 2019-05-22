import React, {Component} from 'react';

class Registration extends Component {
    render() {
        return(
            <div>
                <h1>User Registration Page</h1>
                <div className="registration-form">
                    <form action="/users" method="POST">
                        First Name<br/>
                        <input type="text" name="firstname"/>
                        Last Name<br/>
                        <input type="text" name="lastname"/>
                        Date Of Birth<br/>
                        <input type="date" name="birthday"/>
                        <br/>
                        Email Address<br/>
                        <input type="text" name="email"/>
                        <input type="submit"/>
                    </form>
                </div>

            </div>
        )
    }
}

export default Registration