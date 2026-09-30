import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className=" min-h-screen w-auto flex flex-col bg-[#0D1164] font-sans text-foreground">
      <Link to="/Home">Ir para a Home</Link>
      <div className=" flex flex-1 items-center justify-center  ">
        <form className="w-full max-w-sm  min-h-90 gap-5 bg-[#640D5F]/40 flex flex-col border-2 border-[#640D5F] justify-center items-center p-5 rounded-xl">
          <h1 className="text-center text-2xl font-bold  ">Login</h1>
          <div className="w-full flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Endereco@email.com"
              className="p-1"
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              className="p-1"
            />
          </div>
          <button className="bg-amber-600 p-2 w-30 rounded-sm">Entrar</button>
          <Link to="/Cadastro">Ir para o Cadastro</Link>
        </form>
      </div>
    </div>
  );
}
