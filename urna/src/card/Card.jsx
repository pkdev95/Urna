import "./card.css";




const candidatos = [
   
    {
        id: 1,
        nome:"Christyan",
        img: "https://scontent.fgig19-1.fna.fbcdn.net/v/t31.18172-8/26677815_1363337067105153_5535942573155050957_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEh-bP9iJwn_7z8TYkfL6ixCHbvlM6LhxUIdu-UzouHFV6lxGhkPWc7895KiMM5jaC0ZIJ4zTavcmxoCrlUJbEA&_nc_ohc=lthuGIGexzgQ7kNvgF6ym1O&_nc_zt=23&_nc_ht=scontent.fgig19-1.fna&_nc_gid=AP9WBsuM2twl_euiIwmsy1r&oh=00_AYCexpO_Grlim-8ax5xrvn5uHd1Coe0zKBmeTnJ4mtpy9Q&oe=673BF37B",
        profissao: "programador",
        framework: "React.js",
        numero: 44

    },

    {
        id:2,
        nome:"Patrick",
        img:"https://scontent.fgig19-1.fna.fbcdn.net/v/t39.30808-1/343820211_1397331501025558_7858092204189318366_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEsaqVP7PHDvPS9eHPtZnHhufbM9D2hCzm59sz0PaELOaUsLtQ4WqvON-TWDzXTLgj8t3xzNZ8Oba7B-x4hqMQ5&_nc_ohc=6tPDXeyJYmcQ7kNvgGzwPAE&_nc_zt=24&_nc_ht=scontent.fgig19-1.fna&_nc_gid=AgOGQ9WCgWVHQrl_r4ICraz&oh=00_AYAswf683IoIfx13DPRR9hpC_U355d5It_zm7YzIYe5-ew&oe=671A3F63",
        profissao: "programador",
        framework: "Vue",
        numero: 47

    },
    {
        id:3,
        nome:"Daniel",
        img: "https://media.licdn.com/dms/image/v2/C4D03AQEASa3l9Qg2rQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664239174780?e=1734566400&v=beta&t=KKoF2_VEU59A0VlA_qZL1dONTWfdV4Vl1ITt_OF6ACo",
        profissao: "programador",
        framework: "Angular",
        numero: 63

    }
]





export const SelectCandidato = ({num}) => {


    const votado = {

        44: <div className="principal">
       <div className="card">
       <img className="imgg" width={150} height={150} src={candidatos[0].img}/>
       <h3>{candidatos[0].nome}</h3>
       <span>profissão: {candidatos[0].profissao}</span>
       <p>Framework/biblioteca:{candidatos[0].framework}</p>
       </div>
       </div>,
       
       47: <div className="principal">
       <div className="card">
       <img className="imgg" width={150} height={150} src={candidatos[1].img}/>
       <h3>{candidatos[1].nome}</h3>
       <span>Profissão: {candidatos[1].profissao}</span>
       <p>Framework/biblioteca:{candidatos[1].framework}</p>
       </div>
       </div>,
       
       63: <div className="principal">
       <div className="card">
       <img className="imgg" width={150} height={150} src={candidatos[2].img}/>
       <h3>{candidatos[2].nome}</h3>
       <span>Profissão: {candidatos[2].profissao}</span>
       <p>Framework/biblioteca:{candidatos[2].framework}</p>
       </div>
       </div>
       
       }


       return votado[num] || "";

}





export const Card = ({ onChange }) => {
    const RealValor = () => onChange;

  
    const valor = RealValor();
    const numeroValido = [44, 47, 63].includes(valor);
  
    return (
      <div className="al">
        {valor ? (
          numeroValido ? (
            <SelectCandidato num={valor} />
          ) : (
            <div className="ini">Candidato inválido</div>
          )
        ) : (
          <div className="init">Digite o número do candidato...</div>
        )}
      </div>
    );
  };
  




