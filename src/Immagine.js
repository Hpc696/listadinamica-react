export default function Immagine(props){
    
    return (
    <img src={props.url} alt={props.nm} style={{width:250, height:250}}></img>
    )
}