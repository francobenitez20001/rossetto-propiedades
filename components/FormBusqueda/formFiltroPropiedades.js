import { faArrowLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OperacionesContext } from "../../context/operaciones/operacionesContext";
import { CategoriaContext } from "../../context/categorias/categoriasContext";
import { PartidosContext } from "../../context/partidos/partidosContext";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner";
import styled from "styled-components";
import Swal from "sweetalert2";

const FormFiltroPropiedades = () => {
  const {data:operaciones,error:errorOperaciones,traerTodas:traerOperaciones} = useContext(OperacionesContext);
  const {data:categorias,error:errorCategorias,traerTodas:traerCategorias} = useContext(CategoriaContext);
  const {data:partidos,error:errorPartidos,traerTodos:traerPartidos} = useContext(PartidosContext);
  const {filtrando,filtros,loading,error,filtrarInmuebles,aplicarFiltros} = useContext(InmuebleContext);
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    idOperacion:'',
    idCategoria:'',
    idPartido:''
  });

  useEffect(() => {
    getResources();
  }, []);

  useEffect(() => {
    if(filtrando && (formValues.idOperacion!= "" || formValues.idCategoria!="" || formValues.idPartido!="")){
      if(filtros.idOperacion || filtros.idCategoria || filtros.idPartido){
        filtrarInmuebles();
      }
    }
  }, [filtrando,filtros])

  const getResources = async()=>{
    if(!operaciones.length){
      await traerOperaciones();
    }
    if(!categorias.length){
      await traerCategorias();
    }
    if(!partidos.length){
      await traerPartidos();
    }
  }

  const handleChange = e=>{
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e=>{
    e.preventDefault();
    if(formValues.idOperacion.trim() == "" && formValues.idCategoria.trim() == "" && formValues.idPartido.trim() == ""){
      Swal.fire(
        'Atención',
        'Es necesario que completes un campo',
        'warning'
      );
      return;
    }
    aplicarFiltros(formValues);
    setShow(false);
  }

  if(errorOperaciones || errorCategorias || errorPartidos){
    console.log(errorOperaciones,errorCategorias,errorPartidos);
    Swal.fire('Error','Ha ocurrido un error, vuelva mas tarde', 'warning');
  }
  return (
    <>
      <IconShowFiltro>
        <FontAwesomeIcon icon={faFilter} onClick={()=>setShow(!show)}/>
      </IconShowFiltro>
      <Form show={show} onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={()=>setShow(!show)}/>
        {!operaciones.length || !categorias.length || !partidos.length ? <Spinner/> :
        <Wrapper>
          <Box>
            <label htmlFor="idOperacion">Operación</label>
            <select className="form-control" id="idOperacion" name="idOperacion" onChange={handleChange} defaultValue={formValues.idOperacion}>
              <option value="">Seleccioná una operación</option>
              {operaciones.map(op=>(
                <option value={op.idOperacion} key={op.idOperacion}>{op.operacion}</option>
              ))}
            </select>
          </Box>
          <Box>
            <label htmlFor="idCategoria">Tipo de propiedad</label>
            <select className="form-control" id="idCategoria" name="idCategoria" onChange={handleChange} defaultValue={formValues.idCategoria}>
              <option value="">Seleccioná un tipo de propiedad</option>
              {categorias.map(cat=>(
                <option value={cat.idCategoria} key={cat.idCategoria}>{cat.categoria}</option>
              ))}
            </select>
          </Box>
          <Box>
            <label htmlFor="idPartido">Partido</label>
            <select className="form-control" id="idPartido" name="idPartido" onChange={handleChange} defaultValue={formValues.idPartido}>
              <option value="">Seleccioná un partido</option>
              {partidos.map(par=>(
                par.partido === '-' ? null :
                <option value={par.idPartido} key={par.idPartido}>{par.partido}</option>
              ))}
            </select>
          </Box>
          <input type="submit" value="Aplicar filtro"/>
        </Wrapper>
        }
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
