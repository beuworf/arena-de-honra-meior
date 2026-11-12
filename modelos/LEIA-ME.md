# Modelos dos personagens (VRoid / VRM)

O jogo usa personagens no formato **VRM 0.0**, o formato que o
[VRoid Studio](https://vroid.com/studio) exporta.

## Quais arquivos o jogo procura

| Arquivo | Quando é usado |
| --- | --- |
| `heroi.vrm` | Modelo padrão de todas as classes. O jogo coloca por cima o visual de cada classe (cor da roupa, elmo, capuz, chapéu, capa, manto…). |
| `guerreiro.vrm`, `arqueiro.vrm`, `mago.vrm`, `paladino.vrm`, `monge.vrm`, `necromante.vrm` | Opcionais. Se existir, substitui o padrão **só naquela classe**, sem acessórios extras, porque o visual já vem pronto do VRoid. |

O jogador também pode carregar o próprio `.vrm` em *Configurações → Seu modelo
.vrm*. Esse modelo fica salvo só no aparelho dele e vale para todas as classes,
com o visual de cada classe por cima.

## Como criar um personagem no VRoid Studio

1. Baixe o VRoid Studio (gratuito) e crie o personagem. O rosto, o cabelo e a
   roupa você ajusta só com controles deslizantes.
2. **Exportar → Exportar como VRM** e escolha **VRM 0.0**. O VRM 1.0 ainda não
   funciona com a versão do motor do jogo.
3. Na exportação, reduza o tamanho das texturas para 1024 ou 512 e o número de
   polígonos, para o jogo ficar leve no celular.
4. Salve com o nome da classe (por exemplo, `mago.vrm`) nesta pasta, ou com o
   nome `heroi.vrm` para trocar o padrão.

## Licença do modelo padrão

`heroi.vrm` é o modelo **three-vrm-girl**, da pixiv Inc. Ele vem do repositório
[pixiv/three-vrm](https://github.com/pixiv/three-vrm), na pasta de exemplos.
Pelos termos do VRoid Hub embutidos no arquivo, ele pode ser usado por
qualquer pessoa, inclusive em uso comercial, com redistribuição, modificação e
expressão violenta permitidas e sem exigir crédito. Licença completa:
https://hub.vroid.com/license?allowed_to_use_user=everyone&characterization_allowed_user=everyone&corporate_commercial_use=allow&credit=unnecessary&modification=allow&personal_commercial_use=profit&redistribution=allow&sexual_expression=allow&version=1&violent_expression=allow

Ele está aqui só para o jogo funcionar já. A ideia é trocar pelos seus
personagens.
