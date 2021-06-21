import styled from "styled-components";

const BannerSeccion = ({seccion}) => {
  return (
    <Banner id="banner" background={`https://images.unsplash.com/photo-1617638968441-0f701b56870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80`}>
      <div className="container">
        <h1>{seccion}</h1>
      </div>
    </Banner>
  );
}

const Banner = styled.section`
  background: url(${props=>props.background ? props.background : ''});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  opacity: 0.99;
  @media(max-width:768px){
    height: 240px;
  }
  >div{
    >h1{
      float: right;
      color: var(--white);
      font-size: 25px;
      font-weight: bold;
      text-transform: uppercase;
      margin-top:30px;
      @media(max-width:768px){
        margin-top: 80px;
        font-size: 20px;
      }
    }
  }
`;

export default BannerSeccion;
