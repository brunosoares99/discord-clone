import { Container, Separator } from './styles'

import ServerButton from '../ServerButton';

const ServerList: React.FC = ()=> {
  return(
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
    </Container>
  )
}

export default ServerList;