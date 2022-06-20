import ConvertServise from '../../services/ConvertService';
import { useState, useEffect } from 'react';
import './curses.scss';
import Spinner from '../spinner/Spinner';

const Curses = () => {
    
    const {getConvert} = ConvertServise();

    const [USD, setUSD] = useState(null);
    const [EUR, setEUR] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getValue();
    },[])

    const getValue = () => {
        getConvert()
            .then(updateValue)
    }

    const updateValue = ({USD,EUR}) => {
        setLoading(false);
        setUSD(USD.toFixed(2));
        setEUR(EUR.toFixed(2));
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !loading  ? <Wiev USD={USD} EUR = {EUR}/> : null;
    
    return (
        <div className="curses">
            {spinner}
            {content}
        </div>
    )
}

const Wiev = ({USD, EUR}) => {

    return (
        <div className="curses__wrapper">
            <h2 className="curses__title">Актуальные курсы</h2>
            <div className="curses__currency">
                <div className="curses__usd">USD
                            <br />
                            {USD}</div>
                <div className="curses__eur">EUR
                            <br />
                            {EUR}</div>
            </div>  
        </div>
    )
}


export default Curses;