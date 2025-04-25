import "./App.css";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Card from "./components/card";
import { useState } from "react";
import { GetDados } from "./services/apirequest"
import Loading from "./components/loading";
import UnknowCardUser from "./components/unknowCardUser";

function App() {
  const [loading, setloading] = useState(false)
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState<Record<string, string>>({});
  const [erro, setErro] = useState(false);

  const HandleSubmit = async () => {
    setloading(true)
    setDados({})
    setTimeout( async () => {
      try {
        const response = await GetDados(nome);
        setDados(response as unknown as Record<string, string>);
        setErro(false)
      } catch {
        setErro(true)
        setDados({});
      } finally {
        setloading(false)
      }
    }, 1000)
  };
  
  return (
    <div className="container-principal">
      <div className="container-main">
      <div className="title">
        <FaGithub size={60} />
        <h1>Perfil <span>GitHub</span></h1>
      </div>
      <div className="input-search">
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Digite o nome do usuário aqui"
        />
        <div className="input-icon">
          <button onClick={HandleSubmit}>
            <CiSearch size={35} color="white" />
          </button>
        </div>
      </div>
      {
        loading && <Loading /> 
      }

      {
        dados.name ? <Card link={dados.avatar_url} nome={dados.name} text={dados.bio}/> : null
      }
      
      {
        erro && <UnknowCardUser />
      }
    </div>
    </div>
  );
}

export default App;
