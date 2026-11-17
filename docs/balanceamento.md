# Balanceamento: classes contra inimigos e chefes

Teste automático feito com um robô que joga sozinho cada build. O robô anda
até o inimigo, alterna golpes e habilidades, mantém distância nas classes de
longe, esquiva de metade dos ataques e bebe poção abaixo de 35 de vida. Ele
**não** bloqueia, não aparara, não pega itens do chão nem combina habilidades
de forma esperta. Por isso, os números servem para **comparar classes entre
si**, não para medir o jogo de uma pessoa boa.

- **Chefe / Grande / Grupo:** tempo, em segundos de jogo, para matar 1 chefe
  do nível 1 (140 de vida), 1 inimigo grande (14 de vida) e um grupo de 8
  comuns. O jogador não morre nesse teste. "—" quer dizer que não conseguiu em
  120 s.
- **Sobrevive / Abates / Nível:** média de 3 partidas normais, do zero até
  morrer (limite de 600 s).

| Build | Chefe | Grande | Grupo de 8 | Sobrevive | Abates | Nível |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Espada e Escudo | 59 s | 4,2 s | 3,9 s | 100 s | 50 | 1 |
| Espada Longa | **19 s** | 2,1 s | 7,2 s | 125 s | 76 | 1 |
| Dois Machados | 61 s | 4,4 s | 2,2 s | 74 s | 45 | 1 |
| Arco | 26 s | 2,7 s | 4,9 s | 105 s | 96 | 1 |
| Lança + Urso | 41 s | 2,0 s | 3,1 s | 89 s | 55 | 1 |
| Adagas | 25 s | 2,6 s | 2,2 s | **256 s** | **289** | 1 |
| Mago (Fogo) | 63 s | 3,7 s | 4,6 s | 90 s | 44 | 1 |
| Mago (Gelo) | **—** | 12,1 s | **18,6 s** | **69 s** | **18** | 1 |
| Mago (Sombra) | **—** | **120 s** | 4,2 s | 158 s | 49 | 1 |
| Mago (Ilusão) | 41 s | 10,5 s | 7,7 s | 92 s | 74 | 1 |
| Paladino | 31 s | 5,8 s | 2,1 s | 139 s | 126 | 1 |
| Pugilista | **74 s** | **11,3 s** | 4,6 s | 110 s | 51 | 1 |
| Necromante | 47 s | 3,2 s | 6,3 s | 103 s | 55 | 1 |

## Dano recebido por tipo de inimigo (média por partida)

O **arqueiro inimigo** é a maior fonte de dano em quase todas as builds, em
geral 40% a 60% de todo o dano recebido. O chefe quase não machuca.

Os números completos estão em `docs/balanceamento.json`. Para rodar de novo:
`node tools/balanceamento.js`, que precisa de Playwright e de uma cópia
`lab.html` com os ganchos de teste.

## Depois dos ajustes (rodada 2)

O que mudou, pensando no papel de cada classe:

- **Mago:** como troca de elemento na hora, ele é versátil de propósito e cada elemento fica mais fraco sozinho. Só o **Gelo** ganhou um pouco de dano (projétil de 0,8 para 1,05 e estilhaçar de 1 para 1,7), porque antes nem conseguia matar o chefe.
- **Pugilista:** é suporte no multiplayer. No **single player** ganha **+60% de dano**, já que não tem aliado para curar.
- **Adagas:** não mudaram. São frágeis e exigem habilidade.
- **Arqueiros inimigos:** atiram mais devagar (recarga de 2,2 s para 3,3 s), as flechas saem com desvio e o jogador tem **20% de chance de evadir**.
- **Chefe:**
  - **Arremessa inimigos menores** no jogador. Um círculo vermelho marca onde vão cair.
  - **Golpeia o chão:** um aviso vermelho de 1 s mostra o alcance (14 m) e depois uma onda de choque se espalha, causando dano e **atordoando** por 1,2 s. Dá para escapar **pulando por cima da onda** ou **esquivando** na hora certa.

| Build | Chefe (s) | Grande (s) | Sobrevive (s) | Abates | Dano do arqueiro inimigo | Dano do chefe |
| --- | --- | --- | --- | --- | --- | ---: |
| Espada e Escudo | 59,2 → **60,6** | 4,2 → 4,2 | 100 → **126** | 50 → 61 | 48% → **29%** | 105 |
| Espada Longa | 19,3 → **20,4** | 2,1 → 2,1 | 125 → **134** | 76 → 81 | 33% → **22%** | 7 |
| Dois Machados | 61,2 → **62,3** | 4,4 → 4,4 | 74 → **89** | 45 → 50 | 31% → **25%** | 0 |
| Arco | 26,3 → **28,9** | 2,7 → 3 | 105 → **116** | 96 → 97 | 61% → **29%** | 25 |
| Lança+Urso | 41,2 → **39,4** | 2 → 2 | 89 → **105** | 55 → 63 | 47% → **39%** | 4 |
| Adagas | 24,9 → **25** | 2,6 → 2,6 | 256 → **201** | 289 → 210 | 40% → **22%** | 131 |
| Mago (Fogo) | 63,4 → **66,9** | 3,7 → 3,7 | 90 → **97** | 44 → 47 | 50% → **25%** | 0 |
| Mago (Gelo) | — → **119,4** | 12,1 → 7,4 | 69 → **75** | 18 → 28 | 55% → **32%** | 0 |
| Mago (Sombra) | — → **—** | 120 → 120 | 158 → **337** | 49 → 127 | 47% → **25%** | 154 |
| Mago (Ilusão) | 40,5 → **42,1** | 10,5 → 11,1 | 92 → **101** | 74 → 83 | 51% → **35%** | 4 |
| Paladino | 31,4 → **31,4** | 5,8 → 5,8 | 139 → **148** | 126 → 129 | 27% → **16%** | 230 |
| Pugilista | 73,7 → **49,5** | 11,3 → 7,9 | 110 → **118** | 51 → 68 | 38% → **25%** | 18 |
| Necromante | 47 → **48,6** | 3,2 → 3,2 | 103 → **128** | 55 → 67 | 47% → **31%** | 0 |

**Leitura:**
- O arqueiro inimigo deixou de ser o principal problema, caindo de cerca de 45% para cerca de 25% do dano recebido.
- O chefe agora machuca quem chega até ele (o Paladino levou 230 de dano do chefe por partida).
- O Pugilista solo mata o chefe 33% mais rápido.
- O Mago de Gelo passou a conseguir matar o chefe, ainda que seja o mais lento, como esperado de um elemento de controle.
- O robô ainda não passa do nível 1. Ele não bloqueia, não pega cura do chão e não pula as ondas. O próximo ajuste a observar é o tempo até o chefe (100 s) e a quantidade de inimigos.
