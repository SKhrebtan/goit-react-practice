import { Component } from 'react';
import './ColorPicker.css'
// // import classNames from 'classnames/bind';
// // import styles from './ColorPicker.module.css'
export default class ColorPicker extends Component {
    state = {
        activeOptionIndex: 0,
            }
    makeOptionClass = (index) => {
        const optionClasses = ['option'];
        if (this.state.activeOptionIndex === index) {
            optionClasses.push('option_active')
        }
         return optionClasses.join(' ')
    }
    
    setActiveIndex = (index, id) => {
        this.setState({
    activeOptionIndex: index,
        })
        this.props.onClick(id)
    }
    render() {
        const { options } = this.props;
        const { activeOptionIndex } = this.state;
        const { label } = options[activeOptionIndex];
      
        return (
            <div className='colorDiv' >
                <h1>Color Picker</h1>
                <p>Chosen color:{label}</p>
                <ul className='color_picker'>
                    {options.map(({ label, color, id }, index) => {
                    
                        return (<li key={label}>
                            <button type='button'
                                id={id}
                                className={this.makeOptionClass(index)}
                                style={{ backgroundColor: color }}
                                onClick={() => this.setActiveIndex(index, id)}
                            ></button>
                            
                        </li>)
                    }
                    )}
                       </ul>
                </div >
    
)
    }
}