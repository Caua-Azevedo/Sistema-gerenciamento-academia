# IronPro - Sistema de Gerenciamento de Academia

Este é o projeto **IronPro**, uma plataforma completa para gestão de treinos, alunos e professores.

## 🚀 Como Executar o Projeto

O projeto utiliza **Vite** para o frontend e um servidor **Express** simples para servir os arquivos estáticos.

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (padrão) ou **pnpm**

### Passos para Instalação e Execução

1. **Navegue até a pasta do projeto:**
   ```bash
   cd projeto_academia
   ```

2. **Instale as dependências:**
   > **Importante:** Devido a conflitos de versões de plugins internos do Vite, utilize a flag `--legacy-peer-deps` se estiver usando npm.
   
   ```bash
   npm install --legacy-peer-deps
   # ou se preferir pnpm
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```
   O projeto estará disponível em `http://localhost:3000`.

### Estrutura do Projeto Corrigida

O projeto está organizado da seguinte forma:
- `/client`: Contém o código fonte do frontend (React + Vite).
- `/server`: Contém um servidor Express simples para produção.
- `/shared`: Código compartilhado entre cliente e servidor.
- `package.json`: Scripts de execução e dependências na raiz.

## 🔐 Credenciais de Teste

| Tipo de Usuário | Email | Senha |
| :--- | :--- | :--- |
| **Aluno** | `aluno@ironpro.com` | `123456` |
| **Professor** | `professor@ironpro.com` | `123456` |

## 🛠️ Comandos Disponíveis

- `npm run dev`: Inicia o ambiente de desenvolvimento.
- `npm run build`: Gera a versão de produção na pasta `dist`.
- `npm start`: Inicia o servidor de produção servindo a pasta `dist`.

---
*Projeto corrigido para evitar erros de dependência (ERESOLVE) e garantir a execução correta.*
