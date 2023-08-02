import React from "react";
import styled from 'styled-components'
import Map from "./Map";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction:column;
    gap: 25px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Input = styled.input`
    padding: 20px;
    background-color: #e6e6e6;
    border: none;
    border-radius: 5px;
`
const Textarea = styled.textarea`
    padding: 20px;
    background-color: #e6e6e6;
    border: none;
    border-radius: 5px;
`
const Button = styled.button`
    padding: 20px;
    background-color: #da4ea2;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    cursor: pointer;
`
const Right = styled.div`
    flex: 1;
`

const Contact = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>Contact Us</Title>
                        <Input placeholder="Name" />
                        <Input placeholder="Email" />
                        <Textarea placeholder="Write your message" rows={10} />
                        <Button>Send</Button>
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Container>
        </Section>
    )
}

export default Contact