## Arquitetura

O projeto segue uma arquitetura em camadas, com separação clara entre a interface de usuário (HTTP), a lógica de negócio (services) e a infraestrutura (repositories, banco de dados, armazenamento de arquivos etc.).

## Design

O projeto segue os princípios de SOLID:

- **S**: Single Responsibility Principle - um módulo (conceito de unidade de código, como uma classe ou um service) deve ser responsável por um, e apenas um, ator.
- **O**: Open/Closed Principle (Princípio Aberto/Fechado) - módulos devem estar abertos para extensão, mas fechados para modificação.
- **L**: Liskov Substitution Principle (Princípio da Substituição de Liskov) - subclasses devem poder substituir suas classes base sem alterar o comportamento esperado.
- **I**: Interface Segregation Principle (Princípio da Segregação de Interfaces) - interfaces específicas são melhores do que uma interface genérica e inchada.
- **D**: Dependency Inversion Principle (Princípio da Inversão de Dependência) - módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações.

Os serviços do projeto seguem os princípios do Service Layer, do Martin Fowler, mantendo a lógica de negócio isolada da infraestrutura e da interface de usuário.

## Comandos

Todos rodam no contêiner `chat-api`, a partir da raiz do repositório:

```bash
docker compose -f compose.yaml exec chat-api <comando>
```

| Comando | O que faz |
| --- | --- |
| `pnpm start:dev` | Sobe a API em modo watch (`http://localhost:3001` na máquina) |
| `pnpm test` | Suíte de unidade (`*.spec.ts`) |
| `pnpm test:int` | Suíte de integração (`*.int-spec.ts`) |
| `pnpm test:e2e` | Suíte de ponta a ponta (`test/*.e2e-spec.ts`) |
| `pnpm test:watch` | Roda os testes de unidade em modo watch |
| `pnpm test:cov` | Roda os testes de unidade e gera relatório de cobertura |
| `pnpm lint` | ESLint com as regras do `typescript-eslint` que usam tipos e o Prettier como regra |
| `pnpm format` | Prettier em `src/` e `test/` |
| `pnpm exec tsc --noEmit` | Checagem de tipos |
| `pnpm build` | Compila para `dist/` |

O `pnpm lint` roda com `--fix`: corrige o que dá e aponta o resto. O `pnpm format` reescreve os arquivos com o Prettier.

## Testes

O arquivo de teste leva o nome do arquivo testado. O sufixo define o nível do teste e a suíte que o executa:

| Nível | Sufixo | Onde fica | O que exercita |
| --- | --- | --- | --- |
| Unidade | `.spec.ts` | Ao lado do código, em `src/` | Testes de unidade testam uma classe isolada |
| Integração | `.int-spec.ts` | Ao lado do código, em `src/` | Testes de integração exercitam uma peça com suas dependências reais |
| Ponta a ponta | `.e2e-spec.ts` | Em `test/` | A aplicação inteira por HTTP |

**Onde cada regra é provada:** as regras de negócio são provadas pelos testes de ponta a ponta, pelas rotas, com banco real. O teste de unidade de um service é opcional, e vale quando a regra tem muitos casos que seriam lentos ou repetitivos pelas rotas. Funções puras têm teste de unidade. A spec da funcionalidade pode restringir isso, e ela prevalece.

## Aplicação HTTP

- **Filtro de erros e validação:** O filtro de erros e a validação de entrada são registrados no `AppModule` (`APP_FILTER` e `APP_PIPE`), e não no `main.ts`, para valerem também nos testes.

## A camada de serviços

Um service recebe e devolve dados simples e tipos do domínio. Ele tem de poder ser chamado de um controller, de um gateway de WebSocket ou de um teste unitário sem nenhuma adaptação.

Antes de adicionar um import num arquivo de service, confira em qual dos dois grupos ele cai:

**Pode importar** e usar no service:

- `Injectable`, `Inject` e `Logger` do `@nestjs/common`
- Entidades, tipos e erros de domínio do próprio módulo
- O repository e os outros services do próprio módulo
- Utilitários puros, sem entrada e saída

