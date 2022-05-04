import './publicacoes.css'
import cora from './cora.png'
import comente from './comente.png'
import aviao from './aviao.png'
import marca from './marca.png'
function Publicacoes(props){
    return(
        <div className="container_conteudos">
            <div className="filho">

                <div className="title_noticia">
                    <div class="elemento"> <img src={props.foto} className="foto_publicada"/>
                        <p className="nomeuser"> {props.nome}</p>
                    </div>
                        <p className="direita_noticia">. . .</p>
                </div>

                <img src={props.conteudo_foto}  className="image_publi"/>
                    
                <div className="comentarios">
                    <div className="like">
                        <img src={cora} className="likeDentro"/> 
                        <img src={comente} className="likeDentro"/> 
                        <img src={aviao} className="likeDentro"/> 
                    </div>
                        <div className="salva"> 
                        <img src={marca} className="likeDentro"/>
                        </div>
                    </div>
                    <div className="coment">
                        <div className="gostei">

                        </div>
                        <div className="espacamento">
                        <h5> {props.quantidade} gostos</h5>
                       
                        <p className="cinza2"> mais 20 comentarios</p>
                        <p className="cinza2"> Há {props.horas} horas</p>
                    </div>
            </div>
</div>
        </div>
        
    )
}
export default Publicacoes;