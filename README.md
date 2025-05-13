# 🎮 DalyGames

DalyGames é uma aplicação web construída com **Next.js**, estilizada com **TailwindCSS**, escrita em **TypeScript** e utilizando **React Icons**. O projeto consome uma **API externa** para exibir informações relacionadas a jogos, proporcionando uma experiência visual limpa e moderna.

🚀 Acesse a demo hospedada na Vercel: [https://dalygames.vercel.app](https://dalygames.vercel.app)

---

## 📦 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- API externa para consumo de dados

---

## ⚙️ Como rodar localmente

1. **Clone o repositório**

```bash
git clone https://github.com/antoni0jsneto/dalygames.git
cd dalygames
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Crie o arquivo `.env.local`**

Na raiz do projeto, crie um arquivo chamado `.env.local` com o seguinte conteúdo:

```env
NEXT_API_URL=https://sua-api.com.br/endpoint
PROJECT_URL=http://localhost:3000
```

> 🔐 Substitua os valores conforme sua necessidade ou ambiente.

4. **Inicie o projeto**

```bash
npm run dev
# ou
yarn dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deploy

O projeto está publicado na [Vercel](https://vercel.com/), o que permite CI/CD automático para cada push na branch `main`.

Demo pública: [https://dalygames.vercel.app](https://dalygames.vercel.app)

---

## 📂 Estrutura de Pastas

```bash
.
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── public/             # Arquivos estáticos
├── styles/             # Estilos globais (Tailwind)
├── types/              # Tipagens personalizadas (TypeScript)
├── .env.local.example  # Exemplo do arquivo de variáveis de ambiente
├── tailwind.config.js  # Configuração do Tailwind
└── tsconfig.json       # Configuração do TypeScript
```

---

## ✨ Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir **issues**, **forkar** o projeto e enviar **pull requests**.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](LICENSE) para detalhes.
