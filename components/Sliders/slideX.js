import { useState,useEffect } from "react";
import styled from "styled-components";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from "sweetalert2";
import { doc } from "prettier";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

    useEffect(() => {
      if(props.indicators && pagination.pages>0){
        actualizarIndicadores();
      }
    }, [pagination])

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

    const actualizarIndicadores = ()=>{
      const contentIndicadores = document.getElementById(`${props.idIndicadores}`);
      let divs = [...contentIndicadores.children];
      divs.forEach(indicador=>indicador.classList.remove('active'));
      contentIndicadores.children[pagination.activePage - 1].classList.add('active');
    }

    if(!props.pages || !props.classItem || !props.idSlider){
        Swal.fire('Error slider','Los parametros pageLength, classItem y idSlider son necesarios.','warning');
        return null;
    }

    return (
        <Slide>
            <Wrapper id={props.idSlider} sliderMobile={props.sliderMobile}>
                {props.children}
              <Flechas sliderMobile={props.sliderMobile}>
                  <FontAwesomeIcon icon={faArrowLeft} onClick={back} style={{visibility:pagination.activePage==1 ? 'hidden' : 'visible'}}/>
                  <FontAwesomeIcon icon={faArrowRight} onClick={next} style={{visibility:pagination.activePage == props.pages ? 'hidden' : 'visible'}}/>
              </Flechas>
            </Wrapper>
            {props.indicators ?
              <Indicadores id={props.idIndicadores}>
                {props.indicators.map(img=>(
                  <div className="col-2" key={img.idImagen}>
                    <LazyLoadImage src={img.nombre} width="100%" height="100%" style={{filter:'brightness(30%)'}}/>
                  </div>
                ))}
              </Indicadores>
            : null}
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
          display: ${props=>props.sliderMobile ? 'block' : 'none'};
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
        padding: 20px 5px 20px 0px;
        &::-webkit-scrollbar {
            width: 3px;     /* Tamaño del scroll en vertical */
        }

        &::-webkit-scrollbar-thumb {
            display:${props=>props.sliderMobile ? 'none' : 'block'};
            background: var(--primary);
            border-radius: 4px;
        }
    }
`;

const Indicadores = styled.div`
  overflow-x: auto;
  display: flex;
  padding: 0px 0px 20px 10px;
  width: 100%;
  >div{
    &.active{
      filter: brightness(240%); // Más oscura
      border:2px solid var(--primary);
    }
    margin:0px 7px;
    height: 72px;
  }
  >div>img{
    filter: brightness(30%); // Más oscura
    height: 100%;
    width: 100%;
  }
  &::-webkit-scrollbar {
      width: 3px;     /* Tamaño del scroll en vertical */
  }

  &::-webkit-scrollbar-thumb {
      display:block;
      background: var(--primary);
      border-radius: 10px;
  }
  @media(max-width:768px){
    padding: 0px 0px 20px 0px;
  }
`;

export default SlideX;
