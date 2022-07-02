import { Container } from "./styled";

export function Index(props) {
  const {name, photoUrl, status} = props.data;

  return(
    <Container>
      <div className="head">
        <img src={photoUrl} alt="perfil-icon"/>
        <div className="information">
          <div>{name}</div>
          <div>{status}</div>
        </div>
      </div>
    </Container>
  )
}
