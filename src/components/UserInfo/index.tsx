import { 
  Container, 
  Profile, 
  Avatar,
  UserData, 
  EasterEgg,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
   } from './styles'
import { useState } from 'react'



const UserInfo: React.FC = () => {
  const easterEggTitle = [
    'Copiado!', 
    'Cópia dupla!', 
    'Cópia tripla!', 
    'Cópia desenfreada!!',
    'Dominação!!',
    'Mega cópia!!',
    'Inexorável!!',
    'Loucura pura!!',
    'Cópia monstra!!',
    'Divina!!!',
    'Super divina!!!'
  ]
  let [counterEasterEgg, setCounterEasterEgg] = useState(-1);
  let [toClipBoard, setToClipBoard] = useState(false);

  const validIfIsLasts = ()=> {
    if(counterEasterEgg === easterEggTitle.length - 1 || counterEasterEgg === easterEggTitle.length - 2) {

      return 'isLast'
    } else {
      return ''
    }
  }

  function easterEggFn() {
    if(toClipBoard) return
    setToClipBoard(true)
    const timeout = setTimeout(()=> {
      setToClipBoard(false)
      clearTimeout(timeout)
    }, 2000)
    navigator.clipboard.writeText("Olha o easter egg ai!");
    if(counterEasterEgg === easterEggTitle.length - 1) {
      setCounterEasterEgg(0)
      console.log('entrou')
      return
    }
    setCounterEasterEgg(++counterEasterEgg)
  }

  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData onClick={easterEggFn}>
          {toClipBoard && <EasterEgg className={validIfIsLasts()}>
            <p>{easterEggTitle[counterEasterEgg]}</p>
            <div className='square'></div>
          </EasterEgg>}
          <strong>
            Bruno Soares
          </strong>
          <span>
            #2222
          </span>
        </UserData>
      </Profile>
      
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
};

export default UserInfo;