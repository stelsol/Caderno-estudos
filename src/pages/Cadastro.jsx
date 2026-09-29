import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Link to="/Home">Ir para a Home</Link>
      <div className="bg-zinc-500 flex m-auto">
        Aqui sera o formulario Cadastro
      </div>
      <Link to="/Login">Ir para o Login</Link>
    </div>
  );
}
