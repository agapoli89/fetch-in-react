import './Word.css';

const Word = props => {
    return ( 
        <li className="li-word">Słowo po angielsku: <strong>{props.english}</strong>.Tłumaczenie: <strong>{props.polish}</strong></li>
    );
}
 
export default Word;