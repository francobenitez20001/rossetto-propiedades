import { useEffect, useState } from "react";
import styled from "styled-components";

const BannerSeccion = ({seccion}) => {
  const [bannerImage, setBannerImage] = useState('');
  useEffect(() => {
    if(document){
      setBannerImage(`${document.location.origin}/portada.jpg`);
    }
  }, [])

  return (
    <Banner id="banner" className="animated fadeIn" background={bannerImage}>
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
