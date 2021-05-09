# Backend Node iesb turma 2020-2

Servidor desenvolvido em NodeJS com um banco MongoDB para aulas da pós graduação. 


## Tecnologias
NodeJS, nodemon, express, MongoDB, mongoose.

## Getting Started
Navegue até a pasta do projeto e instale as dependências:
```sh
npm install
```

## Execução Ambiente produção
```sh
npm install
```
O script start é utilizado para execução em produção. 

## Execução Ambiente Desenvolvimento
```sh
npm run dev
```
O script dev é utilizado para desenvolvimento, esse conta com o nodemon e um arquivo .env.
Para o funcionamento correto crie um arquivo .env na pasta raiz contendo as variáveis de ambiente.

## Variáveis de Ambiente
Seja para produção ou desenvolvimento, essas são as variáveis de ambiente que devem ser iniciadas.

```sh
PORT=
MONGO_USER=
MONGO_PASSWORD=
MONGO_DATABASE_NAME=
```

## Banco de dados
Para o funcionamento da aplicação utilizamos um banco em nuvem da [Mongo Atlas](https://www.mongodb.com/cloud/atlas). 

## Contact Info
renefx@gmail.com
