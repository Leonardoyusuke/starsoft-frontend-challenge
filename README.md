# 🧪 Teste para Desenvolvedor(a) Front-End Next.js

Bem-vindo(a)! Este repositório contém a solução do teste técnico para a vaga de Desenvolvedor(a) Front-End, com foco em **Next.js**, **React**, **Redux Toolkit**, **React Query**, animações com **Framer Motion**, e ambiente Dockerizado. O desafio propõe a construção de um marketplace de NFTs com funcionalidades de carrinho de compras.

---

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos

- Docker e Docker Compose instalados
  - [Instalar Docker](https://docs.docker.com/get-docker/)
  - [Instalar Docker Compose](https://docs.docker.com/compose/)

---

### 🐳 Rodando com Docker

```bash
# Clone o repositório
git clone https://github.com/Leonardoyusuke/starsoft-frontend-challenge.git
cd starsoft-frontend-challenge

# Rode a aplicação
docker-compose up
```

Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

---

### 💻 Rodando localmente (sem Docker)

```bash
# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

---

## ✨ Funcionalidades implementadas

- 🖼️ Listagem de NFTs com dados reais da API
- 🔍 Página de detalhes de cada NFT com rotas dinâmicas
- 🛒 Carrinho de compras com gerenciamento global via Redux Toolkit
- 🔄 Consumo de API com React Query e uso de getStaticProps / getServerSideProps
- 📱 Layout responsivo baseado no design fornecido no Figma
- 💅 Estilização com Styled Components
- 🎬 Animações com Framer Motion (transições de página, hover em cards, etc.)
- ⚙️ Configuração completa com Docker e Docker Compose
- 🧪 Testes unitários e de integração com Jest + React Testing Library

---

## 🧠 Tecnologias utilizadas e justificativas

| Tecnologia            | Justificativa                                           |
| --------------------- | ------------------------------------------------------- |
| **Next.js**           | Framework robusto com SSR, SSG e rotas dinâmicas        |
| **React**             | Biblioteca declarativa e eficiente para UI              |
| **Redux Toolkit**     | Simplificação da gestão de estado global                |
| **React Query**       | Controle de dados assíncronos com cache e revalidação   |
| **Styled Components** | Estilo com escopo por componente, sem conflitos globais |
| **Framer Motion**     | Animações modernas e fluídas com ótima DX               |
| **Jest + RTL**        | Testes confiáveis de componentes e lógicas              |
| **Docker**            | Setup unificado do ambiente de desenvolvimento          |

---

## 🧪 Testes

Os testes foram implementados com **Jest** e **React Testing Library**, cobrindo funcionalidades principais como:

- Adição de itens no carrinho
- Renderização de componentes principais
- Interações básicas com a interface

Para rodar os testes:

```bash
npm run test
```

---

## 🧑‍💻 Autor

Desenvolvido por **Leonardo Yusuke Hirano**  
🔗 [github.com/leonardoyusuke](https://github.com/leonardoyusuke)

---

## ✅ Entrega

Repositório disponível publicamente em:  
🔗 [https://github.com/Leonardoyusuke/starsoft-frontend-challenge](https://github.com/Leonardoyusuke/starsoft-frontend-challenge)

Todo o histórico de commits reflete o andamento real do desenvolvimento, com mensagens claras e significativas.

---
