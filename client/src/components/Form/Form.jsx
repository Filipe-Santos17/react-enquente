import Input from "../Input/Input"
import "./Form.scss"

export default function Form({
    title,
    titulo,
    setTitulo,
    option_one,
    setOptionOne,
    option_two,
    setOptionTwo,
    option_three,
    setOptionThree,
    option_four,
    setOptionFour,
    dataS,
    setDataS,
    dataF,
    setDataF,
    Handle,
    btnName
}) {
    return (
        <div className="back">
            <form className="form">
                <h2>{title}</h2>

                <div className="inputs">
                    <Input title={"Titulo"} text={"Exe: Qualidade das Aulas"} id={"Titulo"} type={"text"} data={titulo} setData={setTitulo} tbIn={1} autoFocus />

                    <Input title={"1º Opção"} text={"Exe: Excelentes"} id={"1º Opção"} type={"text"} data={option_one} setData={setOptionOne} tbIn={2} />

                    <Input title={"2º Opção"} text={"Exe: Boas"} id={"2º Opção"} type={"text"} data={option_two} setData={setOptionTwo} tbIn={3} />

                    <Input title={"3º Opção"} text={"Exe: Ruins"} id={"3º Opção"} type={"text"} data={option_three} setData={setOptionThree} tbIn={4} />

                    <Input title={"4º Opção"} text={"Exe: Pessimas"} id={"4º Opção"} type={"text"} data={option_four} setData={setOptionFour} tbIn={5} />

                    <Input title={"Data de Inicio"} id={"DataS"} type={"date"} data={dataS} setData={setDataS} tbIn={6} />

                    <Input title={"Data de Encerramento"} id={"DataF"} type={"date"} data={dataF} setData={setDataF} tbIn={7} />
                </div>

                <button className="btn btn-green" onClick={Handle}>{btnName}</button>
            </form>
        </div>
    )
}
