import { Container } from "./styled";

export default function Index(props) {

  const { name, photoURL, timeLastMessage, status, message } = props.data;
  return(
    <Container>
      <div className="header">
        <div className="photo">
          <img src={photoURL} alt="user-friend"/>
          <div className="onlineIcon"/>
        </div>
        <div className="info">
          <span className="name">{name}</span>
          <span className="status message">{status}</span>
        </div>
        <div className="timeLast message"> {timeLastMessage} </div>
      </div>
      <div className="preview message">
        {message.length >= 200 ? message.substring(0, 200) + '...' : message}
        <div className="amount">5</div>
      </div>
    </Container>
  );
}
