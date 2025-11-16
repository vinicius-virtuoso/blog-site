# Site Blog

![Preview](./preview/preview.png)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)


Este projeto é uma aplicação web composta por uma landing page e uma rota dedicada a artigos de blog. Ele foi desenvolvido com foco em performance, organização e experiência do usuário, utilizando tecnologias modernas do ecossistema JavaScript.

## 🚀 Tecnologias utilizadas
- **TypeScript** – Tipagem estática para um código mais seguro e escalável.
- **Next.js** – Framework React para criação de aplicações web com SSR, SSG e excelente performance.
- **Contentlayer** – Ferramenta para gerenciamento e tipagem de conteúdo estático, ideal para blogs baseados em Markdown.

## 📌 Funcionalidades
- Página inicial (Landing Page) apresentando o propósito do projeto.
- Rota exclusiva para o blog, listando posts gerenciados via Contentlayer.
- Geração de páginas estáticas dos artigos.

## 📁 Estrutura do Projeto
```
/
├── posts/                  # Arquivos Markdown dos posts
├── src/
│   ├── pages/              # Rotas do Next.js
│   ├── components/         # Componentes reutilizáveis
│   ├── styles/             # Estilos globais e módulos
│   └── lib/                # Funções auxiliares
│   └── templates/          # Secessões separadas por partes do site
└── contentlayer.config.ts  # Configuração do Contentlayer
```

## ▶️ Como executar o projeto
1. Instale as dependências:
```
npm install
```
2. Execute o servidor de desenvolvimento:
```
npm run dev
```
3. Acesse no navegador:
```
http://localhost:3000
```

## 🧱 Build para produção
```
npm run build
npm start
```

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar conforme necessário.

