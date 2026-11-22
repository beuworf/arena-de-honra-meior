# Modelos 3D do jogo

O jogo traz modelos 3D gratuitos (CC0, domínio público), guardados aqui como
JSON com o `.glb` em base64. Veja os créditos em `CREDITOS.txt`.

- `herois_m.json` / `herois_f.json`: heróis 3D (Quaternius). Cada raça muda
  proporções, pele, cabelo e traços; cada classe veste a sua roupa.
- `ini_*.json`: inimigos 3D (orcs, elfos, puglin e diabinho, Quaternius), com
  roupas por tipo e pintura de ossos nos esqueletos.
- `animacoes2.json`: animações (Universal Animation Library 1 e 2, Quaternius),
  convertidas para o esqueleto dos heróis, com o instante de impacto de cada golpe.
- `torretas.json`: torretas do Maquinista (3 modelos OBJ convertidos, Quaternius: canhão, canhão de engrenagem e laser; base fixa, meio e cano giram).
- `golem.json`: golem do Maquinista (modelo "Giant", Quaternius), com pintura de metal e circuitos feita no shader.
- `natureza.json`: árvores (bétulas, bordos e árvores secas), arbustos, grama, flores e a textura das pedras ("Stylized Nature MegaKit", Quaternius, CC0). Troncos simplificados e metade dos cartões de folha (os que ficam um pouco maiores), texturas reduzidas para 256 px. Usado na qualidade Alta.
- `ani_vaca.json`, `ani_cervo.json`: vaca e cervo ("Ultimate Animated Animals", Quaternius), animais de cenário na vila e no caminho (qualidades Média e Alta).
- `armas.json`: armas 3D (KayKit Fantasy Weapons Bits).
- `armas2.json`: armas próprias de classe — chave de boca do Maquinista (KayKit RPG Tools Bits), cajado do Necromante e kukri do Armadilheiro (Low Poly Weapon Pack, Kickin' It Studios) e cajado do Xamã (KayKit Fantasy Weapons Bits), mais as armas dos inimigos (chaves com prefixo `e`). Malhas com cor por vértice, cabo no eixo Z.

O boneco 3D vem ligado por padrão (*Configurações → Boneco 3D*). Desligado, o
jogo volta aos bonecos de blocos.

## Seu próprio modelo VRoid (.vrm)

1. Em *Configurações → Boneco 3D*, toque em **Carregar arquivo** e escolha um
   `.vrm`. Ele substitui o herói 3D e fica salvo só no seu aparelho.
2. **Remover** apaga o modelo e o jogo volta ao herói 3D.
3. No VRoid Studio: **Exportar → Exportar como VRM**, versão **VRM 0.0**, com
   texturas de 1024 ou 512 para ficar leve no celular.

Use só modelos que você criou ou que tenham licença que permita esse uso.
