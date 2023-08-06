import oleksa from '../../images/t725.jpg';
import oleksa1 from '../../images/t777.jpg'
import css from './OleksasGift.module.css';
import { ImHeart } from 'react-icons/im';
import { Component } from 'react';
import { BsArrowThroughHeartFill } from 'react-icons/bs';
import {SiMinecraft} from 'react-icons/si'

export default class OleksasGift extends Component {

    state = {
        isActive: false,
        isActive2:false,
        onMouseOver: true,
    }

    handleImageShown = () => {
        this.setState({ isActive: !this.state.isActive })
        
    }
     handleImageShown2 = () => {
        this.setState({ isActive2: !this.state.isActive2 })
        
    }

    handleBtnImage = () => {
this.setState({ onMouseOver: !this.state.onMouseOver })
    }
    
    render() {
        const { isActive, isActive2, onMouseOver } = this.state;
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
                {(isActive || isActive2) &&
                    <div><h2 className={css.title}>Це ще не все!</h2><button type="button" className={css.btn}  onClick={this.handleImageShown2}><SiMinecraft size={144} /></button></div>}
            </div>
            
                <div className={css.thumb}>
                {isActive2 && <img
                    className={css.img}
                    src={oleksa1}
                    alt="oleksasgift"
                    width="441px"
                    height="453px"></img>}</div>
            
            
            
        </div>
        
        )
        }
}