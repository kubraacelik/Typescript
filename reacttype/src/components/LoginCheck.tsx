import React from 'react'
import { useState } from 'react'

type UserType = {
    name : string;
    mail : string;
    phone : string
}

function LoginCheck() {
    const [user, setUser] = useState<UserType | null>(null);

    const handleLogin = () => {
        setUser({
            name : 'Can',
            mail : 'cc@hotmail.com',
            phone : '555555555'
        });
    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Giriş Yap</button>
        <button onClick={handleLogout}>Çıkış Yap</button>
        <div>
            <p>{user?.name}</p>
            <p>{user?.mail}</p>
            <p>{user?.phone}</p>
        </div>
    </div>
  )
}

export default LoginCheck