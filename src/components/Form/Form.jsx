import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css'
export default class Form extends Component {
    state = {
        name: '',
        number: '',
        status: 'друг',
        checked: false,
        }

    nameId = nanoid();
    numberId = nanoid();

    handleInput = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
          }
    handleCheckbox = () => {
        const { checked } = this.state;
        this.setState({
            checked: !checked,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.trim() === '' || this.state.number === '') {
            return alert('alert')
        }
        this.props.onSubmit(this.state);
        
        this.reset()
    }

    reset = () => {
this.setState({name: '',
    number: '',
checked: false})
    }
    render() {
        const { name, number, checked,status } = this.state;
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <div className={css.inputData}>
            <label className={css.inputDataLabel}>
            Введіть ім"я
                        <input
                            className={css.inputDataInput}
            type="text"
                        name="name"
                        value={name}
            onChange={this.handleInput}></input>
            </label>
             <label className={css.inputDataLabel}>
            Введіть номер
                        <input
                            className={css.inputDataInput}
            type="text"
                        name="number"
                        value={number}
            id={this.numberId}
            onChange={this.handleInput}></input>
                </label>
                </div>
                <div className={css.chooseDiv}>
                    <label className={css.chooseDivLabel}>
                   Друг
                    <input type="radio"
                    name="status"
                    value="друг"
                    onChange={this.handleInput}
                    checked={status === "друг"}></input>
                </label>
                <label className={css.chooseDivLabel}>
                    Ворог
                    <input type="radio"
                    name="status"
                        value="ворог"
                        onChange={this.handleInput}
                    checked={status === "ворог"}></input>
                </label>
                <label className={css.chooseDivLabel}>
                    Родич
                    <input type="radio"
                    name="status"
                        value="родич"
                        onChange={this.handleInput}
                    checked={status === "родич"}></input>
                </label>
 
                </div>
                <div className={css.submitDiv}>
                    <label className={css.chooseDivLabel}>
                        <p>Згоден</p>
                        <input
                    disabled={((name.length > 0 && number.length > 0) ? false : true)}
            type="checkbox"
                        name="number"
                        id={this.nameId}
            value="value"
            checked={checked}
            onChange={this.handleCheckbox}></input>
            </label>
                    <button className={css.btn} type="submit" disabled={!this.state.checked}>ADD</button>
                </div>
                      
        </form>
        )
        
       
    }
}