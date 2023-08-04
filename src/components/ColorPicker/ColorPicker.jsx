import { Component } from 'react';
// import css from './ColorPicker.css'
// // import classNames from 'classnames/bind';
// // import styles from './ColorPicker.module.css'
export default class ColorPicker extends Component {
    state = {
        activeOptionIndex: 2,
        
    }
    makeOptionClass = (index) => {
        const optionClasses = ['option'];
        if (this.state.activeOptionIndex === index) {
            optionClasses.push('option_active')
        }
         return optionClasses.join(' ')
    }
    
    setActiveIndex = (index) => {
        this.setState({
    activeOptionIndex: index,
})
    }
    render() {
        const { options } = this.props;
        const { activeOptionIndex } = this.state;
        const {label} = this.props.options[activeOptionIndex];
      
        return (
            <div>
                <h1>Color Picker</h1>
                <p>Chosen color:{label}</p>
            <ul className='color_picker'>
                {options.map(({ label, color }, index) => {
                     this.makeOptionClass(index)
                     return (  <li key={label}>
                        <button type='button'
                            className={this.makeOptionClass(index)}
                             style={{ backgroundColor: color }}
                         onClick={()=>this.setActiveIndex(index)}></button>
                    </li>)
                }
                 )}
                </ul>
                </div>
    
)
    }
}