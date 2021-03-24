import React , {useEffect, useState}  from 'react'
import { loginWithEmail } from '../../authapi';
import { auth } from '../../utils/db';

export default function login() {

    const [user, setuser] = useState({
        userEmail : "",
        userPassword : ""
    })

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
              setuser({userEmail : user.email , userPassword : ""})
            }
          })
    }, [])

    const onChange = e => {
        let name = e.target.name
        setuser(prevState => ({ ...prevState, [name]: e.target.value }));
    }

    const onSubmit = () => {
        let loginRs = loginWithEmail(user)
        if(!loginRs.error){
            alert("login sucess")
            alert(JSON.stringify(loginRs))
        }
    }

    return (
        <div>

            <input name="userEmail" value={user.userEmail} onChange={onChange} />
            <input name="userPassword" value={user.userPassword} onChange={onChange} />
            <button onClick={onSubmit}>Login</button>
        </div>
    )
}
