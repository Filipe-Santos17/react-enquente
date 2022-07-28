import { useEffect } from 'react'

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import { toast } from 'react-toastify';

export default function CreateEnq() {

  const { id } = useParams()

  let navigate = useNavigate()

  const addPost = data => axios.put(`http://localhost:8081/api/put/${id}`, data)
    .then(() => {
      toast.success("Alterado com sucesso")
      navigate("/")
    })
    .catch(error => {
      toast.error("Por favor, Tente de novo")
      console.log(`Erro: ${error}`)
    })

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    axios.get(`http://localhost:8081/api/${id}`)
      .then(response => {
        reset(response.data)
      })
  }, [id])

  return (
    <div className="back">
      <form className="form" onSubmit={handleSubmit(addPost)}>
        <h2>Alterar Enquente</h2>

        <div className="inputs">

          <div className="fields" >
            <label htmlFor='Titulo'>Título</label>
            <input type="text" id="Titulo" name="titulo" placeholder='Exe: Qualidade das Aulas' tabIndex={1} autoFocus className="input" {...register("titulo")} />
          </div>

          <div className="fields" >
            <label htmlFor='op_one'>1º Opção: </label>
            <input type="text" id="op_one" name="op_one" placeholder='Exe: Excelentes' tabIndex={2} className="input" {...register("op_one")} />
          </div>

          <div className="fields" >
            <label htmlFor='op_two'>2º Opção: </label>
            <input type="text" id="op_two" name="op_two" placeholder='Exe: Boas' tabIndex={3} className="input"{...register("op_two")} />
          </div>

          <div className="fields" >
            <label htmlFor='op_three'>3º Opção: </label>
            <input type="text" id="op_three" name="op_three" placeholder='Exe: Ruins' tabIndex={4} className="input" {...register("op_three")} />
          </div>

          <div className="fields" >
            <label htmlFor='op_four'>4º Opção: </label>
            <input type="text" id="op_four" name="op_four" placeholder='Exe: Pessimos' tabIndex={5} className="input" {...register("op_four")} />
          </div>

          <div className="fields" >
            <label htmlFor='start_date'>Data de Inicio: </label>
            <input type="date" id="start_date" name="start_date" tabIndex={6} className="input" {...register("start_date")} />
          </div>

          <div className="fields" >
            <label htmlFor='finish_date'>Data de Inicio: </label>
            <input type="date" id="finish_date" name="finish_date" tabIndex={7} className="input" {...register("finish_date")} />
          </div>
        </div>

        <button className="btn btn-green" type='submit'>Alterar Enquente</button>
      </form>
    </div>
  )
}