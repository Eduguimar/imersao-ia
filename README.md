# Expert Chat

## Ambiente local

O ambiente local usa Docker Compose. É necessário ter Docker com o plugin Compose instalado.

```bash
docker compose up -d --build
docker compose logs -f web chat-api
```

Na primeira inicialização, cada contêiner instala as dependências no diretório do repositório
compartilhado com o host. Aguarde a instalação terminar nos logs e use `Ctrl+C` para encerrar o
acompanhamento. Os servidores das aplicações são iniciados manualmente, em terminais separados:

```bash
docker compose exec web pnpm dev --hostname 0.0.0.0
docker compose exec chat-api pnpm start:dev
```

A web fica em <http://localhost:3000> e a API em <http://localhost:3001>. Postgres fica em
`localhost:5432`, e o endpoint S3 do SeaweedFS em `http://localhost:8333`.

O Postgres local cria os bancos `chat`, `agents` e `business`. As credenciais são apenas para
desenvolvimento: `postgres/postgres` para administração, `chat/chat`, `agents/agents`,
`business/business` e `business_readonly/business_readonly`. O armazenamento S3 usa
`local-access-key` e `local-secret-key`.

Para parar os contêineres preservando os dados:

```bash
docker compose down
```

Para apagar também os dados persistidos do Postgres e do SeaweedFS:

```bash
docker compose down -v
```
