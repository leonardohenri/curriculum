import './styles.css'
import leonardo from '../../images/leonardo.png'
export const GridOne = () => {
    return (
        <div className="GridOne">
            <div className="Content-gridOne" id='GridOne'>
            <br/>
            <h1>Portfolio </h1>
            <p> Nome: Leonardo Henrique da Silva</p>
            <p>Nascimento: 15/02/2000</p>
            <p>Nascionalidade: Brasileiro</p>
            <p>Cidade: Monte Aprazível</p>
            </div>
            <img src={leonardo} alt="minha foto" className='img'></img>

        </div>
    )
}