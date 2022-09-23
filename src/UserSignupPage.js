import React from 'react';

class UserSignupPage extends React.Component {

    state = {
        username: null,
        nickname: null,
        password: null,
        passwordRepeat: null,
    };

    onChange = event => {

        const {name,value}= event.target; // object destructuring 

        this.setState({ 
            [name]: value   //no need to multiple function
        })};



    render() {
        return (
            <form>
                <h1> Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange = {this.onChange}/>
                </div>
                <div>
                    <label>Nickname</label>
                    <input name="nickname" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input name="passwordRepeat"type="password"onChange={this.onChange}/>
                </div>
                <button >Sign up</button>
                
            </form>
        
    )}
}

export default  UserSignupPage;