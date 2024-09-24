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
        <div>
            <h1>Signup Page</h1>
        </div>
    )
}