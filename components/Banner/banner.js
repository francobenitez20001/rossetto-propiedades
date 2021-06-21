import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ContactoContext } from "../../context/contacto/contactoContext";

const Banner = () => {
  const {data,loading,error,traerInfo} = useContext(ContactoContext);
  useEffect(() => {
    if(!data){
      traerInfo();
    }
  }, [])
  return (
    <Slide>
      <div className="container">
        <Principal>Encontra la propiedad ideal</Principal>
        <Descripcion>Todos nuestros conocimientos y herramientas a tu beneficio</Descripcion>
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
    background:url('https://images.unsplash.com/photo-1617638968441-0f701b56870e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80');
    height:100vh;
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

const Principal = styled.h1`
    font-weight:bold;
    font-size:50px;
    @media(max-width:768px){
        font-size:30px;
    }
`;

const Descripcion = styled.h4`
    font-weight:600;
    font-size:27px;
    line-height:80px;
    @media(max-width:768px){
        line-height:30px;
        font-size:20px;
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
        >svg{width:22px;}
    }

    @media(min-width:768px){
        margin:0px 30px;
        width:60px;
        height:60px;
        border-radius:30px;
        >svg{
            width:25px;
        }
        &:hover{
            >svg{width:27px;}
        }
    }
`;

export default Banner;
