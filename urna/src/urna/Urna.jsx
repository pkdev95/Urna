import "./urna.css";
import { useState } from "react";
import Swal from 'sweetalert2'
import { Card } from "../card/Card";





export const Urna = () => {

    const [numS, setNumS] = useState([]);
    const [countP, setCountP] = useState(0);
    const [countC, setCountC] = useState(0);
    const [countD, setCountD] = useState(0);




    const handleClick = (numero) => {
        const setTime = (time) => {
            setTimeout(() => {
                setNumS([]);
            }, time)
        }
        if (numS.length < 2) {
            setNumS((prevNums) => [...prevNums, numero]);
        } else {
            Swal.fire("Por favor, insira somente 2 dígitos.");
            setTime(2000);
        }


    };


    const handleChange = (num) => {

        const nume = Number(num.join(""));
        return nume;

    }

    const handleClickConfir = (numero) => {


        switch (numero) {

            case 44:
                Swal.fire({
                    title: "Voto registrado com sucesso!",
                    icon: "success"
                });
                setCountC((prevCount) => prevCount + 1);
                setNumS([]);
                break;
            case 47:
                Swal.fire({
                    title: "Voto registrado com sucesso!",
                    icon: "success"
                });
                setCountP((prevCount) => prevCount + 1);
                setNumS([]);
                break;
            case 63:
                Swal.fire({
                    title: "Voto registrado com sucesso!",
                    icon: "success"
                });
                setCountD((prevCount) => prevCount + 1);
                setNumS([]);
                break;
            default:
                Swal.fire("candidato inválido");
                setNumS([]);

        }


    };

    const handleClickCancel = () => {

        setNumS([]);


    };


    const numeros = [{

        valor: 1,
        onClick: handleClick
    },
    {
        valor: 2,
        onClick: handleClick

    },

    {
        valor: 3,
        onClick: handleClick
    },

    {
        valor: 4,
        onClick: handleClick
    },

    {
        valor: 5,
        onClick: handleClick

    },

    {
        valor: 6,
        onClick: handleClick
    },

    {
        valor: 7,
        onClick: handleClick
    },

    {
        valor: 8,
        onClick: handleClick
    },

    {
        valor: 9,
        onClick: handleClick
    },

    {
        valor: "confirma",
        onClick: handleClickConfir,
        style: {
            backgroundColor: "green"
        }
    }
        ,

    {
        valor: 0,
        onClick: handleClick
    },

    {
        nome: "cancelar",
        valor: "cancelar",
        onClick: handleClickCancel,
        style: {
            backgroundColor: "red"
        }
    }


    ];

    return (<>
        <div className="princ">
            <div className="urna">
                <div className="displayUrna">
                    <div className="dsp">
                        <Card className="crd" onChange={handleChange(numS)} /><br />
                        <div className="display">
                            {numS.map((num, index) => (
                                <div key={index} className="one"><div className="numb">{num}</div></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="tecladoUrna">
                    {numeros.map((val, index) => (
                        <button onClick={val.valor === "confirma" ? () => val.onClick(handleChange(numS)) : () => val.onClick(val.valor)}
                            value={val.valor} style={val.style} key={index}>{val.valor}</button>
                    ))}
                </div>
            </div>
        </div>
    </>
    )



}
