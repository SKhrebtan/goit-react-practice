import { Component } from 'react';
import './ColorPicker.css'

export default class ColorPicker extends Component {
    state = {
        activeOptionIndex: '' ,
        label: ''
            }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.label === this.state.label) {
        this.setState({label: 'Оберіть колір'})
        }
          if (prevState.activeOptionIndex === this.state.activeOptionIndex) {
        this.setState({activeOptionIndex: null})
    }
}
    makeOptionClass = (index) => {
        const optionClasses = ['option'];
        if (this.state.activeOptionIndex === index) {
            optionClasses.push('option_active')
        }
         return optionClasses.join(' ')
    }
    
    setActiveIndex = (index, id, label) => {
        this.setState({
            activeOptionIndex: index,
            label
        })
        this.props.onClick(id, label)
    }
    render() {
        const { options } = this.props;
        const { label } = this.state;
      
      
        return (
            <div className='colorDiv' >
                <h1>Color Picker</h1>
                {options.length > 0 && <p>Chosen color:{label}</p>}
                <ul className='color_picker'>
                    {options.map(({ label, color, id }, index) => {
                    
                        return (<li key={label}>
                            <button type='button'
                                id={id}
                                className={this.makeOptionClass(index)}
                                style={{ backgroundColor: color }}
                                onClick={() => this.setActiveIndex(index, id, label)}
                            ></button>
                            
                        </li>)
                    }
                    )}
                       </ul>
                </div >
    
)
    }
}