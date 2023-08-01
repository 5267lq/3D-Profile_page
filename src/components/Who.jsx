import React from "react";
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;

`
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1200px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const Title = styled.h1`
    font-size: 74px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Line = styled.img`
    height: 5px;
`
const SubTitle = styled.h2`
    color: #da4ea2;
`
const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`
const Button = styled.button`
    width: 120px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const Img = styled.img`
    height: 600px;
    width: 800px;
    object-fit: contain;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }
`

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    {/* 3D model */}
                </Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src='./img/line.png' />
                        <SubTitle>Who we Are</SubTitle>
                    </WhatWeDo>
                    <Desc> a creative group of designers and developers with a passion for the arts.</Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who