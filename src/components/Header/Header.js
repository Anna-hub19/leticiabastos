
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <>
        <div className='container-header'>
            <img src='./imagens/logo.png' alt='foto da logo de Leticia Bastos' className='img-logo-header'/>
            <div className='container-links'>
                <Link to={'/'} className='links'>
                Home
                </Link>
                <Link to={'/sobre-mim'} className='links'>
                Sobre mim
                </Link>
                <Link to={'/servicos'} className='links'>
                Serviços
                </Link>
            </div>
        </div>
        </>
    )
}
export default Header;