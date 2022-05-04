import './conteudo.css'
import Carrocel from '../carrocel/Carrocel';
import Publicacoes from '../publicacoes/Publicacoes';
import Usuario from '../perfil/Perfil'
function Conteudo (){
    return(
    <div className="conteudo_global">
        <div className="centralizar_global">

            <div className="publicacoes">
                <Carrocel />
                <Publicacoes
                 nome="Saude_vida"
                foto="https://domoclinica.com.br/wp-content/uploads/2015/11/temp-especialidades-1-225x225.png"
                conteudo_foto="https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                quantidade="90"
                horas="2"
               />
                
                <Publicacoes
                 nome="idosos"
                 conteudo_foto="https://t2.tudocdn.net/584413?w=646&h=284"
                foto="http://www.policlinicareal.com.br/assets/images/geriatria-225x225.png"
                quantidade="63"
                horas="6"
                />
            </div>
            <div className="usuario">
                <Usuario/>
            </div>

        </div>
    </div>







    );
}
export default Conteudo;