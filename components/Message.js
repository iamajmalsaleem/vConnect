import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth } from '../firebase';
import moment from 'moment';

function Message({user, message}) {
    const [userLoggedIn] = useAuthState(auth);
    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;

    return (
        <Container>
            <TypeOfMessage>
                {message.message}
                <Timestamp>
                    {message.timestamp ? moment(message.timestamp).format('LT') : '...' }
                </Timestamp>
            </TypeOfMessage>
        </Container>
    )
} 

export default Message

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
  color: white;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: mediumslateblue;
`;

const Reciever = styled(MessageElement)`
  background-color: mediumorchid;
  text-align: left;
`;

const Timestamp = styled.span`
  color: blanchedalmond;
  padding: 5px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;