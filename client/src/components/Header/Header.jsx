import { Link } from "react-router-dom"
import "./Header.scss"

export default function Header() {
  return (
    <header>
        <h1 className="titulo">EnquentesReact</h1>

        <Link to="/post">
            <button className="btn btn-green">Criar Nova Enquente</button>
        </Link>
    </header>
  )
}
