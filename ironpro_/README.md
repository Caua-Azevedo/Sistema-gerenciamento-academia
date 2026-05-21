# IronPro - Gestão de Treinos para Academias

## 📋 Informações do Projeto

**Nome do Projeto:** IronPro

**Integrantes do Grupo:**
- Roberto Cauã
- Louhan Tinnis
- Samuel

**Descrição:** IronPro é uma plataforma completa de gestão de treinos para academias e personal trainers. O sistema resolve o problema de controle desorganizado de treinos e alunos, centralizando todas as informações em um único lugar, eliminando o uso de papéis, WhatsApp e planilhas desorganizadas.

## 💡 Ideia do Sistema (Problema que Resolve)

Muitas academias e personal trainers ainda fazem o controle de treinos e acompanhamento de alunos de forma manual ou desorganizada. O IronPro resolve isso criando uma plataforma onde:

- **Professores** podem montar e atribuir treinos personalizados
- **Alunos** podem solicitar consultoria e acompanhar sua evolução
- **Academias** centralizam tudo em um único sistema profissional

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Framework JavaScript para interface de usuário
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS 4** - Framework de estilos utilitários
- **Wouter** - Roteamento leve e eficiente
- **shadcn/ui** - Componentes UI de alta qualidade
- **Lucide React** - Ícones modernos e limpos
- **Sonner** - Sistema de notificações elegante
- **Vite** - Build tool rápido e moderno

### Gerenciamento de Estado
- **React Context API** - Gerenciamento de autenticação e dados
- **localStorage** - Persistência de dados do usuário

## 📱 Telas Implementadas

### 1. Landing Page (Home)
Página inicial atrativa com apresentação do produto, funcionalidades principais, estatísticas de uso e call-to-action para registro/login.

### 2. Login
Seleção de tipo de usuário (Aluno/Professor), autenticação com email e senha, dados de demonstração inclusos e redirecionamento automático para dashboard.

### 3. Registro
Criação de nova conta, seleção de tipo de usuário, validação de dados e confirmação de senha.

### 4. Dashboard
Página inicial após login com estatísticas personalizadas:
- **Para Professores:** número de treinos criados, alunos ativos, solicitações pendentes, taxa de conclusão
- **Para Alunos:** treinos atribuídos, professores, solicitações de consultoria, progresso geral

### 5. Meus Treinos (Professor)
Listagem completa de treinos criados com cards informativos, lista de exercícios, alunos atribuídos e opções de editar/deletar.

### 6. Criar/Editar Treino (Professor)
Formulário completo para criar treinos com adição dinâmica de exercícios, validação de dados e botões de salvar/cancelar.

### 7. Meus Treinos (Aluno)
Visualização dos treinos atribuídos com informações do professor, preview dos exercícios e botão para ver detalhes completos.

### 8. Solicitar Consultoria (Aluno)
Formulário para solicitar consultoria com campos pré-preenchidos, área de texto para descrição e validação de dados.

### 9. Gerenciar Solicitações (Professor)
Painel de gerenciamento com abas para Pendentes, Aceitas e Recusadas, estatísticas e botões para aceitar/recusar.

### 10. Layout de Dashboard
Componente reutilizável com sidebar navegável, menu responsivo, informações do usuário e botão de logout.

## 📁 Organização das Pastas do Projeto

```
ironpro-frontend/
├── client/
│   ├── public/
│   │   └── .gitkeep
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   ├── Map.tsx
│   │   │   └── ui/
│   │   ├── contexts/
│   │   │   ├── AuthContext.tsx
│   │   │   ├── DataContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Workouts.tsx
│   │   │   ├── CreateWorkout.tsx
│   │   │   ├── MyWorkouts.tsx
│   │   │   ├── RequestConsultation.tsx
│   │   │   ├── Consultations.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── const.ts
│   ├── index.html
│   └── tsconfig.json
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## 🚀 Instruções para Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm instalado

### Passos para Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/ironpro-frontend.git
   cd ironpro-frontend
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Abra no navegador:**
   - Acesse `http://localhost:3000`
   - A página será recarregada automaticamente ao salvar arquivos

### Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build
pnpm build            # Cria build para produção
pnpm preview          # Visualiza build de produção

# Verificação
pnpm check            # Verifica tipos TypeScript
pnpm format           # Formata código com Prettier
```

## 🔐 Credenciais de Demonstração

Para testar a aplicação, use as seguintes credenciais:

**Aluno:**
- Email: `aluno@ironpro.com`
- Senha: `123456`

**Professor:**
- Email: `professor@ironpro.com`
- Senha: `123456`

## 🎨 Design e Estilo

### Paleta de Cores
- **Primário:** #0066FF (Azul confiável)
- **Secundário:** #00D084 (Verde de sucesso)
- **Fundo:** #FFFFFF (Branco puro)
- **Texto:** #1A1A1A (Cinza profundo)
- **Bordas:** #E8E8E8 (Cinza claro)
- **Alerta:** #FF6B6B (Vermelho suave)

### Tipografia
- **Display:** Poppins Bold 700 (títulos principais)
- **Heading:** Poppins SemiBold 600 (seções)
- **Body:** Inter Regular 400 (conteúdo)
- **Small:** Inter Regular 400 com opacity (labels)

## ⚙️ Funcionalidades Implementadas (Fase 1)

### ✅ Obrigatórias
- [x] Cadastro e login com autenticação
- [x] CRUD de usuários (alunos e professores)
- [x] CRUD de treinos
- [x] Atribuição de treinos para alunos
- [x] Visualização de treinos pelo aluno
- [x] Navegação entre páginas com React Router
- [x] Dados mockados (sem backend)

### 🔸 Extras Implementados
- [x] Solicitação de consultoria pelo aluno
- [x] Gerenciamento de solicitações pelo professor
- [x] Dashboard com estatísticas personalizadas
- [x] Landing page profissional
- [x] Layout responsivo
- [x] Autenticação com contexto

## 📊 Estrutura de Dados

### Usuário
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  type: 'student' | 'teacher' | 'admin';
  avatar?: string;
}
```

### Treino
```typescript
interface Workout {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  teacherName: string;
  exercises: Exercise[];
  createdAt: string;
  assignedStudents?: string[];
}
```

### Exercício
```typescript
interface Exercise {
  id: string;
  name: string;
  series: number;
  reps: number;
  weight?: number;
  notes?: string;
}
```

### Solicitação de Consultoria
```typescript
interface ConsultationRequest {
  id: string;
  studentId: string;
  studentName: string;
  teacherId?: string;
  status: 'pending' | 'accepted' | 'rejected';
  message: string;
  createdAt: string;
}
```

## 🔄 Fluxo de Funcionamento

1. Usuário acessa a landing page e escolhe entre login ou registro
2. Faz login/registro selecionando seu tipo (aluno ou professor)
3. Aluno pode visualizar treinos atribuídos, solicitar consultoria e acompanhar progresso
4. Professor pode criar e gerenciar treinos, atribuir a alunos e aceitar/recusar solicitações
5. Sistema armazena dados em localStorage (mockado para esta fase)

## 📝 Notas Importantes

- Este é um frontend-only da Fase 1 com dados mockados
- Os dados são armazenados em localStorage e serão perdidos ao limpar o cache
- A autenticação é simulada para demonstração
- Próximas fases integrarão com backend real

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido por Roberto Cauã, Louhan Tinnis e Samuel**
