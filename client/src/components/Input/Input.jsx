
export default function Input({title,type,id,text,autoFocus,tbIn,data,setData}) {
    return (
        <div className="fields" >
            <label htmlFor={id}>{title} :</label>
            <input type={type} id={id} name={id} className="input" placeholder={text} autoFocus={autoFocus} tabIndex={tbIn} value={data} onChange={e => setData(e.currentTarget.value)}/>
        </div>
    )
}
