import styled from "styled-components";

const BannerSeccion = ({seccion}) => {
  return (
    <Banner id="banner">
      <div className="container">
        <h1>{seccion}</h1>
      </div>
    </Banner>
  );
}

const Banner = styled.section`
  background: url('./banner.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  @media(max-width:768px){
    height: 240px;
  }
  >div{
    >h1{
      float: right;
      color: var(--secondary);
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
