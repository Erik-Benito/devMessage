import styled from "styled-components";

const Container = styled.div`

  background: #FFFFFF;
  border-radius: 6px;

  margin: 2rem;
  padding: 2rem;

  box-shadow: 0px 10px 55px rgba(0, 0, 0, 0.05), 0px 4px 10px rgba(0, 0, 0, 0.25), 0px 10px 25px rgba(0, 0, 0, 0.05);

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width:100%;

    .photo{

      position: relative;

      .onlineIcon{
        position: absolute;

        top: 5px;
        left: 2px;

        width: 15px;
        height: 15px;

        background: #00C305;

        border: 2px solid #FFFFFF;
        border-radius: 50%;
      }

      img{
        width: 4rem;
        height: 4rem;

        filter: drop-shadow(1px 1px 50px rgba(198, 27, 74, 0.15));

        border-radius: 50%;
      }

    }

    .info{
      display: flex;
      flex-direction: column;

      flex-grow: 1;

      padding: 1rem 2rem;

        .name{
          font-family: 'TT Norms bold';
          font-size: 1.1em;
          line-height: 21px;

          color: #0D1C2E;
        }
    }
  }

  .message{
    font-family: 'TT Norms';
    font-size: 1em;
    line-height: 26px;

    color: #707C97;
  }

  .status{
    font-family: 'TT Norms semibold';
    color: #2A8BF2;
  }

  .timeLast{
    margin-top: 1rem;
  }

  .preview{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .amount{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 20px;

    background-color: red;
    border-radius: 50%;

    color: white;

    font-family: 'TT Norms bold'
  }

`;

export { Container }
