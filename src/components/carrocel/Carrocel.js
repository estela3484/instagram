import './carrocel.css'
import usu1 from './images.jpeg'
import usu01 from './nada1.jpg'
import usu02 from './ator.jpg'
import usu03 from './usu3.png'
import usu04 from './neyy.jpg'


function Carrocel(){
    return(
        <div className="container_carrocel">
            <div className="centralizar_carrocel">
                <div className="divisao">
                    <div className="pessoas"> <div className="status"><img src={usu1} className="circle_perfil"/>  </div></div>
                    <div className="pessoas"> <div className="status"><img src={usu01} className="circle_perfil"/>  </div></div>
                    <div className="pessoas"> <div className="status"><img src={usu02} className="circle_perfil"/>  </div></div>
                    <div className="pessoas"> <div className="status"><img src={usu03} className="circle_perfil"/>  </div></div>
                    <div className="pessoas"> <div className="status"><img src={usu04} className="circle_perfil"/>  </div></div>
                </div>
                <div className="container_nomes">
                    <div className="nomes"><p> Matheus  </p> </div>
                    <div className="nomes"><p> Ana b.k    </p> </div>
                    <div className="nomes"><p> Manuel alves</p> </div>
                    <div className="nomes"><p> Julia R    </p> </div>
                    <div className="nomes"><p> Neymar    </p> </div>
                </div>
            </div>  
        </div>

    )
}
export default Carrocel