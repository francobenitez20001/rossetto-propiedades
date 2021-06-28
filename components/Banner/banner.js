import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ContactoContext } from "../../context/contacto/contactoContext";


const Banner = (props) => {
  const {data,loading,error,traerInfo} = useContext(ContactoContext);
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    if(!data){
      traerInfo();
    }
    if(document){
      setBannerImage(`${document.location.origin}/portada.jpg`)
    }
  }, [])
  return (
    <Slide className="animated fadeIn">
      <div className="container">
        {props.children}
        {!data ? null :
        <Redes>
          <Red onClick={()=>window.open(`${data.facebook}`,'blank')}>
              <FontAwesomeIcon icon={faFacebook}/>
          </Red>
          <Red onClick={()=>window.open(`${data.instagram}`,'blank')}>
              <FontAwesomeIcon icon={faInstagram}/>
          </Red>
        </Redes>}
      </div>
    </Slide>
  );
}

const Slide = styled.div`
    background:url('https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    height:70vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position-y:center;
    background-attachment:fixed;
    background-color:rgba(0,0,0,0.5);
    opacity:0.99;
    >div{
        position:relative;
        text-align:right;
        color:var(--white);
        padding-top:  50px;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        @media(max-width:768px){
            justify-content:center;
            text-align:center;
        }
    }

`;

const Redes = styled.div`
    position:absolute;
    bottom:50px;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    @media(max-width:768px){
      bottom: 24px;
    }
`;

const Red = styled.div`
    margin:0px 20px;
    width:50px;
    height:50px;
    border-radius:25px;
    border:2px solid white;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:var(--primary);
    transition:all .5s ease;
    cursor: pointer;
    >svg{
        width:20px;
    }
    &:hover{
        background-color:var(--secondary);
    }

    @media(min-width:768px){
        margin:0px 20px;
        width:40px;
        height:40px;
        border-radius:20px;
        >svg{
            width:18px;
        }
        &:hover{
        }
    }
`;

export default Banner;
