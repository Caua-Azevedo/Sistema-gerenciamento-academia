# IronPro Frontend

## 📌 Nome do Projeto

**IronPro Frontend**

Sistema web desenvolvido para auxiliar no gerenciamento de treinos, consultas e acompanhamento de usuários em uma academia.

---

# 👥 Integrantes do Grupo

* Integrante 1 Roberto Cauã
* Integrante 2 Louhan Tinnis
* Integrante 3 Samuel

---

# 💡 Descrição da Ideia do Sistema

O IronPro é uma plataforma voltada para academias e alunos, permitindo o gerenciamento de treinos, consultas e acompanhamento das atividades físicas.

O sistema possui funcionalidades que facilitam tanto a experiência do aluno quanto a organização das informações da academia.

Entre os principais recursos estão:

* Cadastro e login de usuários
* Dashboard principal com visão geral do sistema
* Criação e gerenciamento de treinos
* Visualização de treinos cadastrados
* Solicitação de consultas
* Controle das informações do usuário
* Interface moderna e responsiva

O objetivo do projeto é oferecer uma experiência simples, organizada e eficiente para o gerenciamento de atividades fitness.

---

# 🛠️ Tecnologias Utilizadas

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Wouter
* Framer Motion
* Recharts
* Radix UI

## Backend

* Node.js
* Express

## Outras Bibliotecas

* Axios
* React Hook Form
* Zod
* Lucide React

---

# 📱 Explicação das Telas Desenvolvidas

## 🏠 Home

Tela inicial do sistema, responsável por apresentar a plataforma e direcionar o usuário para login ou cadastro.

## 🔐 Login

Tela responsável pela autenticação do usuário no sistema.

## 📝 Register

Tela de cadastro de novos usuários.

## 📊 Dashboard

Painel principal do sistema contendo informações gerais, métricas e atalhos importantes.

## 🏋️ Workouts

Tela responsável pela visualização dos treinos disponíveis.

## ➕ CreateWorkout

Permite criar novos treinos personalizados.

## 📋 MyWorkouts

Tela onde o usuário visualiza os próprios treinos cadastrados.

## 📅 Consultations

Área destinada ao gerenciamento e visualização de consultas.

## 📨 RequestConsultation

Tela para solicitar consultas e acompanhamentos.

## ❌ NotFound

Tela exibida quando uma rota inválida é acessada.

---

# 📂 Organização das Pastas do Projeto

```bash
ironpro-frontend/
│
├── client/
│   └── src/
│       ├── components/      # Componentes reutilizáveis
│       ├── contexts/        # Contextos globais da aplicação
│       ├── hooks/           # Hooks personalizados
│       ├── lib/             # Funções auxiliares e utilitários
│       ├── pages/           # Páginas do sistema
│       ├── App.tsx          # Componente principal
│       └── main.tsx         # Inicialização da aplicação
│
├── server/
│   └── index.ts             # Servidor Express
│
├── shared/
│   └── const.ts             # Constantes compartilhadas
│
├── patches/                 # Correções de dependências
│
├── package.json             # Dependências e scripts
└── README.md                # Documentação do projeto
```

---

# ▶️ Instruções para Rodar o Projeto

## 1. Clone o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

---

## 2. Acesse a pasta do projeto

```bash
cd ironpro-frontend
```

---

## 3. Instale as dependências

Utilizando npm:

```bash
npm install
```

Ou utilizando pnpm:

```bash
pnpm install
```

---

## 4. Execute o projeto

```bash
npm run dev
```

Ou:

```bash
pnpm dev
```

---

## 5. Acesse no navegador

```bash
http://localhost:5173
```

---

# 🚀 Scripts Disponíveis

```bash
npm run dev       # Executa o projeto em desenvolvimento
npm run build     # Gera a versão de produção
npm run preview   # Visualiza a build
npm run check     # Verifica erros TypeScript
npm run format    # Formata o código
```

---

# 📌 Considerações Finais

O projeto IronPro foi desenvolvido com foco em organização, responsividade e facilidade de uso. A aplicação utiliza tecnologias modernas do ecossistema React, proporcionando uma interface dinâmica e eficiente.
