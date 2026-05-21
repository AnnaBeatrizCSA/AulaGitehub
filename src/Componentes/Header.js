import React, { useEffect, useState } from 'react';
import './Header.css';  // coloque o CSS do header aqui
import logo from '../Assets/logo.png';
import logoo from '../Assets/logoo.png';
import banner from '../Assets/rosa.png';
import segundafoto from '../Assets/segundafoto .png'; // sem espaço no nome!
import maquiagens from '../Assets/maquiagens.png';


export default function Header() {
  // Estado para armazenar a data formatada
  const [dataAtual, setDataAtual] = useState('');

  useEffect(() => {
    const data = new Date();
    const dias = [
      'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
      'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    const meses = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const dataFormatada = `${dias[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
    setDataAtual(dataFormatada);
  }, []);

  return (
    <>
      <header>
        <div className="divHeader">
          <img src={logo} alt="Logo do site" className="logo" />
          <nav>
            <ul>
              <li><b>Home</b></li>
              <li><a href="produtos.html"><b>Produtos</b></a></li>
              <li><a href="contato.html"><b>Contato</b></a></li>
              <li>|</li>
              <li><a href="encomendas.html"><b>Encomendas</b></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <img src={banner} alt="Banner" className="Banner" />

      <section className="Sobre_nos">
        <h3 className="titulo_sobrenos">SOBRE NÓS</h3>
        <img src={segundafoto} alt="Imagem da livraria" className="segundafoto" />
        <p className="datahoradia">{dataAtual}</p>
        <p className="texto_diferente">
          Fundada em 2020, nossa livraria surgiu como uma alternativa para aqueles que, durante a pandemia,
          não podiam ir às lojas físicas e procuravam uma forma diferente de comprar livros.
          Inicialmente focados em eBooks, no final de 2022 ampliamos nosso catálogo e começamos a vender livros físicos,
          oferecendo o melhor de ambos os mundos para nossos clientes. Com a missão de tornar a leitura mais acessível,
          estamos aqui para compartilhar o prazer da leitura com você, onde quer que esteja.
        </p>
      </section>
      <section class="mapaGeral">
        <h3 class="titulo_estabelecimento">NOSSO ESTABELECIMENTO</h3>
        <p class="texto_mapa">
          Veja no mapa abaixo como nos encontrar
        </p>
        <div class="mapa">
          <iframe
            title="Localização da Livraria no Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.183668596157!2d-46.87650156364733!3d-23.476838380137025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03aaf6d062af%3A0x2c22de58cd7f17f1!2sAlphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006542-115!5e0!3m2!1spt-BR!2sbr!4v1740608314813!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </section>
      <section class="nossos_produtos">
        <h3 class="titulo_produtos">NOSSOS PRODUTOS</h3>
        <img src={maquiagens} className="materiais" alt="Imagem dos produtos da livraria" />
        <div class="div_nossosprodutos">
          <ul class="lista_produtos">
            <li>Livros de Romance</li>
            <li>Livros de Ação</li>
            <li>Livros de Fantasia</li>
            <li>Livros de Ficção Científica</li>
            <li>Livros de Terror</li>
            <li>Livros de Suspense</li>
          </ul>
        </div>
      </section>
      <section class="video_ilustrativo">
        <h3 class="titulo_video">CONHEÇA UM POUCO MAIS DA NOSSA LIVRARIA</h3>
        <iframe
          title="Vídeo apresentação da livraria"
          className="video_ilu"
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCarlos.Sanlucar.de.Barrameda%2Fvideos%2F449024303767823%2F&show_text=false&width=560&t=0"
          width="560"
          height="314"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      </section>
      <footer>
        <img src={logoo} alt="Bibliotech" class="logo_footer" />
        <p>Encomendas on-line: <a href="https://wa.me/5511941276364"><i class="fa fa-whatsapp"></i></a>(11)-94127-6364 | <a href="https://instagram.com/biaacasellato"><i class="fa fa-instagram"></i></a>@bibliotech</p>
      </footer>

    </>

  );
}
