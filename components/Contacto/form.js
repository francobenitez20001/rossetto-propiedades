import { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Spinner from '../Spinner';
import {API} from '../../config/index';

const FormContacto = (props) => {
  const [formValues, setFormValues] = useState({
    nombre:'',
    apellido:'',
    email:'',
    telefono:'',
    mensaje:'',
    propiedad:null
  });
  const [loading, setLoading] = useState(false);

  //setear el id de la propiedad si es en propidad en detalle.
  useEffect(() => {
    if(props.propiedad){
      setFormValues({
        ...formValues,
        propiedad:props.propiedad
      })
    }
  }, [])

  const handleChange = e=>{
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async e=>{
    e.preventDefault();
    setLoading(true);
    let validacion = validar();
    if(typeof validacion == 'object'){
      setLoading(false);
      return Swal.fire(
        'Atención',
        `Completa el campo ${validacion.key}`,
        'error'
      );
    }
    const config = {
      headers : {'Content-Type':'application/json'},
      body:JSON.stringify(formValues),
      method:'POST'
    };
    const req = await fetch(`${API}/contacto/sendMail`,config);
    setLoading(false);
    if(req.status == 200){
      return Swal.fire('Enviado','Se ha enviado la consulta con éxito','success').then(()=>{
        setFormValues({
          nombre:'',
          apellido:'',
          email:'',
          telefono:'',
          mensaje:'',
          propiedad:null
        })
      });
    }
    Swal.fire(
      'Atención',
      `Ha ocurrido un error, intentalo más tarde`,
      'error'
    );
  }

  const validar = ()=>{
    for (const key in formValues) {
      if (Object.hasOwnProperty.call(formValues, key)) {
        if(key != 'propiedad'){
          const element = formValues[key];
          if(element == ""){
            return {key}
          }
        }
      }
    }
    return true;
  }

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <Fila>
        <Box className="mrTrue">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={formValues.nombre} onChange={handleChange}/>
        </Box>
        <Box>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" value={formValues.apellido} onChange={handleChange}/>
        </Box>
      </Fila>
      <Fila>
        <Box>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange}/>
        </Box>
      </Fila>
      <Fila>
        <Box>
          <label htmlFor="telefono">Teléfono</label>
          <input type="number" id="telefono" name="telefono" value={formValues.telefono} onChange={handleChange}/>
        </Box>
      </Fila>
      <Fila>
        <Box>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows={10} value={formValues.mensaje} onChange={handleChange}></textarea>
        </Box>
      </Fila>
      {loading ? <div className="text-center"><Spinner/></div> :  <Boton type="submit" value="Enviar consulta"/> }
    </form>
  );
}

const Fila = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px 0px;
    padding:20px 0px 20px 10px;
    @media(max-width:768px){
      padding:20px 0px 20px 0px;
    }
`;

const Box = styled.div`
    position: relative;
    width: 100%;
    &.mrTrue{margin-right:20px;}
    >label{
        position: absolute;
        top: -30px;
        color: var(--secondary);
    }
    >input,textarea{
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
    >input{
        height: 56px;
    }
`;

const Boton = styled.input`
  margin-left: 10px;
  width: 100%;
  border:none;
  padding:9px 13px;
  border-radius:10px;
  background-color:var(--primary);
  color:var(--white);
  font-family:'Open Sans',sans-serif;
  font-size:12px;
  font-weight:bold;
  box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  @media(max-width:768px){
    margin-left: 0px;
  }
`;

export default FormContacto;
