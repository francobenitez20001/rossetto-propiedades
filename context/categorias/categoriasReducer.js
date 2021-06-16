import { CATEGORIAS_ERROR, CATEGORIAS_LOADING, CATEGORIAS_TRAER_TODAS } from "../../types/index";

const categoriasReducer = (state,action)=>{
  switch (action.type) {
    case CATEGORIAS_LOADING:
      return {...state,error:null,loading:true};
    case CATEGORIAS_ERROR:
      return {...state,loading:false,error:action.payload}
    case CATEGORIAS_TRAER_TODAS:
      return {...state,loading:false,error:null,data:action.payload}
    default:
      return state;
  }
}


export default categoriasReducer;
