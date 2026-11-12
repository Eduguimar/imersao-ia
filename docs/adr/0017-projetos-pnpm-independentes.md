---
status: aceita
---

# 0017 · Projetos pnpm independentes, sem workspace

Os projetos TypeScript ficam em pastas independentes, cada qual com seu `package.json` e lockfile, sem workspace pnpm. O pacote compartilhado `chat-events` é consumido por dependência local nos dois projetos.

Descartadas: um workspace pnpm único para todos os projetos TypeScript; duplicar os tipos de eventos em cada aplicação.
Custo aceito: mudanças no pacote compartilhado exigem reinstalação nos projetos consumidores e podem exigir sincronizar versões de dependências.
