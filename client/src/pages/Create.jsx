import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

export default function CreateEnq() {

  let navigate = useNavigate()

  const [titulo, setTitulo] = useState("")
  const [op_one, setOp_one] = useState("")
  const [op_two, setOp_two] = useState("")
  const [op_three, setOp_three] = useState("")
  const [op_four, setOp_four] = useState("")
  const [start_date, setDataStart] = useState("")//{varOne:new Date()}
  const [finish_date, setDataFinish] = useState("")//{varOne:new Date()}

  const PostEnq = e => {
    e.preventDefault()

    const rota = `http://localhost:8081/api/post`

    if (titulo && op_one && op_two && op_three && op_four && start_date && finish_date) {
      axios.post(rota, { titulo, op_one, op_two, op_three, op_four, start_date , finish_date }) //data
        .then(() => {
          toast.success("Enquente criada com sucesso")
          navigate("/")
        })
        .catch(error => {
          console.log(`Erro indentificado: ${error}`)
          return toast.error("Por favor tente novamente")
        })
    } else {
      toast.warn("Por favor preencha todos os campos")
    }
  }

  return (
    <Form
      title="Criar Enquente"
      titulo={titulo}
      setTitulo={setTitulo}
      option_one={op_one}
      setOptionOne={setOp_one}
      option_two={op_two}
      setOptionTwo={setOp_two}
      option_three={op_three}
      setOptionThree={setOp_three}
      option_four={op_four}
      setOptionFour={setOp_four}
      dataS={start_date}
      setDataS={setDataStart}
      dataF={finish_date}
      setDataF={setDataFinish}
      Handle={PostEnq}
      btnName={"Criar Enquente"}
    />
  )
}