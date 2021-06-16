import { PARTIDOS_ERROR, PARTIDOS_LOADING, PARTIDOS_TRAER_TODOS } from "../../types/index";

const categoriasReducer = (state,action)=>{
  switch (action.type) {
    case PARTIDOS_LOADING:
      return {...state,error:null,loading:true};
    case PARTIDOS_ERROR:
      return {...state,loading:false,error:action.payload}
    case PARTIDOS_TRAER_TODOS:
      return {...state,loading:false,error:null,data:action.payload}
    default:
      return state;
  }
}


export default categoriasReducer;
