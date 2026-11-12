---
status: aceita
---

# 0003 · Serviço de agentes em Python com Google ADK

Os agentes são executados em Python com Google ADK, permitindo organizar agentes como módulos e manter o ciclo de execução e as sessões no framework escolhido. A decisão também permite trocar o provedor de modelo por configuração, conforme a restrição do produto.

Descartadas: implementar agentes no mesmo runtime TypeScript do chat; integrar diretamente cada provedor sem um framework de agentes.
Custo aceito: a solução opera runtimes e ferramentas de desenvolvimento diferentes; o motivo detalhado da escolha do ADK está a definir.
