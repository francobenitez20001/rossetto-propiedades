import { OPERACIONES_ERROR, OPERACIONES_LOADING, OPERACIONES_TRAER_TODAS } from "../../types/index";

const operacionesReducer = (state,action)=>{
  switch (action.type) {
    case OPERACIONES_LOADING:
      return {...state,error:null,loading:true};
    case OPERACIONES_ERROR:
      return {...state,loading:false,error:action.payload}
    case OPERACIONES_TRAER_TODAS:
      return {...state,loading:false,error:null,data:action.payload}
    default:
      return state;
  }
}


export default operacionesReducer;
