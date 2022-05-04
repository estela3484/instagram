import "./cabecalho.css";
import logo from'./logo.png'
import pesqicon from'./procurar.png'
import home from './lar.png'
import add from './adicionar.png'
import coracao from './cora.png'
import foto from './user.jpg'
function Cabecalho(){
    return(

<div className="container">
    <div className="centraliza">
        <div className="logomarca"><img src={logo} className="logo"/></div>
         <div className="centraliza2">
        
           <div className="pesquisa">
               <div className="barra_pesquisa">
                   <img src={pesqicon} className="pesqicon"/>
                    <p className="cinza">Pesquisar</p>
               </div>
           </div>
           <div className="icon">
               <div className="home"><img src={home} className="dentro"/></div>
               <div className="add"><img src={add} className="dentro"/></div>
               <div className="coracao"><img src={coracao} className="dentro"/></div>
               <div className="foto"><img src={foto} className="dentro2"/></div>
           </div>
           
        </div>
    </div>
</div>



    );
}
export default Cabecalho;