import React from 'react'


class logIn extends React.Component {
 
    render() {
        return (
            <div className='login'>
                <h2>Log In</h2>
                <form>
                    <input
                        type='text'
                        name='user'
                        placeholder='Username'
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                    />
                </form>
            </div>
        )
    }
}

export default logIn