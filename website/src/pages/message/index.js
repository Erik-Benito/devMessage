import { Container } from "./styled";

import Menu from './menu/';
import Chats from './chats/'

export default function Index() {
  const user = {
    name: 'Erik Benito',
    photoUrl: '/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg'
  }
  const messages = [
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },
    {
      name:"Erik",
      photoURL:"/src/assets/img/230858051_987862795152669_6182166523953925644_n.jpg",
      timeLastMessage:"1 minute ago",
      status:"Offline",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor condimentum lobortis. Nam ultricies dolor est, ut imperdiet turpis malesuada sed. Suspendisse convallis est vitae erat blandit vulputate. Curabitur feugiat suscipit justo, in feugiat ipsum ornare at. Maecenas aliquam vitae urna vitae tincidunt. Vivamus nec mauris feugiat, elementum ex sit amet, bibendum ante. Pellentesque a turpis ac dui malesuada placerat. Nulla vel arcu ipsum. Integer lacinia turpis sit amet sem viverra dignissim. "
    },

  ]
  return(
    <Container>
        <Menu user={user}/>
        <Chats messages={messages}/>
    </Container>
  );
}
