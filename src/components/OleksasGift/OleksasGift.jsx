import oleksa from '../../images/t725.jpg';
import css from './OleksasGift.module.css';
import { ImHeart } from 'react-icons/im';
import { Component } from 'react';
import {BsArrowThroughHeartFill} from 'react-icons/bs';

export default class OleksasGift extends Component {

    state = {
        isActive: false,
        onMouseOver: true,
    }

    handleImageShown = () => {
        this.setState({ isActive: !this.state.isActive })
        console.log(this.state.isActive)
    }

    handleBtnImage = () => {
this.setState({ onMouseOver: !this.state.onMouseOver })
    }
    
    render() {
        const { isActive, onMouseOver } = this.state;
    return (
        <div className={css.div}>
            
                <div className={css.thumb}>
                   {isActive && <img
                        className={css.img}
                        src={oleksa}
                        alt="oleksasgift"
                        width="441px"
                    height="453px"></img>}</div>
            <div className={css.heartdiv}>
                <h1 className={css.p}>Для<br/><span className={css.span}>Матусі</span></h1>
            <button type="button"
                className={css.btn}
                onClick={this.handleImageShown}
                onMouseEnter={this.handleBtnImage}
                onMouseLeave={this.handleBtnImage}>
              
                {onMouseOver ? <ImHeart size={96} className={css.heart} />
                    : <BsArrowThroughHeartFill size={96} className={css.heart_2}/>}
            </button>
            </div>
            
        </div>
        
        )
        }
}