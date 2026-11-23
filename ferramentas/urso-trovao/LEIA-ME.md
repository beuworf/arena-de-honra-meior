# Urso-trovão (forma base) — trabalho em andamento, ainda fora do jogo

Personagem da raça secreta Urso-trovão. **Nada desta pasta é carregado pelo jogo ainda**: falta a forma de urso e decidir as regras da transformação.

## Créditos
- Arte de referência: inspirada na arte conceitual **"INUIT SIRIUS", de Wu Shenyou** (ArtStation). As imagens em `referencias/` serviram de base.
- Modelo 3D gerado pelo autor do jogo num app de IA a partir dessas imagens.

## Versão atual (modelo com textura)
- `urso_base.glb`: versão para o jogo, com ~21 mil triângulos (o original tinha 1,5 milhão), textura 1024×1024 e o esqueleto dos heróis (mesmas animações), na altura deles e virada para o mesmo lado.
- `urso_textura.jpg`: a textura separada (260 KB; a original tinha 4096×4096, 18 MB).
- `rig.html`: refaz o `urso_base.glb` a partir do modelo original do app (que tem 82 MB e fica fora do repositório, no Google Drive do autor).
- `previa.png`: frente, costas e um teste de pose exagerado (braço levantado e perna dobrada).

## Versão anterior
- `v1-projecao/`: primeiro modelo do app, que veio sem textura; a cor era projetada da folha de 4 vistas. Guardado só para referência.

Para abrir as ferramentas: na raiz do repositório, `python3 -m http.server` e acesse `/ferramentas/urso-trovao/rig.html`.

## Pendências
- Forma de urso (o autor vai gerar).
- Regras da transformação (duração, se mantém a arma, urso em pé ou de quatro).
- Conferir a deformação com as animações de verdade do jogo (ombros, cristais e a tira pendurada atrás).
