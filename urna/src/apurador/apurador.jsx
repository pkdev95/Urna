import "./apurador.css";


export const Apurador = ({counts}) => {
    return (
            <div className="header">
                <h3 className="rst">Resultado parcial</h3>
                <span className="rst">Christyan: {counts.count1}</span> <span className="rst">Patrick: {counts.count3}</span> <span className="rst">Daniel: {counts.count2}</span>
            </div>
    )


}