**Não pode importar** e usar no service:

- `HttpException` e as filhas (`NotFoundException`, `BadRequestException` etc.) e `HttpStatus`
- `Request` e `Response` do Express, e os decorators de rota (`@Req`, `@Body`, `@Headers`)
- Repository, tabelas ou tipos internos de outro módulo
- `process.env`, direto. A configuração chega pelo módulo de config, por injeção.

A mesma regra vale para o repository: ele não importa nada de HTTP.

### Erros

O service lança erro de domínio, e só o exception filter global conhece o HTTP.

## Configuração

Toda configuração entra no projeto por um módulo de config próprio, em `src/config/`, feito com `@nestjs/config`.

# Nest API Coding Standards

## Idioma

- **Identificadores em inglês:** variáveis, funções, classes, tipos e arquivos.
- **Texto em português:** comentários, mensagens de erro de domínio, mensagens de log e nomes de teste (`describe` e `it`).

## Classes e tipos

- Classe com nomes no estilo `PascalCase`.
- **Classe com o papel no fim:** `SessionsService`, `LoginDto`, `NotAMemberError`.
- **Conjunto fechado de valores é união de strings em `snake_case`, sem `enum`:** `type SortOrder = 'asc' | 'desc'`.

## Variáveis e constantes

- Variável em `camelCase`.
- **Constante de módulo em `SCREAMING_SNAKE_CASE`:** `API_PREFIX`, `USER_FIELDS`, `INTERNAL_ERROR`.
- **Token de injeção** é um `Symbol` em `SCREAMING_SNAKE_CASE`, com a descrição igual ao nome, exportado junto da interface: `OBJECT_STORAGE = Symbol('OBJECT_STORAGE')`.
- **Configuração de um assunto** em `camelCase` com o sufixo `Config`, criada com `registerAs`: `storageConfig`, `rateLimitConfig`.
- **Dependência injetada leva o nome do papel, sem o sufixo do tipo:** `private readonly users: UsersService`, `storage`, `passwords`, `config`.
- **Booleano** começa com `is`, `has` ou `can`, ou é um adjetivo ou particípio: `isUniqueViolation`, `created`.

## Funções e métodos

- Função em `camelCase`.
- **Repository:** verbo do que o método faz no dado: `findByEmail`, `findOrCreate`, `revokeSession`.
- **Leitura de um registro:** a ausência que é resultado de negócio devolve `null` (`findOneBy`, `findOne`). O registro que tem de existir, principalmente dentro de uma transação, usa a variante que lança (`findOneByOrFail`, `findOneOrFail`). Se outro processo pode apagá-lo, a ausência é resultado de negócio, e a leitura devolve `null`.
- **Service:** verbo da ação de negócio, do jeito que o caso de uso é chamado: `login`, `logout`, `sendMessage`.

# Nest API Controller Rules

O controller adapta o HTTP: recebe a requisição, valida a entrada pelo DTO, chama o service e devolve o resultado. Ele não decide nada.

- **Uma chamada de service que realiza mudança no sistema por rota**: cada rota que altera o estado do sistema deve chamar um único método de service que execute a mudança. Services para consulta podem ser chamados para ajudar na preparação ou validação dos dados, mas a alteração principal deve ser feita por um único método de service.
- **Nunca o repository.** O controller não injeta repository, nem o do próprio módulo.
- **Não lança erro.** O controller não lança erro de nenhum tipo, nem `HttpException` (`NotFoundException`, `BadRequestException` etc.). Quem decide que algo deu errado é o service, com um erro de domínio. O erro sobe até o exception filter, que monta a resposta.
- **`try/catch` só para efeito colateral do próprio controller,** como registrar algo ou liberar um recurso aberto na rota. No fim, o `catch` relança o mesmo erro: não devolve valor, não troca o erro por outro e não monta resposta com `res.status(...).json(...)`.

