import { ButtonRadius } from '../../../components/common/style/button';
import { PhotoImg } from '../../../components/common/style/imgPhoto';
import { Container } from './styled';

export default function Index(props) {
  const {name, photoUrl, status} = props.user;
  return(
    <Container>
      <div className="head">
        <PhotoImg src={photoUrl} alt="perfil-icon"/>
        <div className="information">
          <div className='name'>{name}</div>
          <div className='status'>{status}</div>
        </div>
        <ButtonRadius className='options'>
          <img src="/src/assets/img/Icon-Outline-attach-2.svg" alt="clip-icon"/>
        </ButtonRadius>
        <ButtonRadius className='options'>
          <img src="/src/assets/img/Icon-Outline-more-vertical.svg" alt="clip-icon"/>
        </ButtonRadius>
      </div>
    </Container>
  )
}
