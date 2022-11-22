import { listaOggetti } from "../objects/ListaOggetti"
import Immagine from "./Immagine"
import Nome from "./Nome"

export default function Elemento(){

    return(
         listaOggetti.map((elemento) =>
            <li className='card' key={elemento.id}>
                <Nome titolo={elemento.nome}/>
                <Immagine className='immagini' url={elemento.immagine} nm={elemento.nome}/>
            </li>
        )

    )
}