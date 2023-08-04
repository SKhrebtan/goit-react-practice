export default function List({ options, onCheckbox, onClick }) {
    return (
        <ul>
            {options.map(({name, number, id,status, checked}) => {
                return (
                    <li key={id}>
                        <p>Ім'я: {name}</p>
                        <p>Номер: {number}</p>
                        <p>Статус: {status}</p>
                        <input type="checkbox"
                        checked={checked}
                        onChange={()=> onCheckbox(id)}/>
                        <button type="button" disabled={!checked} onClick={()=>onClick(id)}>Delete</button>
            </li>
               )
            })}
        </ul>
    )
}