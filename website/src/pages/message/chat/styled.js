import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 42%;
  height: 92vh;

  margin-top: 2rem;
  margin-left: 1rem;

  background: #FFFFFF;
  box-shadow: 0px 10px 25px 1px rgba(0, 0, 0, 0.15);
  border-radius: 6px;

  .head{
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width:100%;
    height: 8rem;

    padding: 2rem;

    border-bottom: solid 2px rgba(112, 124, 151, 0.1);

    .information{
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      margin: 0rem 2rem;

      font-size: 1em;
      line-height: 21px;

      .name{
        font-family: 'TT Norms bold';
        color: #0D1C2E;
      }
      .status{
        font-family: 'TT Norms semibold';
        color: #2A8BF2;
      }
    }

    img{
      width: 5rem;
      height: 5rem;
    }
    .options{
      margin-right: 1rem;
      img{
        width: 3rem;
        height: 2rem;
      }
    }

  }
`

export { Container };
