import { listaOggetti } from "./ListaOggetti"
import Card from "./Card";

export default function Lista(){
    console.log(listaOggetti);

    return(
        <Card>
        <ul>
            { listaOggetti.map((elemento) =>
                <li key={elemento.id}>{elemento.nome}
                <img src={elemento.immagine} alt={elemento.nome} style={{width:250, height:250}}></img>
                </li> 
            )}

        </ul>
        </Card>
    )
}