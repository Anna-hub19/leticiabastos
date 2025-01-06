import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Servicos.css';

function Servicos() {
    return (
        <>
            <Header />
            <div className='container-servicos'>
                <h1>Serviços</h1>

                <div className='container-servicos-div'>
                    <img className='foto-servicos' src='./imagens/fotoServicos.jpg' />
                    <div>
                        <h2>Psicoterapia Infantil</h2>
                        <h3>
                            A psicoterapia infantil é um espaço acolhedor para ajudar crianças a superar desafios emocionais, comportamentais e de desenvolvimento. Por meio de atividades lúdicas e intervenções baseadas em evidências, irei trabalhar as habilidades sociais, emocionais e cognitivas, respeitando a individualidade de cada criança.
                            A participação da família é essencial, fortalecendo os progressos na rotina e nos vínculos. O objetivo é promover bem-estar, autonomia e confiança, sempre com acolhimento e sensibilidade.
                            <br />Idade: De 4 a 7 anos

                        </h3>
                    </div>

                </div>
                <div className='container-servicos-div'>
                    <img className='foto-servicos' src='./imagens/fotoServicos2.jpg' />
                    <div>
                        <h2>Terapia Intensiva em ABA</h2>
                        <h3>
                            A Terapia Intensiva em Análise do Comportamento Aplicada (ABA) é uma abordagem estruturada e personalizada para promover o desenvolvimento de habilidades essenciais em crianças com Transtorno do Espectro Autista (TEA) ou outros atrasos no desenvolvimento.

                            Com atendimentos frequentes e estruturados, o foco está em aproveitar ao máximo o potencial de aprendizado da criança. Com um plano individualizado, a terapia intensiva utiliza técnicas baseadas em evidências científicas para trabalhar comunicação, interação social, habilidades acadêmicas, autonomia e comportamentos adaptativos.

                            Nosso objetivo é oferecer às crianças as ferramentas necessárias para conquistar mais independência e qualidade de vida, sempre respeitando o ritmo e as necessidades de cada uma.
                            <br />Idade: De 1 a 5 anos

                        </h3>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Servicos;