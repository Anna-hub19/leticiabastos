import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

function Home(){
    return(
        <>
        <Header/>
        <div className='container-home'>
            <img className='foto-home' src='./imagens/fotoHome.jpg'/>
            <div className='container-home-titulo'>
                <h1>Letícia Bastos Oliveira</h1>
                <h2>Psicóloga infantil <br/>CRP 19/4835 </h2>
                <h3>  Especializada em Análise do Comportamento Aplicada (ABA) ao Autismo.</h3>
                <h1>Contato</h1>
                <div>
                    <a className='links-home-contato' href='https://instagram.com/psi.leticiaba' target="_blank"> instagram</a>
                    <a className='links-home-contato' href='mailto:psi.leticiabastos@gmail.com' target="_blank"> email</a>
                    <a className='links-home-contato' href='https://wa.me/5579996616342' target="_blank"> celular</a>
                </div>
            </div>
           
        </div>
        <Footer/>
        </>
    )
}
export default Home;