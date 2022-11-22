import { listaOggetti } from "./ListaOggetti"
import Immagine from "./Immagine"
import Nome from "./Nome"

export default function Elemento(){

    return(
         listaOggetti.map((elemento) =>
            <li key={elemento.id}>
                <Nome titolo={elemento.nome}/>
                <Immagine url={elemento.immagine} nm={elemento.nome}/>
            </li> 
        )

    )
}