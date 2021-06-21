import CardCategoria from "./cardCategoria";
import { CategoriaContext } from "../../context/categorias/categoriasContext";
import { useContext,useEffect } from "react";
import Spinner from "../Spinner";

const Categorias = () => {
  const {data:categorias,loading,error,traerTodas} = useContext(CategoriaContext);
  useEffect(() => {
    if(!categorias.length){
      traerTodas();
    }
  }, []);
  return (
    loading || !categorias.length ? <div className="text-center"><Spinner/></div> :
    <div className="row">
      <h2 className="text-center mb-4">Tipo de propiedades</h2>
      {categorias.map(categoria=>(
        <div className="col-12 col-md-3 my-2" key={categoria.idCategoria}>
          <CardCategoria categoria={categoria.categoria} foto={categoria.foto}/>
        </div>
      ))}
      <style jsx>{`
        h2{color:var(--primary);text-transform:uppercase;font-weight:bold;}
      `}</style>
    </div>
  );
}

export default Categorias;
