import { useState } from "react"
import styled from "styled-components"

const Card = ()=>{

    const [NoOfLikes , setNoOfLikes] = useState(0)
    const [ checkClick , setcheckClick] = useState(false)

    const updateLikes = ()=>{
        setNoOfLikes (NoOfLikes + 1)
        setcheckClick(true)
    }


    return(
      <CardWrap>
        <img src="./woman.jpg"/>
        <CardContent>
            <LikeIcon className={checkClick? `LikeIcon bg-red`:`LikeIcon`} onClick={updateLikes}>Like</LikeIcon>
            <Likes>{NoOfLikes}</Likes>  
        </CardContent>

      </CardWrap>
    )
}
  
  export default Card


  const CardWrap = styled.div`
    width: 300px;
    height: 500px;
    border: 1px solid black;
    box-shadow: 1px 1px 3px black;
    img{
        width: inherit;
        height: 400px;
        object-fit: cover;
    }
  `
  const CardContent = styled.div`
    padding: 15px 25px;
    margin: 0px auto;
    text-align: center;
    .bg-red{
      background: red;
    }
  `
  const LikeIcon = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid pink;
    border-radius: 50%;
    margin: 0px auto;
    cursor: pointer;
    .bg-red{
      background: red;
    }
  `
  const Likes = styled.p`
    margin-top: -2px;
  `