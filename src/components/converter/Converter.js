import { useEffect, useState } from 'react';
import ConvertServise from '../../services/ConvertService';
import './converter.scss';


const Converter = () => {

    const {getConvert} = ConvertServise();
    const [value, setValue] = useState('');
    const [res, setRes] = useState(null);
    const [curses, setCurses] = useState({});
    
    const onUpdateValue = (e) => {
        setValue(e.target.value);
    }

    const onCurses = ({USD,EUR,GBP,DKK,KZT}) => {
        setCurses({
            USD,
            EUR,
            GBP,
            DKK,
            KZT
        })
    }

    useEffect(() => {
        onUpdateConverting()
    },[])

    const onUpdateConverting = (curses = 1) => {
        getConvert()
            .then(onCurses)
                let res = value / curses;
                setRes(res.toFixed(2));
    }

    return (
        <div className="converter">
            <div className="converter__btns">
                <button className="converter__btn" onClick={() => onUpdateConverting(curses.USD)}>USD</button>
                <button className="converter__btn" onClick={() => onUpdateConverting(curses.GBP)}>GBP</button>
                <button className="converter__btn" onClick={() => onUpdateConverting(curses.DKK)}>DKK</button>
                <button className="converter__btn" onClick={() => onUpdateConverting(curses.EUR)}>EUR</button>
                <button className="converter__btn" onClick={() => onUpdateConverting(curses.KZT)}>KZT</button>
            </div>
            <input type="text" 
                   className="converter__input"
                   placeholder='Введите сумму в рублях...' 
                   value = {value}
                   onChange = {onUpdateValue}/>        
            <h2 className="converter__res">{res}</h2>
        </div>
    )
}

export default Converter;
