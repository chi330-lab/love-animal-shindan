from PIL import Image, ImageDraw, ImageFont, ImageFilter
import sys
src=sys.argv[1]  # 元の画像（文字なし）
F=sys.argv[2]  # NotoSerifJP の .otf があるフォルダ（末尾に NotoSerifJP-）
im=Image.open(src).convert('RGB')
W,H=1280,670
s=max(W/im.width,H/im.height)
im=im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS)
l=(im.width-W)//2; t=(im.height-H)//2; im=im.crop((l,t,l+W,t+H)).convert('RGBA')
def f(w,s): return ImageFont.truetype(F+w+'.otf',s)
ink=(78,46,30); accent=(196,88,52); white=(255,252,247)
x=56
# soft white card with shadow
card=[36,40,660,630]
sh=Image.new('RGBA',(W,H),(0,0,0,0)); ImageDraw.Draw(sh).rounded_rectangle([c+o for c,o in zip(card,(6,10,6,10))],radius=28,fill=(150,80,40,70))
im=Image.alpha_composite(im,sh.filter(ImageFilter.GaussianBlur(14)))
ov=Image.new('RGBA',(W,H),(0,0,0,0)); ImageDraw.Draw(ov).rounded_rectangle(card,radius=28,fill=(255,251,244,232))
im=Image.alpha_composite(im,ov)
d=ImageDraw.Draw(im)
x=card[0]+40
lab=f('Bold',32); tx='結婚30年の妻から'
d.rounded_rectangle([x,78,x+d.textlength(tx,font=lab)+44,78+56],radius=28,fill=accent)
d.text((x+22,84),tx,font=lab,fill=white)
big=f('Black',100)
d.text((x,150),'結婚に迷う',font=big,fill=ink)
d.text((x,268),'男性へ。',font=big,fill=ink)
sub=f('Bold',32)
d.text((x,412),'「この人でいいのか」と思うのは、',font=sub,fill=ink)
hl=f('Black',44); tx='真剣に考えている証拠です'
y=462; tw=d.textlength(tx,font=hl)
d.rectangle([x-4,y+38,x+tw+4,y+62],fill=(248,200,160))
d.text((x,y),tx,font=hl,fill=accent)
d.text((x,568),'なお',font=f('SemiBold',28),fill=(130,95,75))
im.convert('RGB').save(sys.argv[3],quality=92)
