# api-main


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/EduardoMoia22/backend-sistema-tcc.git
```

Entre no diretório do projeto

```bash
  cd api-main
```

Instale as dependências

```bash
  npm install
```

Adicione a variável de ambiente em seu .env, conforme as suas configurações

```bash
  DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Sincronize os models do prisma com seu banco de dados

```bash
  npx prisma db push
```

Inicie o servidor

```bash
  npm run dev
```

