import styled from "styled-components";

const { faInstagram, faFacebook, faTwitter } = require("@fortawesome/free-brands-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const Footer = () => {
    return (
        <footer>
            <Container className="container">
                <Logo src="./logo.jpg"/>
                <DataContacto>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <span>&copy; {new Date().getFullYear()} Todos los derechos reservados</span>
                </DataContacto>
                <p>Power by Franco Benitez Solutions</p>
            </Container>
        </footer>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    >p{
        margin:0;
        color: var(--secondary);
        font-weight: 600;
        font-size: 15px;
    }
    @media(max-width:768px){
        flex-direction: column;
    }
`;

const Logo = styled.img`
    width: 200px;
    @media(max-width:768px){
        width: 250px;
    }
`;

const DataContacto = styled.div`
    display: flex;
    >svg{
        display: block;
        width: 18px;
        color: var(--primary);
        margin: 0px 10px;
    }
    >span{
        font-size: 13px;
        font-weight: bold;
        color: var(--secondary);
    }
`;
 
export default Footer;