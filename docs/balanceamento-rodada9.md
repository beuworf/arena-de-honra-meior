# Balanceamento — rodada 9 (solo, meta: fase 5)

Meta pedida: no solo, toda build chega pelo menos à fase 5 (o castelo), com fase média entre 5,0 e 5,9.
Bot jogando sozinho, raça neutra, até 30 min de jogo por partida (no máximo até a fase 10), 32 ou 48 partidas por build no ajuste final, já com o sistema de combo (rank D–SSS) e as mudanças do Maquinista.

O ajuste (`SBS0` em `index.html`) multiplica o dano causado e o dano recebido da build, por cima do ajuste geral `SB0`. Foi calibrado no solo e, a pedido, vale também no cooperativo (cada jogador usa o ajuste da própria build), assim como as mudanças nas construções do Maquinista e as 12 peças iniciais.

| Build | Ajuste solo (dano causado / dano recebido) | Fase média | Mínima–máxima | Chegou à fase 5 | Tempo médio | Abates |
|---|---|---|---|---|---|---|
| Guardião | ×1,41 / ×0,71 | 5,34 | 2–8 | 62% | 19,3 min | 745 |
| Disciplinado | ×1,63 / ×0,61 | 5,59 | 3–8 | 69% | 20,2 min | 918 |
| Berserk | ×1,39 / ×0,72 | 5,58 | 1–10 | 62% | 13,8 min | 736 |
| Caçador Arqueiro | ×2,42 / ×0,41 | 5,56 | 1–10 | 59% | 13,9 min | 639 |
| Caçador Selvagem | ×1,55 / ×0,65 | 5,25 | 1–10 | 53% | 13,3 min | 762 |
| Caçador Assassino | ×1,59 / ×0,63 | 5,31 | 1–9 | 59% | 12,3 min | 865 |
| Mago | ×1,65 / ×0,61 | 5,44 | 1–10 | 56% | 13,7 min | 1095 |
| Paladino | ×1,24 / ×0,81 | 5,28 | 3–10 | 66% | 14,9 min | 942 |
| Monge | ×1,26 / ×0,80 | 5,62 | 1–8 | 78% | 18,6 min | 1085 |
| Necromante | ×1,13 / ×0,88 | 5,25 | 2–10 | 53% | 11,9 min | 788 |
| Corrompido | ×0,96 / ×1,04 | 5,19 | 1–10 | 62% | 13,6 min | 915 |
| Xamã | ×1,11 / ×0,90 | 5,59 | 1–9 | 72% | 17,2 min | 1144 |
| Maquinista | ×0,55 / ×0,85 | 5,23 | 1–10 | 58% | 13,1 min | 819 |
| Armadilheiro | ×1,14 / ×0,88 | 5,66 | 1–9 | 66% | 17,3 min | 977 |

Média geral: 5,42

Como o laboratório chega nisso: cada build começa com ajuste 1, roda o bot, e a fase média de todas as rodadas entra numa regressão (fase contra o logaritmo do ajuste) que aponta o ajuste da fase 5,45. A última rodada é a verificação acima.

Maquinista: o reforço veio das construções (cada uma mais forte na sua especialidade, golem reparador novo, torreta de cura removida). Com elas, quem passava da fase 1 chegava quase sempre à fase 10, então o Maquinista começa com 12 peças (antes 6, dá para montar duas torretas logo no começo), recebe 15% menos dano e o multiplicador geral de dano dele (que vale também para torretas e golens) ficou em ×0,55 no solo. O golem reparador não fica imune perto das torretas e cada conserto de construção quebrada gasta 2 peças. Mesmo assim o bot ainda morre na fase 1 em cerca de 30% das partidas (no primeiro chefe) e, quando monta a base, costuma ir longe.
