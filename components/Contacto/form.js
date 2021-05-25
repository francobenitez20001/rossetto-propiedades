import styled from "styled-components";

const FormContacto = () => {
    return (
        <form onSubmit={e=>e.preventDefault()} className="mb-5">
            <Fila>
                <Box className="mrTrue">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre"/>
                </Box>
                <Box>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido"/>
                </Box>
            </Fila>
            <Fila>
                <Box>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </Box>
            </Fila>
            <Fila>
                <Box>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="number" id="telefono" name="telefono"/>
                </Box>
            </Fila>
            <Fila>
                <Box>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows={10}></textarea>
                </Box>
            </Fila>
            <Boton type="submit" value="Enviar consulta"/>
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
