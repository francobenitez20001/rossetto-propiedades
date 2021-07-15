import styled from "styled-components";
import { OperacionesContext } from "../../context/operaciones/operacionesContext";
import { CategoriaContext } from "../../context/categorias/categoriasContext";
import { PartidosContext } from "../../context/partidos/partidosContext";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useContext, useEffect, useState } from "react";
import Spinner from '../Spinner';
import Swal from "sweetalert2";
import Router from 'next/router';

const FormBusqueda = (props) => {
  const {data:operaciones,error:errorOperaciones,traerTodas:traerOperaciones} = useContext(OperacionesContext);
  const {data:categorias,error:errorCategorias,traerTodas:traerCategorias} = useContext(CategoriaContext);
  const {data:partidos,error:errorPartidos,traerTodos:traerPartidos} = useContext(PartidosContext);
  const {filtrando,filtros,loading,error,filtrarInmuebles,aplicarFiltros} = useContext(InmuebleContext);
  const [formValues, setFormValues] = useState({
    idOperacion:'',
    idCategoria:'',
    idPartido:''
  });
  const [showForm, setShowForm] = useState(false);
  const [fondoImagenForm, setFondoImagenForm] = useState('');

  useEffect(() => {
    getResources();
    setShowForm(true);
    if(!props.sinFondo && document){
      setFondoImagenForm(`${document.location.origin}/form.jpg`);
    }
  }, []);

  useEffect(() => {
    if(filtrando && (formValues.idOperacion!= "" || formValues.idCategoria!="" || formValues.idPartido!="")){
      if(filtros.idOperacion || filtros.idCategoria || filtros.idPartido){
        filtrarInmuebles();
      }
    }
  }, [filtrando])

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
    Router.push('/propiedades')
  }

  if(errorOperaciones || errorCategorias || errorPartidos){
    console.log(errorOperaciones,errorCategorias,errorPartidos);
    Swal.fire('Error','Ha ocurrido un error, vuelva mas tarde', 'warning');
  }
  return (
      <WrapperForm background={props.sinFondo ? '' : fondoImagenForm} className={showForm ? 'show' : ''}>
          <div className="container">
              <form onSubmit={handleSubmit}>
                {!operaciones.length || !categorias.length || !partidos.length ? <Spinner/> :
                <div className="row">
                    <Box className="col-12 col-md-3 my-2">
                        <select className="form-control" name="idOperacion" defaultValue={formValues.idOperacion} onChange={handleChange}>
                            <option value="">Seleccioná una operación</option>
                            {operaciones.map(op=>(
                              <option value={op.idOperacion} key={op.idOperacion}>{op.operacion}</option>
                            ))}
                        </select>
                    </Box>
                    <Box className="col-12 col-md-3 my-2">
                        <select className="form-control" name="idCategoria" defaultValue={formValues.idCategoria} onChange={handleChange}>
                            <option value="">Seleccioná una categoria</option>
                            {categorias.map(cat=>(
                              <option value={cat.idCategoria} key={cat.idCategoria}>{cat.categoria}</option>
                            ))}
                        </select>
                    </Box>
                    <Box className="col-12 col-md-3 my-2">
                        <select className="form-control" name="idPartido" defaultValue={formValues.idPartido} onChange={handleChange}>
                            <option value="">Seleccioná un partido</option>
                            {partidos.map(par=>(
                              par.partido === '-' ? null :
                              <option value={par.idPartido} key={par.idPartido}>{par.partido}</option>
                            ))}
                        </select>
                    </Box>
                    <Box className="col-12 col-md-3 my-2">
                        <Submit type="submit" value="Buscar propiedades"/>
                    </Box>
                </div>
                }
              </form>
          </div>
      </WrapperForm>
  );
}

const WrapperForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${props=>props.background ? props.background : ''});
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px 0px;
    position: relative;
    left: -1000%;
    transition: all .7s ease;
    &.show{
      left: 0;
    }
`;

const Box = styled.div`
    >label{
        position: absolute;
        top: -30px;
        color: var(--secondary);
    }
    >select{
        position: relative;
        top:1px;
        width: 100%;
        font-size: 17px;
        box-shadow: none;
        padding: .5rem .75rem;
        border: 1px solid #e0ecf5;
        line-height: 1.25;
        color: var(--secondary);
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        touch-action: manipulation;
        background: #f2f3f2;
        border-color: #f2f3f5;
        border-radius: 4px;
    }
    >select{
        height: 56px;
    }
`;

const Submit = styled.input`
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    padding:5px 30px;
    border-radius:15px;
    font-size: 15px;
    height: 56px;
    font-weight: 600;
    background-color: var(--primary);
    color: var(--white);
    box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    transition: all .5s ease;
    &:hover{
        background-color: var(--white);
        color: var(--primary);
    }
`;

export default FormBusqueda;
