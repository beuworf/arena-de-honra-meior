# Arena de Honra · Documento de design

## Resumo

Action RPG de horda, com câmera de cima em 3/4 e visual low-poly no estilo PS1. O
jogador sobrevive a ondas cada vez mais fortes numa arena circular, com aldeia, lago
e floresta, até o boss de cada nível. Partidas curtas, combate de combos e builds
bem diferentes entre si. Roda no navegador do PC e do celular, sozinho ou em grupo
online.

**Pilares**
1. **Combate que responde:** hit-stop, tremor de câmera, parry e números de dano.
2. **Muitas formas de jogar:** 8 raças × 6 classes × várias builds.
3. **Juntar os amigos sem atrito:** lobby com código de 4 dígitos, sem conta e sem servidor de jogo.

## Fluxo

Menu → (Single Player | Host | Entrar com código) → Raça → Classe → Build/Animal
→ partida → derrota (mostra o recorde) → escolher de novo.

## Personagem

| Raça | Bônus |
| --- | --- |
| Humano | Curas em você +10% |
| Elfo | Velocidade +4% |
| Anão | Dano recebido −6% |
| Gnomo | +6% de dano mágico e um pouco em cada golpe |
| Meio-orc | Dano físico +6% |
| Troll | Disparos +8%; sem disparos, ataca um pouco mais rápido |
| Minotauro | Curas em aliados +12% |
| Goblin | 5% de chance de evadir |

| Classe | Builds / estilo |
| --- | --- |
| ⚔️ Guerreiro | Espada e Escudo (defesa e parry), Espada Longa (alvo único), Dois Machados (área e sangramento) |
| 🏹 Arqueiro | Arco (tiros, cone lento, salto), Lança e Animal (Urso, Tigre ou Lobo), Adagas (assassino) |
| 🔮 Mago | Fogo, Gelo, Sombra e Ilusão: 3 magias cada; a barra amarela é a mana |
| 🔨 Paladino | Martelo sagrado, cura e controle de horda |
| 🥊 Pugilista | Socos e chutes rápidos, cura e apoio |
| 💀 Necromante | Invoca zumbi, esqueleto, escudeiro, cão e abutre |

Mochila: 🧪 Poção (3), 💣 Bomba (2), ⚡ Tônico (2). Também dá para entregar itens a
um aliado próximo.

## Inimigos e progressão

| Tipo | Papel |
| --- | --- |
| Comum | Corpo a corpo básico |
| Arqueiro | Ataca à distância com flechas |
| Conjurador | Lança orbes mágicos |
| Grande | Lento, muita vida, bate forte |
| Boss | Aparece no fim do nível; derrotá-lo passa de nível |

Em cada nível: primeiro só inimigos comuns, depois chegam os Grandes, depois o
Boss. Cada nível novo troca a paleta do cenário (floresta, deserto, roxo, gelo,
vermelho) e dá +50% de vida e +30% de dano aos inimigos. No multiplayer, a vida dos
inimigos aumenta 25% por jogador a mais.

## Multiplayer

P2P via PeerJS, com o host como autoridade: o host simula inimigos e dano, e os
clientes enviam as próprias ações. Quem morre vira fantasma até ser revivido.

## Ideias para as próximas versões (para testar aqui)

- [ ] Trilha sonora e efeitos melhores. O OhMyGame consegue gerar áudio.
- [ ] Arte de capa e tela de título gerada no canvas do OhMyGame.
- [ ] Modelos 3D dos chefes gerados no OhMyGame, no lugar das primitivas.
- [ ] Tela de fim de nível com melhorias para escolher (estilo roguelite).
- [ ] Ranking compartilhado dos recordes.
- [ ] Botão de pausa visível no celular.
