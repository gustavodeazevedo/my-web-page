# VORNIX - Consultoria de Tecnologia

> ⚠️ **Nota importante**: O projeto foi migrado do Create React App para Vite, resultando em melhor performance de desenvolvimento e build otimizado.

## 🚀 Tecnologias Utilizadas

- React 18
- Vite
- Tailwind CSS
- PostCSS
- SVG para ícones e elementos gráficos

## 🛠️ Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vornix.git

# Entre na pasta do projeto
cd vornix/vornixConsultoria

# Instale as dependências
npm install
# ou
yarn install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

O site estará disponível em `http://localhost:5173/`

## 📂 Estrutura do Projeto

```
vornixConsultoria/
├── src/
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globais e específicos
│   ├── index.jsx       # Ponto de entrada da aplicação
│   └── images/         # Imagens e SVGs
│       ├── pattern-vornix.svg
│       └── vornix 1.svg
├── index.html          # Template HTML
├── package.json        # Dependências e scripts
├── postcss.config.js   # Configuração do PostCSS
├── tailwind.config.js  # Configuração do Tailwind
└── vite.config.js      # Configuração do Vite
```

## 🔄 Atualizações Recentes (Maio/2025)

### Migração de Framework

- **Vite**: Migração do Create React App para Vite, proporcionando Hot Module Replacement (HMR) mais rápido
- **Build Otimizado**: Redução significativa do tempo de build e tamanho dos arquivos de produção
- **ESBuild**: Utilização do ESBuild para compilação mais eficiente de JavaScript

### Melhorias de Interface

- **Layout Responsivo**: Implementação completa de design responsivo para dispositivos móveis, tablets e desktops
- **Menu Mobile**: Adicionado menu mobile com animação suave de abertura e fechamento
- **Efeitos Visuais**: Implementação de gradientes animados e decorações visuais
- **Melhorias em Cards**: Cards de serviços e planos redesenhados com animações e destaque visual

### Otimizações

- **Componentes Reutilizáveis**: Implementação do componente `FadeInSection` para animações de entrada
- **SVG Otimizados**: Substituição de emojis por ícones SVG para melhor qualidade visual
- **Botões de Contato**: Botões fixos de WhatsApp e email com melhor contraste e acessibilidade

### Performance

- **Animações Eficientes**: Uso de Intersection Observer API para carregar animações apenas quando visíveis
- **Otimização de Imagens**: Uso de SVG para elementos gráficos garantindo qualidade em qualquer resolução

## 👨‍💻 Contribuição

Para contribuir com o projeto:

1. Crie uma branch para sua feature: `git checkout -b feature/nova-funcionalidade`
2. Faça commit das alterações: `git commit -m 'feat: adiciona nova funcionalidade'`
3. Envie para a branch: `git push origin feature/nova-funcionalidade`
4. Abra um Pull Request

### Padrões de Código

- Utilizamos convenções de nomenclatura camelCase para variáveis e funções
- Componentes React devem ser nomeados em PascalCase
- Commits devem seguir o padrão Conventional Commits (feat, fix, docs, style, refactor, etc.)
