import styled from "styled-components";

const FormBusqueda = () => {
    return (
        <WrapperForm>
            <div className="container">
                <form onSubmit={e=>e.preventDefault()}>
                    <div className="row">
                        <div className="col-12 col-md-3 my-2">
                            <select className="form-control">
                                <option value="">Selecciona una categoria</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-3 my-2">
                            <select className="form-control">
                                <option value="">Selecciona una categoria</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-3 my-2">
                            <select className="form-control">
                                <option value="">Selecciona una categoria</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-3 my-2">
                            <Submit type="submit" value="Buscar propiedades"/>
                        </div>
                    </div>
                </form>
            </div>
        </WrapperForm>
    );
}

const WrapperForm = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('./form.jpg');
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