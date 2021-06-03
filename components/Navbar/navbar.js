import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {Nav,ContenedorLogo,Botonera,List,Item, ItemActive} from './styles';
import {useRouter} from 'next/router';

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

    return (
        <Nav>
            <header className="container">
                <ContenedorLogo>
                    <img src={`${process.env.NEXT_PUBLIC_URL}/logo.jpg`} alt="Rosseto propiedades" className="img-fluid"/>
                </ContenedorLogo>
                <Botonera className={showMenuMobile ? 'show' : ''}>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={()=>setShowMenuMobile(!showMenuMobile)}/>
                    <List>
                        <Item>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            {asPath == '/' ? <ItemActive></ItemActive> : null}
                        </Item>
                        <Item>
                            <Link href="/nosotros">
                                <a>Quiénes somos</a>
                            </Link>
                            {asPath == '/nosotros' ? <ItemActive></ItemActive> : null}
                        </Item>
                        <Item>
                            <Link href="/propiedades">
                                <a>Propiedades</a>
                            </Link>
                            {asPath == '/propiedades' ? <ItemActive></ItemActive> : null}
                        </Item>
                        <Item>
                            <Link href="/contacto">
                                <a>Contacto</a>
                            </Link>
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
