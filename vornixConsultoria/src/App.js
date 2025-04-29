import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>VORNIX</h1>
        </div>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h2>Transformando o futuro da sua empresa com tecnologia</h2>
          <p>
            Especialistas em soluções inovadoras para otimizar seus processos e aumentar a competitividade.
          </p>
          <a href="#contato" className="cta-button">Fale Conosco</a>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="section about">
        <h2>Sobre Nós</h2>
        <p>
          A Vornix é uma empresa especializada em transformar negócios por meio de soluções tecnológicas avançadas. 
          Nosso time de especialistas busca a inovação para ajudar sua empresa a alcançar novos patamares.
        </p>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="section servicos">
        <h2>Serviços</h2>
        <div className="services-container">
          {servicos.map((servico, index) => (
            <div key={index} className="service-card">
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="section planos">
        <h2>Planos de Serviços</h2>
        <div className="planos-container">
          {planos.map((plano, index) => (
            <div key={index} className="plan-card">
              <h3>{plano.nome}</h3>
              <p><strong>Valor: </strong>{plano.valor}</p>
              <ul>
                {plano.itens.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="section contato">
        <h2>Entre em Contato</h2>
        <p>Quer saber mais sobre como podemos ajudar sua empresa? Envie uma mensagem e entre em contato conosco.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 VORNIX | Todos os direitos reservados.</p>
      </footer>

      {/* Botão Fixo Enviar E-mail */}
      <a href="mailto:vornixconsultoria@gmail.com" className="fixed-email-button">Enviar E-mail</a>

      {/* Botão Fixo Enviar Whatsapp */}
      <a href="mailto:vornixconsultoria@gmail.com" className="fixed-wpp-button"></a>
    </div>
  );
}

const servicos = [
  {
    titulo: 'Consultoria em TI',
    descricao: 'Transformação digital para otimização de processos e eficiência operacional.'
  },
  {
    titulo: 'Automação de Sistemas',
    descricao: 'Automatize suas operações para aumentar a produtividade e reduzir erros.'
  },
  {
    titulo: 'Infraestrutura de Nuvem',
    descricao: 'Soluções de nuvem escaláveis e seguras para garantir alta disponibilidade.'
  },
  {
    titulo: 'Inteligência Artificial',
    descricao: 'Aplicação de IA para análise de dados e tomada de decisões mais assertivas.'
  },
  {
    titulo: 'Segurança da Informação',
    descricao: 'Proteja seus dados e informações com as melhores práticas de segurança.'
  },
];

const planos = [
  {
    nome: 'Plano Básico',
    valor: 'R$ 1.500/mês',
    itens: ['Suporte técnico 24/7', 'Consultoria em TI', 'Relatórios mensais']
  },
  {
    nome: 'Plano Avançado',
    valor: 'R$ 3.000/mês',
    itens: ['Consultoria estratégica', 'Automação de processos', 'Análise de dados', 'Relatórios customizados']
  },
  {
    nome: 'Plano Sob Demanda',
    valor: 'Sob consulta',
    itens: ['Projetos personalizados', 'Consultoria técnica especializada', 'Desenvolvimento de soluções sob medida']
  }
];

export default App;
