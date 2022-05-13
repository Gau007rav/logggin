import React, { useState } from 'react'

export default function Home() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [allEntry, setAllEntry] = useState([])

    let submission = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password }
        setAllEntry([...allEntry, newEntry])
        e.target.value=""
    }
    return (
        <>
        <h2 className='head'>Login Here</h2>
            <diV Id="outer">
                <form action='' >
                    <div id='inner'>
                        <label>E-mail</label>
                        <input placeholder='E-mail' type="E-mail" value={email} autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <br></br><br></br>
                        <label>Password</label>
                        <input placeholder='password' type="password" value={password} autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                </form>
            </diV>
            <button type="submit" onClick={submission} className="btn">submit</button>
            <div>
                {allEntry.map((item) => {
                    return (<div>
                        <p>Email:{item.email}</p>
                        <p>password:{item.password}</p>
                    </div>)
                })}
            </div>

        </>
    )
}
