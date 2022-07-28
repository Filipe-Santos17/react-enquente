import { useEffect, useState } from "react"

import Enquent from "../Enq/Enquent"

import "./Enquentes.scss"

export default function Enquentes() {

    const [data, setData] = useState()
    
    useEffect(() => {
        fetch("http://localhost:8081/api/")
        .then(resp => resp.json())
        .then(dados => setData(dados))
        .catch(error => console.log(`Erro: ${error}`))
    },[])

    return (
        <section className="Enquentes">
            { data?.map(res => {
                return <Enquent key={res.id} title={res.titulo} id={res.id} create={res.start_date} finish={res.finish_date} />
            })}
        </section>
    )
}
