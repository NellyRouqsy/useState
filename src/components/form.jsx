import { useState } from "react"
import styled from "styled-components"

const Form =()=>{

    const [username , setUserName] = useState("")
    const [password , setPassword] = useState("")

    

    return(
        
        <div>
            <form>
                <InputWrap>
                <label> Username</label>
                <input name="username" onChange={(e)=>{setUserName(e.target.value)}}/>
                </InputWrap>

                <InputWrap>
                <label> Password</label>
                <input name="username" onChange={(e)=>{setPassword(e.target.value)}}/>
                </InputWrap>
                <Button>Submit</Button>
                <h2>Form values</h2>
                <p>Username: {username}</p>
                <p>Password: {password}</p>
                
            </form>
        </div>
    )
}


export default Form


const InputWrap = styled.div`
    margin-bottom: 20px;
    label{
        margin-right: 20px;
    }
`
const Button = styled.button`

`