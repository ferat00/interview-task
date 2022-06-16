import { useState } from "react"

export default function Input ({title,setOldTitle,setShow}) {
    
    //Her er ny state for ny tittel
    const [newTitle, setNewTitle] = useState("");

    // Her er sumbit funksjonen
    const changeTitle = (e)=>{
        e.preventDefault();
        // Her blir den gamle tittelen satt til den nye tittelen
        setOldTitle(newTitle);
        // Her gjemmes inputet når når ny tittel er lagd
        setShow(false);
        
    }

    return ( 
        <>
        <form onSubmit={changeTitle}>
            <label htmlFor="input">
                Change title:
                {/* Her blir verdien til inputet satt til staten newTitle */}
                <input type="text" id="input" onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}  />
            </label>
            <input type="submit" name="" id="" value="Change title" />
        </form>
        </>
     );

}