import { Component } from "react";

export default class ColorPickerForm extends Component {
    state = {
        label: '',
        color: ''
    }
    handleInput = e => {
        const { name , value } = e.currentTarget;
        this.setState({
            [name]: value.toLowerCase().trim()
        })
    }
    onFormSubmit = e => {
        e.preventDefault()
this.props.onSubmit(this.state)
        this.setState({label: '',
        color: ''})
    }
    render() {
        const {label,color} = this.state
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Color
                    <input 
                    type="text"
                    name="label"
                    value={label}
                    onChange={this.handleInput}></input>
                </label>
                <label>
                    HEX
                    <input 
                    pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                    type="text"
                    name="color"
                    value={color}
                    onChange={this.handleInput}></input>
                 </label>
                <button type="submit">Add color</button>
            </form>
        )
    }
}