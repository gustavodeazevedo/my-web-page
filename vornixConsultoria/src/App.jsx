import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import patternVornix from "./images/pattern-vornix.svg";

function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Para cada entrada observada
        entries.forEach((entry) => {
          // Quando o elemento entra na viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("is-visible");
          }
          // Quando o elemento sai da viewport (usuário rolou para cima)
          else {
            setIsVisible(false);
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = domRef.current;
    observer.observe(currentElement);

    // Limpeza ao desmontar o componente
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Usando o estado para controlar a classe CSS dinamicamente
  const fadeClass = `fade-in-section ${isVisible ? "is-visible" : ""}`;

  return (
    <div ref={domRef} className={fadeClass}>
      {children}
    </div>
  );
}

function App() {
  // Estado para controle do menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para alternar o estado do menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevenir rolagem da página quando o menu estiver aberto
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  // Fechar o menu quando um link for clicado
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  // Limpar o overflow quando o componente for desmontado
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

        {/* Botão de menu mobile */}
        <div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu mobile */}
        <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#sobre" onClick={handleNavLinkClick}>
            Sobre
          </a>
          <a href="#servicos" onClick={handleNavLinkClick}>
            Serviços
          </a>
          <a href="#planos" onClick={handleNavLinkClick}>
            Planos
          </a>
          <a href="#contato" onClick={handleNavLinkClick}>
            Contato
          </a>
        </div>

        {/* Overlay para o menu mobile */}
        <div
          className={`menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        ></div>
      </header>

      {/* Hero Section */}
      <FadeInSection>
        <section id="hero" className="hero">
          <div className="floating-gradient floating-gradient-1"></div>
          <div className="floating-gradient floating-gradient-2"></div>
          <div className="floating-gradient floating-gradient-3"></div>
          <div
            className="shape-decorator"
            style={{ top: "10%", right: "10%" }}
          ></div>
          <div
            className="shape-decorator"
            style={{ bottom: "15%", left: "5%" }}
          ></div>
          <FadeInSection>
            <div className="hero-content">
              <h2>Transformando o Futuro da sua Empresa com Tecnologia</h2>
              <p>
                Aumente sua presença online e alcance novos clientes com nossas
                soluções tecnológicas de ponta.
              </p>
              <a href="#contato" className="cta-button">
                Fale Conosco
              </a>
            </div>
          </FadeInSection>
        </section>
      </FadeInSection>

      {/* Seção Sobre */}
      <FadeInSection>
        <section id="sobre" className="section about">
          <FadeInSection>
            <h2 className="section-title">Sobre Nós</h2>
          </FadeInSection>
          <FadeInSection>
            <p>
              A Vornix é uma empresa especializada em transformar negócios por
              meio de soluções tecnológicas avançadas. Nosso time de
              especialistas busca a inovação para ajudar sua empresa a alcançar
              novos patamares.
            </p>
          </FadeInSection>
          <div
            className="shape-decorator"
            style={{ bottom: "-10%", right: "15%" }}
          ></div>
        </section>
      </FadeInSection>

      {/* Seção de Serviços - Aplicando também o novo estilo nesta seção */}
      <FadeInSection>
        <section id="servicos" className="section servicos">
          <FadeInSection>
            <h2 className="section-title">Serviços</h2>
          </FadeInSection>
          <FadeInSection>
            <p>
              Oferecemos soluções tecnológicas avançadas para impulsionar seu
              negócio e garantir vantagem competitiva no mercado digital.
            </p>
          </FadeInSection>
          <div className="pricing-container">
            {servicos.map((servico, index) => (
              <FadeInSection key={index}>
                <div className="pricing-card">
                  <div className="pricing-card-header">
                    <div className="pricing-card-title">{servico.titulo}</div>
                  </div>
                  <div className="pricing-card-features">
                    <div className="pricing-card-feature">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {servico.descricao}
                    </div>
                  </div>
                  <button className="pricing-card-button">Saiba Mais</button>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Seção de Planos - Novo design baseado na imagem de referência */}
      <FadeInSection>
        <section id="planos" className="section planos">
          <FadeInSection>
            <h2 className="section-title">Planos de Serviços</h2>
          </FadeInSection>
          <FadeInSection>
            <p>
              Escolha o plano certo para atender às suas necessidades e obter os
              melhores resultados para seu negócio.
            </p>
          </FadeInSection>
          <div className="pricing-container">
            <FadeInSection>
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <div className="pricing-card-title">{planos[0].nome}</div>
                  <div className="pricing-card-price">
                    {planos[0].valor.split("/")[0]}
                    <span>/mês</span>
                  </div>
                </div>
                <div className="pricing-card-features">
                  {planos[0].itens.map((item, index) => (
                    <div className="pricing-card-feature" key={index}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="pricing-card-button">
                  Entrar em contato
                </button>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="pricing-card highlight">
                <img
                  src={patternVornix}
                  alt=""
                  className="background-pattern"
                  aria-hidden="true"
                />
                <div className="pricing-card-header">
                  <div className="pricing-card-title">{planos[1].nome}</div>
                  <div className="pricing-card-price">
                    {planos[1].valor.split("/")[0]}
                    <span>/mês</span>
                  </div>
                </div>
                <div className="pricing-card-features">
                  {planos[1].itens.map((item, index) => (
                    <div className="pricing-card-feature" key={index}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="pricing-card-button">
                  Entrar em contato
                </button>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="pricing-card">
                <div className="pricing-card-header">
                  <div className="pricing-card-title">{planos[2].nome}</div>
                  <div className="pricing-card-price">{planos[2].valor}</div>
                </div>
                <div className="pricing-card-features">
                  {planos[2].itens.map((item, index) => (
                    <div className="pricing-card-feature" key={index}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="pricing-card-button">
                  Entrar em contato
                </button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </FadeInSection>

      {/* Seção Contato */}
      <FadeInSection>
        <section id="contato" className="section contato">
          <FadeInSection>
            <h2 className="section-title">Entre em Contato</h2>
          </FadeInSection>
          <FadeInSection>
            <p>
              Quer saber mais sobre como podemos ajudar sua empresa? Envie uma
              mensagem e entre em contato conosco.
            </p>
          </FadeInSection>
        </section>
      </FadeInSection>

      {/* Footer */}
      <FadeInSection>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <h2>VORNIX</h2>
              </div>
              <p className="footer-tagline">
                Transformando o futuro com tecnologia
              </p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-links-column">
                <h3>Empresa</h3>
                <ul>
                  <li>
                    <a href="#sobre">Sobre Nós</a>
                  </li>
                  <li>
                    <a href="#servicos">Serviços</a>
                  </li>
                  <li>
                    <a href="#planos">Planos</a>
                  </li>
                  <li>
                    <a href="#contato">Contato</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3>Recursos</h3>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Estudos de Caso</a>
                  </li>
                  <li>
                    <a href="#">Documentação</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3>Contato</h3>
                <ul className="footer-contact-info">
                  <li>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65163C2.82196 2.44656 3.04967 2.28271 3.30329 2.1705C3.55691 2.05829 3.83076 2.00024 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23654 4.68007 9.47145 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7635 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    (99) 9999-9999
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    vornixconsultoria@gmail.com
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    São Paulo, SP - Brasil
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 VORNIX | Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Serviço</a>
            </div>
          </div>

          <div className="footer-decoration">
            <img
              src={patternVornix}
              alt=""
              aria-hidden="true"
              className="footer-pattern"
            />
          </div>
        </footer>
      </FadeInSection>

      {/* Botões Fixos - Removendo a animação deles */}
      <a
        href="mailto:vornixconsultoria@gmail.com"
        className="fixed-email-button"
      >
        Enviar E-mail
      </a>

      <a href="https://wa.me/5500000000000" className="fixed-wpp-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

const servicos = [
  {
    titulo: "Consultoria em TI",
    descricao:
      "Transfromação digital para otimização de processos e eficiência operacional.",
  },
  {
    titulo: "Automação de Sistema",
    descricao:
      "Automatize suas operações para aumentar a produtividade e reduzir erros.",
  },
  {
    titulo: "Infraestrutura de Nuvem",
    descricao:
      "Soluções de nuvem escaláveis e seguras para garantir alta disponibilidade.",
  },
  {
    titulo: "Inteligência Artificial",
    descricao:
      "Aplicação de IA para análise de dados e tomada de decisões mais assertivas.",
  },
  {
    titulo: "Segurança da Informação",
    descricao:
      "Proteja seus dados e informações com as melhores práticas de segurança.",
  },
];

const planos = [
  {
    nome: "Básico",
    valor: "R$ 1.500/mês",
    itens: ["Suporte técnico 24/7", "Consultoria em TI", "Relatórios mensais"],
  },
  {
    nome: "Pro",
    valor: "R$ 3.000/mês",
    itens: [
      "Consultoria estratégica",
      "Automação de processos",
      "Análise de dados",
      "Relatórios customizados",
    ],
  },
  {
    nome: "Business",
    valor: "Sob consulta",
    itens: [
      "Projetos personalizados",
      "Consultoria técnica especializada",
      "Desenvolvimento de soluções sob medida",
    ],
  },
];

export default App;
