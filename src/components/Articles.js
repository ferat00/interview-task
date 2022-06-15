export default function Articles({title, img, width, url, type}) {

    return(
        <>
         <h2>{title}</h2>
            <img src={img} alt={title} />
            <h3>{width}</h3>
        </>
    )    
}