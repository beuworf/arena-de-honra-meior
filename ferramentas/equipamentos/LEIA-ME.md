# Conversor de equipamentos (KayKit → formato do jogo)

Lê os `.gltf` dos pacotes **KayKit Character Pack: Adventurers** e **Skeletons** (Kay Lousberg, CC0;
repositórios `KayKit-Game-Assets/KayKit-Character-Pack-Adventures-1.0` e `...-Skeletons-1.0` no GitHub)
e gera `modelos/equip.json`:

- a cor de cada triângulo vem da textura de faixas do KayKit (média dos três cantos) e vira cor por vértice;
- armas (`o: "w"`) ficam com o comprimento em +Z e o cabo na origem; escudos (`o: "s"`) com a frente em X;
  outros itens (`o: "c"`) centralizados;
- `len` é o tamanho final (comprimento da arma ou altura do escudo);
- vértices iguais são juntados e tudo é gravado compacto: posição Int16 (×10000), normal Int8 (×127),
  cor Uint8 e índices Uint16, em base64.

Uso: sirva uma pasta com `converter.html`, `three.min.js`, `GLTFLoader.js`, `GLTFExporter.js` (three r128)
e os `.gltf`/`.bin`/`.png` do KayKit em `eq/`; depois `node converter.js` (ajuste os caminhos no script)
e copie `equip.json` para `modelos/`.
