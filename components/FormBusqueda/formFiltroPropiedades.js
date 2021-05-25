import { faArrowLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const FormFiltroPropiedades = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <IconShowFiltro>
        <FontAwesomeIcon icon={faFilter} onClick={()=>setShow(!show)}/>
      </IconShowFiltro>
      <Form show={show} onSubmit={e=>e.preventDefault()}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={()=>setShow(!show)}/>
        <Wrapper>
          <Box>
            <label htmlFor="idPropiedad">Tipo de propiedad</label>
            <select className="form-control" id="idPropiedad">
              <option value="">Seleccione un tipo de propiedad</option>
            </select>
          </Box>
          <Box>
            <label htmlFor="idOperacion">Operación</label>
            <select className="form-control" id="idOperacion">
              <option value="">Seleccione un tipo de operación</option>
            </select>
          </Box>
          <Box>
            <label htmlFor="idLocalidad">Localidad</label>
            <select className="form-control" id="idLocalidad">
              <option value="">Seleccione una localidad</option>
            </select>
          </Box>
          <input type="submit" value="Aplicar filtro"/>
        </Wrapper>
      </Form>
    </>
  );
}

const IconShowFiltro = styled.span`
  position: fixed;
  bottom: 100px;
  right: 50px;
  cursor: pointer;
  >svg{
    width: 50px;
    background-color: var(--primary);
    color:var(--white);
    padding: 10px;
    border-radius: 25px;
  }

  @media(max-width:768px){
    top: 20px;
    right: 60px;
    z-index:5;
    >svg{
      width: 40px;
    }
  }
`;

const Form = styled.form`
  position: fixed;
  top: 0;
  left: ${props=>props.show ? '0':'-100%'};
  width: 300px;
  background-color: var(--white);
  padding: 100px 0px 0px 0px;
  z-index: 100;
  height: 100%;
  box-shadow: 0px 2px 1px -1px var(--primaryrgb), 5px 15px 11px 0px var(--primaryrgb), 0px 1px 3px 0px var(--primaryrgb);
  transition:all .3s ease;
  >svg{
    width: 25px;
    color: var(--primary);
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  >input{
    border:none;
    padding:9px 13px;
    border-radius:10px;
    background-color:var(--primary);
    color:var(--white);
    font-family:'Open Sans',sans-serif;
    font-size:12px;
    font-weight:bold;
    box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    float: right;
  }
`;

const Box = styled.div`
  padding: 20px 0px;
  >label{
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--primary);
  }
`;

export default FormFiltroPropiedades;
