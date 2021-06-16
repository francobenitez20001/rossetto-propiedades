import styled from "styled-components";
import { OperacionesContext } from "../../context/operaciones/operacionesContext";
import { CategoriaContext } from "../../context/categorias/categoriasContext";
import { PartidosContext } from "../../context/partidos/partidosContext";
import { useContext, useEffect, useState } from "react";
import Spinner from '../Spinner';
import Swal from "sweetalert2";

const FormBusqueda = () => {
  const {data:operaciones,error:errorOperaciones,traerTodas:traerOperaciones} = useContext(OperacionesContext);
  const {data:categorias,error:errorCategorias,traerTodas:traerCategorias} = useContext(CategoriaContext);
  const {data:partidos,error:errorPartidos,traerTodos:traerPartidos} = useContext(PartidosContext);
  const [formValues, setFormValues] = useState({
    idOperacion:'',
    idCategoria:'',
    idPartido:''
  });

  useEffect(() => {
    getResources();
  }, []);

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
    console.log(formValues);
  }

  if(errorOperaciones || errorCategorias || errorPartidos){
    console.log(errorOperaciones,errorCategorias,errorPartidos);
    Swal.fire('Error','Ha ocurrido un error, vuelva mas tarde', 'warning');
  }
  return (
      <WrapperForm background={`${process.env.NEXT_PUBLIC_URL}/form.jpg`}>
          <div className="container">
              <form onSubmit={handleSubmit}>
                {!operaciones.length || !categorias.length || !partidos.length ? <Spinner/> :
                <div className="row">
                    <div className="col-12 col-md-3 my-2">
                        <select className="form-control" name="idOperacion" defaultValue={formValues.idOperacion} onChange={handleChange}>
                            <option value="">Seleccioná una operación</option>
                            {operaciones.map(op=>(
                              <option value={op.idOperacion} key={op.idOperacion}>{op.operacion}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-md-3 my-2">
                        <select className="form-control" name="idCategoria" defaultValue={formValues.idCategoria} onChange={handleChange}>
                            <option value="">Seleccioná una categoria</option>
                            {categorias.map(cat=>(
                              <option value={cat.idCategoria} key={cat.idCategoria}>{cat.categoria}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-md-3 my-2">
                        <select className="form-control" name="idPartido" defaultValue={formValues.idPartido} onChange={handleChange}>
                            <option value="">Seleccioná un partido</option>
                            {partidos.map(par=>(
                              <option value={par.idPartido} key={par.idPartido}>{par.partido}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-md-3 my-2">
                        <Submit type="submit" value="Buscar propiedades"/>
                    </div>
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
`;

const Submit = styled.input`
    float: right;
    display: flex;
    align-items: center;
    border:none;
    padding:5px 30px;
    border-radius:15px;
    font-size: 15px;
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
