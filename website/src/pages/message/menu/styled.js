import styled from 'styled-components';

const Container = styled.div`

  display: flex;
  flex-direction: column;

  justify-content:space-between;

  top:0px;
  position: sticky;

  width: 20%;
  max-width: 300px;
  min-width: 300px;

  height:100vh;

  padding: 1rem 0rem 0rem 0rem;

  box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);

  .informationUser{

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;

    width:100%;
    height: 25%;

    font-family: 'TT Norms';
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #0D1C2E;

  }

  .options{
    margin-bottom: 15rem;
  }
`

const Option = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;

  text-align: center;
  padding: 1rem 0rem 1rem 0rem;

  width: 90%;
  height: 4.5rem;

  font-family: 'TT Norms semiBold';
  font-size: 1em;
  line-height: 19px;

  text-transform: uppercase;

  color: #707C97;

  cursor: pointer;

  .notSelect{
    margin-right: 1rem;
  }

  .select{

    width: 0.5em;
    height: 100%;

    background: #2A8BF2;
    box-shadow: 1px 0px 10px rgba(42, 139, 242, 0.45), 0px 0px 10px rgba(42, 139, 242, 0.55), 4px 0px 25px rgba(42, 139, 242, 0.75);
    border-radius: 3px;

    margin-right: 1rem;
  }

  img{
    width: 1.7em;
    margin-right: .9rem;
  }
`

export { Container, Option };
