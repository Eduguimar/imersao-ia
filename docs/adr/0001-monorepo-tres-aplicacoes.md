---
status: aceita
---

# 0001 · Monorepo com três aplicações

O BFF, a API do chat e o Serviço de agentes ficam no mesmo repositório e são implantados como três aplicações separadas. Isso mantém o código do produto próximo e permite implantar cada responsabilidade de forma independente.

Descartadas: repositórios separados, que tornam mudanças coordenadas mais difíceis; uma única aplicação implantável, que acopla o ciclo de implantação do chat aos agentes.
Custo aceito: o repositório reúne tecnologias e ciclos de implantação diferentes.
