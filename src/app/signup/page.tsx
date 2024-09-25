'use client'

import {useState} from "react";

export default function SignUpPage() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const onSignUp = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input
                id="username"
                type="text"
                value={user.username}
                onCanPlay={(e) => setUser({...user, username: e.target.value})}
            />
        </div>
    )
}