
import { Search } from '@mui/icons-material/Search';
import React from 'react'
import styled from 'styled-components'
const Container= styled.div`
height:60px;
`;
const Wrapper =styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
alien-item:center;
`;
const Left =styled.div`
width:33.3%;
display:flex;
alien-item:center;
`
const Center =styled.div`
width:33.3%;
text-align:center;
`
const Right =styled.div`
width:33.3%;
`
const Language=styled.div`
font-size:14px;
cursor:pointer;
`
const SerchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
alien-item:center;
margin-left:25px;
padding:5px
`
const Input=styled.input`
border:none;
`
const Logo=styled.div`
font-weight:bold
`
const Navbar = () => {
  return (
     <Container>
        <Wrapper>
            <Left>
                <Language>English</Language>
                <SerchContainer>
                    <Input></Input>
                    <Search></Search>
                </SerchContainer>
            </Left>
            <Center>
                <Logo>B&B</Logo>
            </Center>
            <Right>Right</Right>
        </Wrapper>   
    </Container>
  )
}

export default Navbar
