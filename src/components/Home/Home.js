import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

function Home(){
    return(
        <>
        <Header/>
        <div className='container-home'>
            <div>
            <h1 className='nome-tablet'>Letícia Bastos Oliveira</h1>
            <h2 className='nome-tablet'>Psicóloga infantil <br/>CRP 19/4835 </h2>
            </div>
            <img className='foto-home' src='./imagens/fotoHome.jpg'/>
            <div className='container-home-titulo'>
                <h1 className='nome-pc'>Letícia Bastos Oliveira</h1>
                <h2 className='nome-pc'>Psicóloga infantil <br/>CRP 19/4835 </h2>
                <h4>  Especialista em Análise do Comportamento <br/> Aplicada (ABA) ao Autismo.</h4>
                <h1>Contato</h1>
                <div className='div-links-home'>
                    <a className='links-home-contato' href='https://instagram.com/psi.leticiaba' target="_blank"> <img src="./imagens/LogoInstagram.png" className='img-logo-links'/></a>
                    <a className='links-home-contato' href='mailto:psi.leticiabastos@gmail.com' target="_blank"> <img src="./imagens/LogoGmail.png" className='img-logo-links'/></a>
                    <a className='links-home-contato' href='https://wa.me/5579996616342' target="_blank"> <img src="./imagens/LogoWhatsApp.png" className='img-logo-links'/></a>
                </div>
            </div>
           
        </div>
        <Footer/>
        </>
    )
}
export default Home;