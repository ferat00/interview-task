import StyledArticle from "../styles/StyledArticle";
import {useState} from 'react';
import Input from "./input";

export default function Articles({title, img, width, url, type}) {

    // Her lager jeg to state(show, setShow) som kontrollerer at inpute vises og ikke vises
    const [show, setShow] = useState(false);
    
    // Her holder state på den gamle titelen
    const [oldTitle, setOldTitle] = useState(title);
    
    // Funksjonen her setter seg opp så at inputet vises ved å sette staten til true
    const showInput = ()=>{
        setShow(true);
    }

    return ( 
        <>
        {/* Her så henter vi StyledArticle komponentet (det er en article komponent) */}
        <StyledArticle width={width}>
        <h2>{oldTitle}</h2>
        {/* Her lagde jeg en conditional renderer som kontrollerer om inputet rendres. 
        Hvis show er sann så vises inputet, hvis ikke så vises ingenting med null */}
        {show? <Input title={title} setOldTitle={setOldTitle} setShow={setShow} /> : null}
            <img src={img} height={150} width={150} alt={title} />
            <h3>{width}</h3>
            <button type="button" onClick={showInput} >Edit</button>
        </StyledArticle>
        </>
     );
    
}