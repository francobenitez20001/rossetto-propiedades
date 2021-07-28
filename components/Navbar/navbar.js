import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {Nav,ContenedorLogo,Botonera,List,Item, ItemActive} from './styles';
import {useRouter} from 'next/router';
import { URL } from '../../config';

const Navbar = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const router = useRouter();
    const {asPath} = router;

    useEffect(() => {
        if(showMenuMobile){
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        }else{
            if(document.getElementsByTagName('body')[0].style.overflowY == 'hidden'){
                document.getElementsByTagName('body')[0].style.overflowY = 'auto';
            }
        }
    }, [showMenuMobile]);

    const navegar = link=>{
      router.push(`/${link}`);
      setShowMenuMobile(false);
    }

    return (
        <Nav>
            <header className="container">
                <ContenedorLogo>
                    <img src={`${URL}/logo.jpg`} alt="Rosseto propiedades" className="img-fluid"/>
                </ContenedorLogo>
                <Botonera className={showMenuMobile ? 'show' : ''}>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={()=>setShowMenuMobile(!showMenuMobile)}/>
                    <List>
                        <Item onClick={()=>navegar('')}>
                            <span>Home</span>
                            {asPath == '/' ? <ItemActive></ItemActive> : null}
                        </Item>
                        <Item onClick={()=>navegar('')} className="d-none">
                            <span>Quiénes somos</span>
                            {asPath == '/nosotros' ? <ItemActive></ItemActive> : null}
                        </Item>
                        <Item onClick={()=>navegar('propiedades')}>
                            <span>Propiedades</span>
                            {asPath == '/propiedades' ? <ItemActive></ItemActive> : null}
                        </Item>
                        <Item onClick={()=>navegar('contacto')}>
                            <span>Contacto</span>
                            {asPath == '/contacto' ? <ItemActive></ItemActive> : null}
                        </Item>
                    </List>
                </Botonera>
                <FontAwesomeIcon icon={faBars} onClick={()=>setShowMenuMobile(!showMenuMobile)}/>
            </header>
        </Nav>
    );
}

export default Navbar;
