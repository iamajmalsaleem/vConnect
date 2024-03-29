import styled from 'styled-components';
import Head from 'next/head';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';

function Login() {

    const signIn = () => {
      auth.signInWithPopup(provider).catch(alert);
    } 
  
    return (
        <Container> 
            <Head>
                <title>Login</title>
            </Head>
 
            <LoginContainer>
               <Logo src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8W1G8hNdKEEXyPNkIOxY05iscOhHDHmJNQ&usqp=CAU' />
               <Button onClick = {signIn} variant = 'outlined'>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )  
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: honeydew
`;
     
const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
  
`;
  
const Logo = styled.img`
  height: 200px;
  width: 250px;
  margin-bottom:50px;
  
`;
