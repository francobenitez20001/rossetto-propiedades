import { useState,useEffect } from "react";
import styled from "styled-components";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from "sweetalert2";

const SlideX = (props) => {
    
    const [scroll, setScroll] = useState(null);
    const [pagination, setPagination] = useState({
        fullWidthValue:null,
        pageScrollValue:null,
        childValue:null,
        childrens:null,
        minScroll:null,
        maxScroll:null
    });

    useEffect(()=>{
        if(!props.pageLength || !props.classItem || !props.idSlider){
            return;
        }
        let contentSlide = document.querySelector(`#${props.idSlider}`);
        let childrens = contentSlide.children.length;

        let scrollWidth = contentSlide.scrollWidth;
        let childValue = scrollWidth/childrens;
        let pageScrollValue = childValue*props.pageLength;
        setPagination({
            ...pagination,
            fullWidthValue:scrollWidth,
            pageScrollValue,
            childValue:childValue,
            childrens,
            minScroll:pageScrollValue,
            maxScroll:pageScrollValue*props.pageLength
        });
        setScroll(pageScrollValue);
    },[]);


    const back = ()=>{
        const divs = document.querySelectorAll(`.${props.classItem}`);
        for (let index = 0; index < divs.length; index++) {
            const element = divs[index];
            if(parseInt(scroll)==parseInt((pagination.pageScrollValue*2))){
                element.style.transform = `translateX(0px)`;
            }else{
                element.style.transform = `translateX(-${pagination.pageScrollValue}px)`;
            }
        }
        if(scroll == (pagination.pageScrollValue*2)){
            setScroll(pagination.pageScrollValue);
            return;
        }
        setScroll(scroll - pagination.pageScrollValue);
    }

    const next = ()=>{
        const divs = document.querySelectorAll(`.${props.classItem}`);
        for (let index = 0; index < divs.length; index++) {
            const element = divs[index];
            element.style.transform = `translateX(-${scroll}px)`;
        }
        setScroll(scroll + pagination.pageScrollValue);
    }

    if(!props.pageLength || !props.classItem || !props.idSlider){
        Swal.fire('Error slider','Los parametros pageLength, classItem y idSlider son necesarios.','warning');
        return null;
    }

    return (
        <Slide>
            <Wrapper id={props.idSlider}>
                {props.children}
            </Wrapper>
            <Flechas>
                <FontAwesomeIcon icon={faArrowLeft} onClick={()=>back()} style={{visibility:(parseInt(scroll) == parseInt(pagination.minScroll)) ? 'hidden' : 'visible'}}/>
                <FontAwesomeIcon icon={faArrowRight} onClick={()=>next()} style={{visibility:(parseInt(scroll) == parseInt(pagination.maxScroll)) ? 'hidden' : 'visible'}}/>
            </Flechas>
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
    >svg{
        width: 50px;
        background-color: var(--primary);
        color: var(--white);
        padding: 15px;
        border-radius: 25px;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    }
`;

const Wrapper = styled.div`
    overflow-x: hidden;
    display: flex;
    padding: 20px 5px;
    position: relative;
    width: 100%;
    &:first-child{
        margin:0px 0px;
    }
    >div{
        transition: all .5s ease;
        margin:0px 20px;
    }
`;
 
export default SlideX;