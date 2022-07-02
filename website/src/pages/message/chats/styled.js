import styled from "styled-components";

const Container = styled.div`

  display: flex;
  flex-direction: column;

  padding: 1rem;

  height: 100vh;
  width: 40%;

  overflow-y: scroll;

  ::-webkit-scrollbar-track
  {
    border-radius: 10px;
    background-color: linear-gradient(180deg, #F3F3FB 0%, #FDFBFD 100%);
  }

  ::-webkit-scrollbar
  {
    width: 12px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(196,196,196,.3);
    background-color: #C4C4C4;
  }

  .head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 2rem 2rem 0rem 2rem;

    .title{
      font-family: 'TT Norms';
      font-size: 2em;
      line-height: 26px;

      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      text-transform: capitalize;

      color: #0D1C2E;
    }

    .recents{

      margin-top: 1rem;

      font-family: 'TT Norms';
      font-size: 1.1em;
      line-height: 26px;
      /* identical to box height, or 144% */

      display: flex;
      align-items: center;
      text-transform: capitalize;

      color: #707C97;
    }

    .newChat{

      padding: 1rem 2rem;
      background: linear-gradient(92.68deg, #7CB8F7 0%, #2A8BF2 100%);

      box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 10px 6px 25px rgba(42, 139, 242, 0.15);

      border: solid 0px;
      border-radius: 6px;

      font-family: 'TT Norms';
      font-size: 1.2em;
      line-height: 24px;
      /* identical to box height */

      display: flex;
      align-items: center;
      text-align: center;
      text-transform: capitalize;

      color: #FFFFFF;

      &:hover{
        cursor: pointer;

        background: #FFFFFF;
        color:#2A8BF2;

        transition: 0.3s
      }
    }
  }
`;


export { Container }
