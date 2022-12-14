import { Link } from "react-router-dom";

import Illustration from "../assets/images/Illustration.svg";
import Logo from "../assets/images/Logo.svg";

import '../styles/auth.scss';

import { Button } from "../components/Button";
import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {

  return (
    <div id="page-auth">
      <aside>
        <img src={Illustration} alt="Imagem ilustrando perguntas e respostas" />
        <strong> Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={Logo} alt="Imagem da logo - letmeask" />
          
          <h2> Criar uma nova sala </h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit"> Criar sala </Button>
          </form>
          
          <p> 
            Quer entrar em uma sala existente?  
            <Link to="/"> Clique aqui </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
