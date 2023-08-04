export default function List({ options, onCheckbox, onClick }) {
    return (
        <ul>
            {options.map(({name, number, id, checked}) => {
                return (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
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