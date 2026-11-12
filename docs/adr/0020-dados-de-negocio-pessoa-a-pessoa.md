---
status: aceita
---

# 0020 · Mensagem de negócio emitida pessoa a pessoa

Mensagens marcadas como dados de negócio são emitidas individualmente no WebSocket: quem tem permissão recebe o conteúdo e os demais recebem a versão bloqueada. Isso preserva a confidencialidade dentro de uma conversa compartilhada e também se aplica aos eventos de reconexão.

Descartadas: emitir um único evento com o conteúdo para todos os membros; ocultar a mensagem sem oferecer uma representação bloqueada aos demais.
Custo aceito: a emissão exige verificar permissões e produzir eventos por destinatário, aumentando o trabalho de distribuição.
