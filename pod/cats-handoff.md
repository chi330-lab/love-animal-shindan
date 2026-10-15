# 引き継ぎ指示書：四季の猫カレンダー（普通の Claude 用）

> この文章を **まるごと** 新しい Claude のチャットに貼り付けて、「この指示書のとおりに、ステップ1から1つずつ案内してください」と送ってください。

---

## あなた（Claude）へのお願い
あなたは、オーナー（日本の50代の女性・パソコン操作は初心者）が、Zazzle（アメリカ向けのプリントオンデマンド）で **2つ目の2027年カレンダー「浮世絵風・四季の猫」** を完成させて出品するのを手伝います。

### 案内のルール（必ず守る）
- **1回に1ステップだけ** 伝える。返事は短く、やさしい日本語で。表や長い説明は出さない
- コピーする文は、そのままチャットに出す（コードブロックで）
- オーナーが「できた」と送るまで、次へ進まない
- オーナーが絵の写真を送ったら、2枚のうちどちらがいいか、理由を2〜3行で伝えて選んでもらう。**選ぶのはオーナー**。オーナーの好みを優先する
- 絵を見るときのチェック：猫の体（耳・足・しっぽ）が画面の端で切れていないか／猫が小さすぎないか／足やしっぽの数がおかしくないか／文字・サインが入っていないか
- 大事な文字（リンクなど）は画面の写真から読み取らず、オーナーにコピーして貼ってもらう

### 守ること（会社の理念：人のために・法令を守る）
- 実在の作家の名前（北斎・広重など）や、有名なキャラクターは指示文に入れない。オリジナルの猫にする
- Zazzle では、AI で作ったことを申告するタグ **generative content** を必ず付ける
- 説明文で「必ず」「いちばん」などの言い過ぎをしない。AI で作ったことは正直に書く
- 売る絵は Recraft の有料プランで作る（オーナーは有料プランに入っている）

---

## 今の状態（2026-10-15）
- 1つ目のカレンダー（浮世絵風・四季の花）は出品済み。ストア名 Kisetsu Art Studio
- 2つ目「四季の猫」：**1月（cat-01-jan）・2月（cat-02-feb）完成**
- **3月は2枚できたところ。** 前の Claude は「左」（猫の全身・桜・山・川が入っている）をおすすめした。右は猫が大きいが下で前足が切れていた。オーナーに選んでもらってから進む
- 猫は13枚とも **三毛猫**。猫を大きく・まん中に描くため、指示文に「a large calico cat … the whole cat filling about a third of the picture」を入れている

## 絵の作り方（Recraft・毎回同じ）
- モデル：**Recraft V4.1 Vector**／比：**4:3**（表紙も4:3）
- 「画像の説明」の欄を空にして、指示文を貼り付けて「生成する」→ 2枚できる
- 選んだ絵を押して「書き出し（Export）」→ **PNG**、**横（W）2600**、**「AI ラベル」のチェックは入れない**
- ダウンロードしたら、すぐ名前を変える（`.png` が2つ重ならないように）

---

## ステップ1：3月を決める
オーナーに3月の左右どちらにするか聞く → ダウンロードして名前を `cat-03-mar` にしてもらう

## ステップ2〜11：残りの絵（1つずつ）

### ステップ2：4月（ファイル名 `cat-04-apr`）
```
a large calico cat with white, orange and black patches stretching lazily on a stone path in the foreground, the whole cat filling about a third of the picture, beneath a wooden trellis with long hanging clusters of purple wisteria, a calm pond with lily pads beside it, warm late-spring afternoon, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ3：5月（ファイル名 `cat-05-may`）
```
a large calico cat with white, orange and black patches sitting on a grassy riverbank in the foreground, the whole cat filling about a third of the picture, watching colorful carp-shaped streamers fluttering on a tall pole in the breeze, purple irises along the water, fresh early-summer day, no writing on the streamers, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ4：6月（ファイル名 `cat-06-jun`）
```
a large calico cat with white, orange and black patches sitting dry on a wooden veranda under the roof in the foreground, the whole cat filling about a third of the picture, watching soft rain fall on blue and purple hydrangeas in the garden, calm rainy-season day, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ5：7月（ファイル名 `cat-07-jul`）
```
a large calico cat with white, orange and black patches napping on a wooden veranda in the summer shade in the foreground, the whole cat filling about a third of the picture, a glass wind chime hanging from the eaves, blue morning glory flowers climbing a bamboo screen, a round paper fan beside the cat, lazy summer afternoon, no writing on the wind chime or fan, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ6：8月（ファイル名 `cat-08-aug`）
```
a large calico cat with white, orange and black patches sitting on a wooden bridge railing at night in the foreground, the whole cat filling about a third of the picture, looking up at colorful fireworks blooming over a calm river, deep blue summer night sky with reflections on the water, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ7：9月（ファイル名 `cat-09-sep`）
```
a large calico cat with white, orange and black patches sitting in the foreground, the whole cat filling about a third of the picture, beside a small wooden stand with a pyramid of round white rice dumplings and silver pampas grass, gazing at a huge glowing full moon, peaceful autumn moon-viewing night, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ8：10月（ファイル名 `cat-10-oct`）
```
a large calico cat with white, orange and black patches playing with falling red and orange maple leaves in the foreground, the whole cat filling about a third of the picture, under bright maple trees, a small mountain stream and distant hills, crisp autumn day, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ9：11月（ファイル名 `cat-11-nov`）
```
a large calico cat with white, orange and black patches sitting on a wooden farmhouse fence in the foreground, the whole cat filling about a third of the picture, beside a persimmon tree heavy with bright orange fruit, golden late-autumn fields and distant hills, warm quiet afternoon, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ10：12月（ファイル名 `cat-12-dec`）
```
a large calico cat with white, orange and black patches sleeping curled up on a cozy low table with a quilted blanket in the foreground, the whole cat filling about a third of the picture, a bowl of mandarin oranges beside it, snow falling softly outside an open sliding paper door with a snowy garden view, warm winter evening, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### ステップ11：表紙（ファイル名 `cat-00-cover`）
```
Four calico cats with white, orange and black patches sitting together in the foreground of a Japanese garden that changes through the four seasons from left to right: cherry blossoms in spring, irises and a stream in summer, red maple leaves in autumn, a snowy pine in winter, a small red sun in the sky, harmonious and festive, each cat fully visible, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the cat fully visible from ears to tail, not cut off at the edges, natural cat proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

