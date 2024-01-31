import { useState } from "react";

import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../utils/mutation";

import Auth from "../utils/auth";

function SignUp() {
    const [formState, setFormState] = useState({
        name: '',
        username: '',
        password: ''
    })

    const [createUser] = useMutation(CREATE_USER)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit =  async (event) => {
        event.preventDefault()

        console.log(formState)

        const { data } = await createUser({
            variables: {
                ...formState
            }
        })

        console.log(data.createUser.token)

        Auth.login(data.createUser.token)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name: <br />
                        <input type="text" name="name" value={formState.name} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        username: <br />
                        <input type="text" name="username" value={formState.username} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        password: <br />
                        <input type="password" value={formState.password} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;