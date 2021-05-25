import CardPropiedad from "./CardPropiedad";

const Propiedades = () => {
  const p = [1,1,1,1,1,1,1,1,1,1];
  return (
    <div className="row">
      {p.map((prop,key)=>(
        <div key={key} className="my-3 col-12 col-md-4">
          <CardPropiedad fullWidth="true"/>
        </div>
      ))}
    </div>
  );
}

export default Propiedades;
