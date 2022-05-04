import './perfil.css'
import use from './user.jpg'
import use22 from './dev.jpg'
function Perfil(){
    return(

<div className="background_perfil">
    <div className="centraliza_perfil">
        <div className="parte_perfil">
            <img src={use} className="foto_perfil"/>
            <div className="info_perfil">
                <h5>Estel0na</h5>
                <p className="cinza"><span className="pequeno">Estela Rodrigues</span></p>
                </div>
            <div className="aba_mudar"><p className="azulMudar"> Mudar</p></div>
        </div>
        <div className="sugestao"><p className="cinza">Sugestões para ti</p><h5 className="space">Ver todas</h5></div>
        <div className="baixo_perfil">

<div className="seguidores">
<img src={use22} className="perfil_user"/>
            <div className="perfil_info">
                <h5>Jx.javando</h5>
                <p className="cinza"><span className="pequen">seguido(a) por Devsbrack</span></p>
                </div>
</div>



<div className="seguindo">
    <div className="centralizando_seg"><p className="azulMudar">Seguir</p></div>
</div>

        </div>
    </div>

</div>

    );
}
export default Perfil