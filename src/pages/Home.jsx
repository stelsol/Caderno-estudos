import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-amber-700 flex-col flex gap-2">
      <h1>Home</h1>
      <Link to="/Login">Ir para o Login</Link>
      <Link to="/Cadastro">Ir para o Cadastro</Link>
    </div>
  );
}