# Nest API Errors Rules

## Erros da API

Todo retorno de erro sai do exception filter global. Nenhum outro lugar monta resposta de erro.

- **No service e no guard:** uma regra violada lança um erro de domínio, uma classe própria que carrega o `code` estável do contrato (`not_a_member`, `rate_limit_exceeded`) e os dados do caso. O erro não sabe o status HTTP. O `AuthGuard`, que lança `UnauthenticatedError`, é o exemplo do guard.
- **No exception filter:** a resposta HTTP de erro é desenhada num único lugar, o filter global de `src/common/errors/`. Ele traduz o erro de domínio em status e corpo `application/problem+json`, e é ali que mora o mapa de `code` para status.
- **Erro de domínio:** estende `DomainError`, de `src/common/errors/`, e fica no módulo dono da regra. Um `code` novo entra na mesma tarefa no tipo `ErrorCode` e no mapa de status do filter. A mensagem do erro vai para o campo `detail` da resposta, então não traz detalhes internos.
- **Erro inesperado:** o filter registra em log e responde 500, sem expor mensagem interna nem stack trace. Isso vale também para o erro de uma biblioteca que traz um `statusCode` próprio: o filter só aceita o status de uma `HttpException` e dos erros do leitor do corpo do Express.
- **Erro de fornecedor/camada de infraestrutura:** erros gerados por bibliotecas externas ou pela camada de infraestrutura, como registro inexistente, 404, falha de conexão ou timeout. Esses erros não são tratados como de domínio e são capturados pelo filter como erros inesperados.

# Nest API Testing Rules

Tópico a considerar na edição ou leitura de um teste.

## Testes da API

## Forma de todo teste

- **AAA em três blocos.** Arrange, Act e Assert ficam separados por uma linha em branco, sem comentários marcando cada um. Sem preparação, são dois blocos.
- **Um único Act:** a chamada que o teste prova. Na ponta a ponta, é uma requisição só. Cadastrar, entrar e o que mais o teste precisar antes ficam no Arrange, pelos atalhos de `authRoutes`.
- **Sem asserção no Arrange.** Uma preparação que pode falhar usa um atalho que falha sozinho.
- **O nome descreve o comportamento observável,** em português e no presente, sem "deve": `responde 201 e grava a mensagem na conversa`, `responde 403 quando a pessoa não é membro da conversa`.
- **Prove o efeito, e não a chamada.** A asserção confere o resultado: a resposta HTTP, a linha no banco. Um `toHaveBeenCalled` num dublê só vale quando a chamada é o próprio efeito, como um log.
- **Cada teste cria os próprios dados,** com `uniqueEmail()` e os atalhos da base, e não depende da ordem nem do dado de outro teste.
- **Orientado a comportamento observável.** O teste deve focar em verificar o efeito que a ação produziu, não somente detalhes internos ou implementações específicas.

## Tipos de teste

### Teste de unidade

**Quando não for um artefato do Nest,** o teste é de unidade e segue a regra de criar a classe com `new`, sem carregar módulos do Nest.
**Quando for um artefato do Nest,** o teste é de integração e segue a regra de criar o módulo com `Test.createTestingModule`, sem `overrideProvider`.

### Teste de integração

**Quando não for um artefato do Nest,** o teste de integração pode usar a dependência real sem montar módulo nenhum.
**Quando for um artefato do Nest,** o teste de integração deve montar o módulo com `Test.createTestingModule`, importando o módulo real da peça e sem `overrideProvider`.

### Teste end-to-end

**O teste end-to-end** sempre interage com a aplicação pelo HTTP. Ele deve usar `createTestApp()` para subir a aplicação e `app.close()` para fechá-la no fim.


## Preparar e desfazer com hooks

Quando for necessário preparar ou limpar recursos compartilhados entre testes, use os hooks apropriados, como `beforeAll`, `beforeEach`, `afterEach` e `afterAll`, etc. Prefira velocidade e simplicidade, evitando criar dependências complexas entre os testes.