import { useState } from 'react';
import { Container, Option } from './styled';

export default function index(props) {
  const options = [
    {
      title: "Chat",
      iconPath: "/src/assets/img/Icon Chat black.svg",
      iconPathColor: "/src/assets/img/message-circle.svg",
    },
    {
      title: "Friends",
      iconPath: "/src/assets/img/person.svg",
      iconPathColor: "/src/assets/img/personColor.svg",
    },
    {
      title: "Calendar",
      iconPath: "/src/assets/img/calendar.svg",
      iconPathColor: "/src/assets/img/calendarcolor.svg",
    },
    {
      title: "Settings",
      iconPath: "/src/assets/img/settings-2.svg",
      iconPathColor: "/src/assets/img/settings-color.svg",
    }
  ]
  const [select, setSelect] = useState(options[0].title);
  const {name, photoUrl} = props.user;
  return(
    <Container>
      <div className='informationUser'>
        <img src={`${photoUrl}`} alt="profile-user"/>
        <span>{name}</span>
      </div>
      <div className='options'>
        {
          options.map(
            (i, index) => (
              <Option key={index} onClick={() => setSelect(i.title)}>
                <div
                    className={ select === i.title ? 'select' : 'notSelect' }
                />
                <img src={ select === i.title ? i.iconPathColor : i.iconPath} alt={`icon-option-${i.title}`}/>
                {i.title}
              </Option>
            )
          )
        }
      </div>
      <div className='logOut'>
          <Option>
            <div className={'notSelect'}/>
            <img src='/src/assets/img/power.svg' alt='icon-option-logOut'/>
            Log Out
          </Option>
      </div>
    </Container>
  );
}
