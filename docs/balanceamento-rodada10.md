# Balanceamento — rodada 10 (solo, com os chefes finais, meta: fase 5)

Meta: no solo (dificuldade Normal), toda build chega em média à fase 5, com fase média entre 5,0 e 5,9.
Bot jogando sozinho, raça neutra, até 40 min de jogo por partida (no máximo até a fase 10), com os 5 chefes finais (Brunilda, Cavaleiro Sombrio, Faraó, Sentinelas do Portão e Demônio do Castelo).

O ajuste (`SBS0` em `index.html`) multiplica o dano causado e o dano recebido da build, por cima do ajuste geral `SB0`. Vale no solo e no cooperativo.

| Build | Ajuste (dano causado / recebido) | Fase média estimada (5 rodadas) | Rodada final (32 partidas) | Mínima–máxima | Chegou à fase 5 | Tempo médio | Abates |
|---|---|---|---|---|---|---|---|
| Guardião | ×1,35 / ×0,74 | **5,59** | 5,94 | 2–7 | 78% | 33,4 min | 1051 |
| Disciplinado | ×1,55 / ×0,65 | **5,25** | 4,75 | 1–7 | 56% | 23,0 min | 868 |
| Berserk | ×1,40 / ×0,72 | **5,38** | 5,22 | 2–10 | 53% | 19,5 min | 750 |
| Caçador Arqueiro | ×2,37 / ×0,42 | **5,44** | 5,41 | 2–9 | 69% | 19,7 min | 691 |
| Caçador Selvagem | ×1,46 / ×0,68 | **5,18** | 4,91 | 1–10 | 47% | 17,4 min | 811 |
| Caçador Assassino | ×1,51 / ×0,66 | **5,56** | 5,81 | 2–10 | 69% | 18,5 min | 1018 |
| Mago | ×1,55 / ×0,65 | **5,56** | 5,69 | 1–10 | 56% | 21,3 min | 1211 |
| Paladino | ×1,20 / ×0,83 | **5,55** | 5,78 | 2–8 | 81% | 28,1 min | 1201 |
| Monge | ×1,20 / ×0,83 | **5,34** | 4,72 (a 1,182) | 2–8 | 47% | 21,3 min | 945 |
| Necromante | ×1,11 / ×0,90 | **5,48** | 6,09 | 2–10 | 66% | 21,2 min | 1021 |
| Corrompido | ×1,06 / ×0,94 | **5,54** | 5,75 | 1–8 | 69% | 27,5 min | 1200 |
| Xamã | ×1,04 / ×0,96 | **5,65** | 5,84 | 1–8 | 69% | 27,3 min | 1380 |
| Maquinista | ×0,54 / ×0,85 | **5,64** | 5,84 | 1–10 | 62% | 20,2 min | 1019 |
| Armadilheiro | ×1,07 / ×0,94 | **5,22** | 4,25 (a 1,055) | 1–8 | 47% | 19,0 min | 751 |

Média geral estimada: 5,46 · média da rodada final: 5,43

**Como ler a tabela.** O resultado de uma rodada varia bastante: com 32 partidas, a fase média de uma build muda de 0,3 a 0,6 fase de uma rodada para outra só por sorte (Xamã, Mago e Monge, com o mesmo ajuste, deram de 5,5 a 6,5 em rodadas diferentes). Por isso a coluna principal é a **estimativa**, que junta as 5 últimas rodadas na mesma versão do jogo (112 partidas por build, uma regressão da fase contra o logaritmo do ajuste) e avalia no ajuste final. Pela estimativa, todas as 14 builds ficam entre 5,18 e 5,65. A rodada final é a última verificação, com o ajuste mostrado entre parênteses quando ele foi retocado depois (Monge e Armadilheiro subiram um pouco, para valores já medidos).

Como o laboratório chega nisso: roda o bot com um ajuste, mede a fase média, e a regressão de todas as rodadas aponta o ajuste da fase 5,45.

## O que mudou nos chefes para chegar nisso

- **O bot joga como um jogador:** sai das marcas no chão (círculo, cone e linha) e rola quando o golpe vai cair, e se esconde atrás da pedra mais perto quando o Sol de Rá ou a Chama Infernal carregam. Sem isso, quase toda build parava na Brunilda ou no Faraó.
- **Faraó:** a rajada tem 3 bolas de fogo (eram 5) com 45% do dano dele cada (eram 55%), e o Sol de Rá causa 1,4× o dano dele (era 2×).
- **Rajadas de bolas de fogo (Faraó, Demônio e a sombra do Demônio):** as bolas de uma mesma rajada acertam no máximo uma vez. Antes, de perto, as 3 (ou 5) acertavam juntas, e o Corrompido (que luta colado) quase nunca passava da fase 3.
- **Chama Infernal do Demônio:** 1,6× o dano dele (era 2×).

## Onde o bot morre

A maior parte das mortes agora é no chefe normal da fase ou nos chefes secretos (Esqueleto Rei e Cérbero de Ossos, que aparecem quando o chefe da fase morre em menos de 40 s). As builds de muito dano (caçadores, assassino, mago) matam o chefe rápido, chamam os secretos e às vezes morrem para eles; por isso a distribuição delas tem mais partidas curtas e mais partidas longas. Os chefes finais causam uma fração pequena das mortes.

## Sensibilidade

O ajuste multiplica o dano causado e divide o dano recebido ao mesmo tempo, e com os chefes novos o resultado ficou bem sensível: 10% a mais ou a menos no ajuste de uma build muda a fase média dela em 1,5 a 2,5 fases. Por isso os ajustes finais foram achados por interpolação entre duas rodadas na mesma versão do jogo.

## Dificuldade

Esta tabela é o **Normal**. No **Fácil** o jogador causa 35% mais dano e recebe 40% menos (conquistas desligadas); no **Difícil** causa 15% menos e recebe 35% mais. Os dois multiplicam por cima do ajuste da build. O cooperativo é sempre Normal.
