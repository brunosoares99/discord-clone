import { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;
    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n)=>(
          <ChannelMessage 
          key={n}
          author='Bruno Soares' 
          date='30/07/2022'
          content="Alou tudo bem?"
        />
        ))}
      
        <ChannelMessage 
          author='Bruno Soares' 
          date='30/07/2022'
          hasMention={true}
          content={
            <>
              <Mention>
                @Alana Mayara
              </Mention>
              oi tudo bem?
            </> 
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder='Conversar em #chat-livre'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;