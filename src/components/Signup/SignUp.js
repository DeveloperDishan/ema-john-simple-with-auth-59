import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'
const SignUp = () => {

    const [error, setError] = useState(null)

    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value
        const confirmPass = form.ConfirmPassword.value

        if (password.length < 6) {
            setError('please type atlist 6')
            return;
        }
        if (password !== confirmPass) {
            setError('your password not match')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='form_container'>
            <h2 className='form_title'>This is SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form_control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form_control">
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" name='ConfirmPassword' required />
                </div>
                <input className='btn_submit' type="submit" value='Login' />
            </form>
            <p>Already have an account? <Link to='/login'>please login</Link></p>
            <p className='text_error'>{error}</p>
        </div>
    );
};

export default SignUp;