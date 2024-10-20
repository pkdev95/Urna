import "./apurador.css";


export const Apurador = ({counts}) => {
    return (
            <div className="header">
               <span>Resultado parcial:<span className="rst">Christyan: {counts.count1}</span> <span className="rst">Patrick: {counts.count3}</span> <span className="rst">Daniel: {counts.count2}</span></span>
            </div>
    )


}