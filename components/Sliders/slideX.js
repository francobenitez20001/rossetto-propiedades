import { useState,useEffect } from "react";
import styled from "styled-components";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from "sweetalert2";

const SlideX = (props) => {

    const [pagination, setPagination] = useState({
        fullWidthValue:null,
        pageScrollValue:null,
        pages:0,
        activePage:1,
        scrollNextPage:0,
        scrollPreviousPage:0
    });

    useEffect(()=>{
        if(!props.pages || !props.classItem || !props.idSlider){
            return;
        }
        let contentSlide = document.querySelector(`#${props.idSlider}`);
        let scrollWidth = contentSlide.scrollWidth;
        let paginas = props.pages;
        let pageScrollValue = scrollWidth/paginas;
        setPagination({
            ...pagination,
            fullWidthValue:scrollWidth,
            pageScrollValue,
            pages:paginas,
            pageScrollValue,
            scrollNextPage:pageScrollValue,
            activePage:1
        });
    },[]);

    const back = ()=>{
      const divs = document.querySelectorAll(`.${props.classItem}`);
      for (let index = 0; index < divs.length; index++) {
        const element = divs[index];
        element.style.transform = `translateX(-${pagination.scrollPreviousPage}px)`;
      }
      setPagination({
        ...pagination,
        activePage:pagination.activePage - 1,
        scrollNextPage:pagination.pageScrollValue * (pagination.activePage - 1),
        scrollPreviousPage:(pagination.activePage<=2) ? 0 : pagination.scrollPreviousPage - pagination.pageScrollValue
      })
    }

    const next = ()=>{
      const divs = document.querySelectorAll(`.${props.classItem}`);
      for (let index = 0; index < divs.length; index++) {
        const element = divs[index];
        element.style.transform = `translateX(-${pagination.scrollNextPage}px)`;
      }
      setPagination({
        ...pagination,
        activePage:pagination.activePage + 1,
        scrollNextPage:pagination.pageScrollValue * (pagination.activePage +  1),
        scrollPreviousPage:((pagination.activePage + 1) > 2) ? pagination.scrollPreviousPage + pagination.pageScrollValue : 0
      })
    }

    if(!props.pages || !props.classItem || !props.idSlider){
        Swal.fire('Error slider','Los parametros pageLength, classItem y idSlider son necesarios.','warning');
        return null;
    }

    return (
        <Slide>
            <Wrapper id={props.idSlider}>
                {props.children}
              <Flechas>
                  <FontAwesomeIcon icon={faArrowLeft} onClick={back} style={{visibility:pagination.activePage==1 ? 'hidden' : 'visible'}}/>
                  <FontAwesomeIcon icon={faArrowRight} onClick={next} style={{visibility:pagination.activePage == props.pages ? 'hidden' : 'visible'}}/>
              </Flechas>
            </Wrapper>
            <div>
              <span>asd</span>
            </div>
        </Slide>
    );
}

const Slide = styled.div`
    position:relative;
    width:100%;
`;

const Flechas = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;
    >svg{
        @media(max-width:768px){
            display: none;
        }
        position: relative;
        cursor: pointer;
        width: 35px;
        background-color: var(--primary);
        color: var(--white);
        padding: 8px;
        border-radius: 50%;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    }
`;

const Wrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    padding: 20px 5px;
    position: relative;
    width: 100%;
    >div{
        transition: all .5s ease;
    }

    @media(max-width:768px){
        overflow-x: auto;
        &::-webkit-scrollbar {
            width: 3px;     /* Tamaño del scroll en vertical */
        }

        &::-webkit-scrollbar-thumb {
            display:block;
            background: var(--primary);
            border-radius: 4px;
        }
    }
`;

export default SlideX;
