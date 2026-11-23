# Oto Andarilho: troca de cores da textura por região do corpo (mapa de posição) e por cor
# lava/fogo -> gelo; barba, juba e pelos ruivos/rosados -> brancos; chifres e vermelhos -> azul; pele -> pálida nórdica; calça roxa -> azul-ardósia; botas -> couro escuro
import numpy as np,json,sys,colorsys
from PIL import Image
RES=int(sys.argv[1]) if len(sys.argv)>1 else 2048;OUT=sys.argv[2] if len(sys.argv)>2 else 'tex_oto.png'
import os
D=os.environ.get('OTO_DIR','./')  # pasta com posmap.png (+ .json) e a textura original do modelo (tex_1_pbr_20250901.png)
pm=np.asarray(Image.open(D+'posmap.png').resize((RES,RES),Image.NEAREST)).astype(np.float32);M=json.load(open(D+'posmap.png.json'))
src=Image.open(D+'tex_1_pbr_20250901.png');tex=np.asarray(src.resize((RES,RES),Image.LANCZOS) if RES!=src.size[0] else src).astype(np.float32)/255
cov=pm[...,3]>0;x=M['mn'][0]+pm[...,0]/255*M['sz'][0];y=M['mn'][1]+pm[...,1]/255*M['sz'][1];z=M['mn'][2]+pm[...,2]/255*M['sz'][2]
r,g,b=tex[...,0],tex[...,1],tex[...,2];mx=tex.max(-1);mn=tex.min(-1);v=mx;s=np.where(mx>0,(mx-mn)/np.maximum(mx,1e-6),0);d=np.maximum(mx-mn,1e-6)
h=(np.where(mx==r,((g-b)/d)%6,np.where(mx==g,(b-r)/d+2,(r-g)/d+4))*60)%360
def hsv2rgb(H,S,V):
  H=(H%360)/60;i=np.floor(H).astype(int)%6;f=H-np.floor(H);p=V*(1-S);q=V*(1-S*f);t=V*(1-S*(1-f))
  R=np.choose(i,[V,q,p,p,t,V]);G=np.choose(i,[t,V,V,q,p,p]);B=np.choose(i,[p,p,t,V,V,q]);return np.stack([R,G,B],-1)
red=(h>=328)|(h<22);orng=(h>=22)&(h<42);gold=(h>=40)&(h<62);mag=(h>=285)&(h<328);purp=(h>=250)&(h<285)
lava_arm=(x>0.28)&(y>0.62)&(y<1.5)
horn=(np.abs(x)>0.5)&(y>1.4)
head=(y>1.72)&(np.abs(x)<0.42)
boots=(y<0.3)
pants=(y>=0.3)&(y<0.95)&(np.abs(x)<0.5)
out=tex.copy();tag=np.zeros(h.shape,np.uint8)
def put(m,rgb,k):
  m=m&cov&(tag==0);out[m]=rgb[m] if rgb.ndim==3 else rgb;tag[m]=k
# 1) braço de lava e brasas: vermelho/laranja/amarelo/rosa saturado e claro -> gelo (azul profundo -> ciano -> branco)
fire=(((red|orng|gold|mag)&(s>0.25)&(v>0.45)&lava_arm)|((red|orng|gold)&(s>0.5)&(v>0.55)&horn))
t=np.clip(np.where(red|mag,0,np.where(orng,0.5,1.0))*0.6+np.clip((v-0.5)/0.5,0,1)*0.4,0,1)
put(fire,hsv2rgb(212-26*t,np.clip(np.minimum(s,0.85)-0.55*t,0.1,0.85),np.clip(v*(0.95+0.12*t),0,1)),1)
# 2) chifres/ombreiras e símbolos vermelhos -> azul (escuro continua escuro)
put((red|mag)&(s>0.45)&horn,hsv2rgb(np.full(h.shape,214.),np.clip(s*0.85,0,1),np.clip(v*1.05,0,1)),2)
# 3) juba, barba e pelos rosados -> branco prateado com sombra fria (o couro marrom-escuro fica)
W=lambda k:hsv2rgb(np.full(h.shape,212.),np.full(h.shape,0.07),np.clip(0.36+0.64*v**0.7,0,1))
put(head&(((h>=315)|(h<30))&(s>0.3)&(v>0.1)),W(0),3)
pink=((h>=318)|(h<8))&(s>0.38)&(v>0.3)&(v<0.95)
put(pink&~boots&~pants,W(0),3)
# 4) pele lilás/rosada -> pálida nórdica (pêssego bem claro)
skin=((h>=270)|(h<8))&(s<=0.38)&(v>0.35)&(y>0.6)
put(skin,hsv2rgb(np.full(h.shape,22.),np.clip(s*0.55,0.05,0.2),np.clip(v*1.02,0,1)),4)
# 5) calça roxa -> azul-ardósia escuro
put((purp|mag)&pants&(s>0.25),hsv2rgb(np.full(h.shape,218.),np.clip(s*0.55,0,1),v),5)
# 6) botas vermelho-escuras -> couro marrom-acinzentado escuro
put((red|mag)&boots&(s>0.3),hsv2rgb(np.full(h.shape,26.),np.clip(s*0.45,0,1),np.clip(v*0.95,0,1)),6)
# 7) vermelhos vivos que sobraram (tiras, símbolos) -> azul
put(((h>=340)|(h<8))&(s>0.6)&(v>0.3)&~boots,hsv2rgb(np.full(h.shape,214.),np.clip(s*0.8,0,1),v),7)
# bordas dos pedaços da textura (fora dos triângulos): copia a cor nova do vizinho mais próximo, senão a filtragem traz a cor antiga
known=cov.copy();o2=out.copy()
for it in range(10):
  acc=np.zeros_like(o2);cnt=np.zeros(h.shape,np.float32)
  for dy in (-1,0,1):
    for dx in (-1,0,1):
      if dx==0 and dy==0:continue
      kn=np.roll(np.roll(known,dy,0),dx,1);acc+=np.roll(np.roll(o2,dy,0),dx,1)*kn[...,None];cnt+=kn
  nw=(~known)&(cnt>0);o2[nw]=acc[nw]/cnt[nw][:,None];known=known|nw
out=o2
Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8)).save(D+OUT)
print({k:int((tag==k).sum()) for k in range(1,8)})
