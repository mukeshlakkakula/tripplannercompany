import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './index.css';

// Keyframes for background animation
const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Keyframes for slide-up animation
const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Container for centering the form
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(270deg, #e3ffe7, #d9e7ff, #e3ffe7);
  background-size: 600% 600%;
  animation: ${backgroundAnimation} 15s ease infinite;

  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 10px;
  animation: ${slideUp} 0.6s ease-in-out;

  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    margin: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    margin: 5px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  padding: 20px 0;
  font-size: 2.8rem;
  font-weight: 400;
  text-align: center;
  color: black;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormContent = styled.div`
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: black;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px 0;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  border-bottom: 2px solid #b1b1b1;
  font-size: 1rem;

  &:focus::placeholder {
    color: transparent;
  }

  &:focus ~ div::before {
    transform: scaleX(1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 0;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  border-bottom: 2px solid #b1b1b1;
  font-size: 1rem;
  resize: none;

  &:focus::placeholder {
    color: transparent;
  }

  &:focus ~ div::before {
    transform: scaleX(1);
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #e34352;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;

const Button = styled.button`
  background-color: #e34352;
  color: #fff;
  margin-top: 20px;
  padding: 12px 40px;
  border: none;
  outline: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #d32f2f;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      // Create the WhatsApp message
      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AAddress: ${address}%0AMessage: ${message}`;

      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/919032302468?text=${whatsappMessage}`;

      // Open the WhatsApp URL
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contactus">
      <Container>
        <FormWrapper>
          <Form onSubmit={handleLogin}>
            <Title>Contact Us</Title>
            <FormContainer>
              <FormContent>
                <Label htmlFor="name">Name</Label>
                <InputField
                  type="text"
                  value={user.name}
                  onChange={getUserData}
                  placeholder="Enter your Name"
                  required
                  autoComplete="off"
                  name="name"
                  id="name"
                />
                <Underline />
              </FormContent>
              <FormContent>
                <Label htmlFor="email">Email</Label>
                <InputField
                  type="email"
                  value={user.email}
                  onChange={getUserData}
                  placeholder="Enter your Email Address"
                  required
                  autoComplete="off"
                  name="email"
                  id="email"
                />
                <Underline />
              </FormContent>
              <FormContent>
                <Label htmlFor="phone">Mobile Number</Label>
                <InputField
                  type="number"
                  value={user.phone}
                  onChange={getUserData}
                  placeholder="Enter your Mobile Number"
                  required
                  autoComplete="off"
                  name="phone"
                  id="phone"
                />
                <Underline />
              </FormContent>
              <FormContent>
                <Label htmlFor="address">Address</Label>
                <InputField
                  type="text"
                  value={user.address}
                  onChange={getUserData}
                  placeholder="Enter your Address"
                  required
                  autoComplete="off"
                  name="address"
                  id="address"
                />
                <Underline />
              </FormContent>
              <FormContent>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  rows="5"
                  value={user.message}
                  onChange={getUserData}
                  placeholder="Enter your Message"
                  required
                  autoComplete="off"
                  id="message"
                />
                <Underline />
              </FormContent>
            </FormContainer>
            <Button type="submit">Submit</Button>
          </Form>
        </FormWrapper>
      </Container>
    </section>
  );
};

export default ContactUs;