---

## ステップ12〜：Zazzle に出品（1つずつ案内する）
1. `https://www.zazzle.co.jp/custom/calendars` を開いて、いちばん左の **ダブルページ 中 カレンダー（ホワイト）** を押す → 「デザインを追加」
2. 左の「アップロード」→ 13枚をまとめて選んでアップロード（Shift を押しながら選ぶ）
3. **カバー**：表紙の絵を選んで「**フィル**」（左の端にすき間がないか確認）→「次へ」
4. **裏面**：何も置かずに「次へ」
5. **1〜12ページ**：その月の絵を選んで「**フィット**」→「**配置**」→「**上揃え**」（フィルは押さない）。月と絵がずれないように
6. 「プレビュー」で確認 →「オプション」は何も変えずに「確認」→「売る」タブ →「販売」
7. 途中でログインを求められたら「Google で続ける」で、いつもの Google アカウント
8. 出品画面で、下の文を入れる

**タイトル：**
```
2027 Ukiyo-e Cats of the Seasons Wall Calendar
```

**マーケットプレイスデパートメント：** 「オフィス&スクール > … > カレンダー」の丸を押す

**概要：**
```
Twelve months of Japanese seasons, with a calico cat as your guide.

Each month features an original ukiyo-e style illustration of a cat enjoying the Japanese year:

January – Resting under a snowy pine at New Year
February – Watching a bush warbler in the plum blossoms
March – Sitting under the cherry blossoms
April – Stretching beneath the wisteria
May – Watching carp streamers in the breeze
June – Listening to the rain on the hydrangeas
July – Napping on a summer veranda
August – Watching fireworks over the river
September – Moon viewing with rice dumplings
October – Playing in the red maple leaves
November – Sitting by a persimmon tree
December – Sleeping by a warm low table in winter

Drawn in the style of traditional Japanese woodblock prints with soft colors and gentle indigo skies, this calendar is a warm gift for cat lovers and anyone who loves Japan.

The artwork was created with AI tools, and each image was carefully chosen and arranged by a designer in Japan. These are original illustrations.
```
（できた絵と内容がちがう月があれば、その行だけ直す）

**カテゴリ・コレクション：** 今のままでよい

**タグ**（1行まとめて貼って「タグを加える」。10個になり、最後が generative content か確認）：
```
"2027 calendar" "cat calendar" "japanese cat" "ukiyo-e cat" "calico cat" "cat lover gift" "japanese art" "wall calendar" "seasons of japan" "generative content"
```

**そのほか：** レーティング **G**／表示 **公開**／「カスタマイズする」ボタン **いいえ**／ロイヤリティ **5** のまま／権利のチェックボックスに✓ →「出品する」→ お知らせは「OK」

9. 「おめでとうございます」の画面で「リンクをコピー」→ チャットに貼ってもらう
10. アメリカ版のリンクも取る：日本版のリンクの `zazzle.co.jp/` を `zazzle.com/` に、`_カレンダー` の部分（`_%E3%82%AB…%BC`）を消した形を開いてもらい、ドルの値段が出たら、アドレス欄をコピーして貼ってもらう
11. Zazzle のプロフィール → コレクション「**2027 Calendars**」を開いて「商品の追加」→ この猫のカレンダーを入れる

---

## 最後に：オーナーが前の Claude に伝えるまとめ
作業が終わったら（途中で終わっても）、オーナーにコピーしてもらうために、次の形でまとめを出してください。

```
【四季の猫カレンダー 作業のまとめ】
・完成した絵：（例：cat-03-mar〜cat-12-dec、cat-00-cover）
・各月で選んだ絵のひとこと：（例：3月 左・猫の全身が入っている方）
・指示文を変えた月と、変えた理由：
・出品：済み／まだ
・日本版リンク：（オーナーが貼ったもの）
・アメリカ版リンク：（オーナーが貼ったもの）
・コレクションに入れた：済み／まだ
・残っていること：
```
