import { Container } from "./styled";

import PreviewMessage from '../../../components/message/chats/';

export default function index(props) {
  const  messages = props.messages;
  return(
    <Container>
      <div className="head">
        <div className="text">
          <span className="title">
            Chats
          </span>
          <span className="recents">
            Recent Chats
          </span>
        </div>
        <button className="newChat">
          + Create New Chat
        </button>
      </div>
      {
        messages.map(i => (
          <PreviewMessage key={i.id} data={i}/>
        ))
      }
    </Container>
  )
}
