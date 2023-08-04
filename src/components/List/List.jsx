import classNames from 'classnames/bind';
import styles from './List.module.css'
    

export default function List({ options, onCheckbox, onClick }) {
    
    return (
        <ul>
            {options.map(({ name, number, id, status, checked }) => {
                const cx = classNames.bind(styles)
    
                let className = cx({
        text: true,
      text_active: checked === true
    });
                return (
                    <li key={id}>
                        <p className={className}>Ім'я: {name}</p>
                        <p className={className}>Номер: {number}</p>
                        <p className={className}>Статус: {status}</p>
                        <input type="checkbox"
                            className="input"
                        checked={checked}
                        onChange={()=> onCheckbox(id)}/>
                        <button type="button" disabled={!checked} onClick={()=>onClick(id)}>Delete</button>
            </li>
               )
            })}
        </ul>
    )
}