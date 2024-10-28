import { useState } from "react"
import styled from "styled-components"

const Form =()=>{

    const [username , setUserName] = useState("")
    const [password , setPasswpord] = useState("")

    

    return(
        
        <div>
            <form action="">
                <InputWrap>
                <label> Username</label>
                <input />
                </InputWrap>

                <InputWrap>
                <label> Password</label>
                <input />
                </InputWrap>
                
            </form>
        </div>
    )
}


export default Form


const InputWrap = styled.div`
    
`