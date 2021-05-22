import CardCategoria from "./cardCategoria";

const Categorias = () => {
    const cats = [
        1,2,3,4
    ];

    return (
        <div className="row">
            <h2 className="text-center mb-4">Propiedades</h2>
            {cats.map(categoria=>(
                <div className="col-12 col-md-3 my-2" key={categoria}>
                    <CardCategoria categoria="Quinta" descripcion="Hay una franquicia RE/MAX para vos también. Enterate cómo podés empezar."/>
                </div>
            ))}
            <style jsx>{`
                h2{color:var(--primary);text-transform:uppercase;font-weight:bold;}    
            `}</style>
        </div>
    );
}
 
export default Categorias;