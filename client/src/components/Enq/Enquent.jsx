import axios from "axios"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function Enquent({title,id,create,finish}) {
  
    function refresh(){
        window.location.reload(true)
    }

    async function deleteEnq(){
        await axios.delete(`http://localhost:8081/api/delete/${id}`)
        .then(() => {
            toast.success("Enquente deletada com sucesso")
            setTimeout(() => {
                refresh()
            }, 1500)
        })
        .catch(error => {
            toast.error("Não foi possivel deletar a Enquente")
            console.log(`Erro: ${error}`)
        })
    }

    return (
        <div className="card">

            <h3 className="card-title">{title}</h3>

            <div>
                <p>Data de Criação: {create}</p>
                <p>Data de Fechamento: {finish}</p>
            </div>

            <hgroup className="btns">
                <Link to={`/res/${id}`}>
                    <button className="btn btn-blue">Responder</button>
                </Link>
                <Link to={`/put/${id}`}>
                    <button className="btn btn-gray">Editar</button>
                </Link>
                <button className="btn btn-red" onClick={deleteEnq}>Apagar</button>
            </hgroup>
        </div>
    )
}
