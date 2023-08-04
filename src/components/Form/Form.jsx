import { Component } from 'react';
import { nanoid } from 'nanoid';
export default class Form extends Component {
    state = {
        name: '',
        number: '',
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
            alert('alert')
        }
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
this.setState({name: '',
    number: '',
checked: false})
    }
    render() {
        const { name, number, checked } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
             <label>
            ВВедіть ім"я
            <input
            type="text"
                        name="name"
                        value={name}
            onChange={this.handleInput}></input>
            </label>
            
          <label>
            ВВедіть номер
            <input
            type="text"
                        name="number"
                        value={number}
            id={this.numberId}
            onChange={this.handleInput}></input>
            </label>

              <label> Згоден
            <input
            type="checkbox"
                        name="number"
                        id={this.nameId}
            value="value"
            checked={checked}
            onChange={this.handleCheckbox}></input>
            </label>
            <button type="submit" disabled={!this.state.checked}>ADD</button>
        </form>
        )
        
       
    }
}