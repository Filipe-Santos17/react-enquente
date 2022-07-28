import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function RespEnq() {

  const { id } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8081/api/${id}`)
      .then(resp => resp.json())
      .then(dados => setData(dados))
      .catch(error => console.log(`Erro: ${error}`))
  }, [id])

  //console.log(data)

  return (
    <div>
      <h3 className="Titulo_Enquente">{data.titulo}</h3>

      <form className="Resposta_Enquentes">
        <div>
          <input type="checkbox" id={data.op_one} value={1} />
          <label htmlFor={data.op_one}>{data.op_one}</label>
        </div>

        <div>
          <input type="checkbox" id={data.op_two} value={2} />
          <label htmlFor={data.op_two}>{data.op_two}</label>
        </div>

        <div>
          <input type="checkbox" id={data.op_three} value={3} />
          <label htmlFor={data.op_three}>{data.op_three}</label>
        </div>

        <div>
          <input type="checkbox" id={data.op_four} value={4} />
          <label htmlFor={data.op_four}>{data.op_four}</label>
        </div>
      </form>
      <button className="btn Btn_Enquente">Responder</button>
    </div>
  )
}
