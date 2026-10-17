# 3つ目のカレンダー：浮世絵風「四季の柴犬」（2027年）

> 普通の Claude に任せるときは、このファイルを **まるごと** 貼り付けて、「この指示書のとおりに、1月から1枚ずつ案内してください」と送る。

## 決めたこと（2026-10-17）
- オーナーのリサーチ（海外では浮世絵風の猫・柴犬が人気）から、猫に続いて **柴犬** にした（オーナーの方針：売れるのを待たずに商品を増やす）
- 1つ目（花）・2つ目（猫）と同じ浮世絵風・同じストア（Kisetsu Art Studio）
- 犬はどの月も **赤柴（赤茶と白・巻き尾）** にして、13枚で同じ犬に見えるようにする
- **実在の作家の名前（北斎・広重など）、有名な柴犬のキャラクターやネットで有名な柴犬の写真・ミームはまねしない。** オリジナルの柴犬にする
- 季節の行事は猫カレンダーと同じ流れ（6月あじさい・8月花火・9月お月見など）。12月だけ、こたつではなく「雪の家の前の柴犬」にした

## あなた（Claude）へのお願い（普通の Claude に任せるとき）
- オーナー（日本の50代の女性・パソコン操作は初心者）に、**1回に1ステップだけ**、やさしい日本語で短く案内する。コピーする文はコードブロックで出す
- **2枚のうちどちらを選ぶかはオーナーが決める**。作り直したいときだけオーナーから伝える（毎回の写真や「できた」はいらない）
- 絵のチェック：犬の体（耳・足・しっぽ）が画面の端で切れていないか／足やしっぽの数がおかしくないか／文字・サインが入っていないか
- リンクなど大事な文字は、画面の写真から読み取らず、オーナーにコピーして貼ってもらう

## 絵の作り方（Recraft・毎回同じ）
- オーナーは Recraft の有料プラン（商用利用できる）。新しいプロジェクトを作る（名前の例：`2027 Shiba Calendar`）
- モデル：**Recraft V4.1 Vector**／比：**4:3**
- 「画像の説明」の欄を空にして、下の指示文を貼り付けて「生成する」→ 2枚できる
- 選んだ絵を「書き出し（Export）」→ **PNG**・**横（W）2600**・**「AI ラベル」のチェックは入れない**
- ダウンロードしたらすぐ名前を変える（`.png` が2つ重ならないように）
- Recraft のクレジットが足りるか、始める前に一度見ておく（13枚で約150〜250）

## 各月の指示文（そのままコピーして貼る）

### 1月（ファイル名 `shiba-01-jan`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting proudly in the foreground, the whole dog filling about a third of the picture, beneath an old pine tree with snow on its branches, a red rising sun over distant snowy hills, fresh New Year morning, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 2月（ファイル名 `shiba-02-feb`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting on a stone path in the foreground, the whole dog filling about a third of the picture, sniffing a blossoming pink and white plum branch, a small olive-green bush warbler perched above, pale late-winter sky, hopeful early spring, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 3月（ファイル名 `shiba-03-mar`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting happily on soft grass in the foreground, the whole dog filling about a third of the picture, under a large cherry tree in full bloom, pale pink petals drifting around, a quiet river and a distant blue mountain, joyful spring, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 4月（ファイル名 `shiba-04-apr`）
```
a large red-and-white Shiba Inu dog with a curled tail walking along a stone path in the foreground, the whole dog filling about a third of the picture, beneath a wooden trellis with thick, full and lush clusters of purple wisteria hanging low and densely, a calm pond beside it, warm late-spring afternoon, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 5月（ファイル名 `shiba-05-may`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting on a grassy riverbank in the foreground, the whole dog filling about a third of the picture, looking up at colorful carp-shaped streamers fluttering on a tall pole, purple irises along the water, fresh early-summer breeze, no writing on the streamers, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 6月（ファイル名 `shiba-06-jun`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting dry under the roof of a wooden veranda in the foreground, the whole dog filling about a third of the picture, watching soft rain fall on blue and purple hydrangeas, calm rainy-season day, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 7月（ファイル名 `shiba-07-jul`）
```
a large red-and-white Shiba Inu dog with a curled tail lying in the cool shade on a wooden veranda in the foreground, the whole dog filling about a third of the picture, a glass wind chime hanging from the eaves, a slice of watermelon on a plate nearby, blue morning glories on a bamboo screen, lazy summer afternoon, no writing on the wind chime, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 8月（ファイル名 `shiba-08-aug`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting on a wooden bridge at night in the foreground, the whole dog filling about a third of the picture, looking up at colorful fireworks blooming over a calm river, deep blue summer night sky with reflections on the water, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 9月（ファイル名 `shiba-09-sep`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting in the foreground, the whole dog filling about a third of the picture, beside a small wooden stand with round white rice dumplings and silver pampas grass, gazing at a huge glowing full moon, peaceful autumn moon-viewing night, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 10月（ファイル名 `shiba-10-oct`）
```
a large red-and-white Shiba Inu dog with a curled tail playing happily in a pile of red and orange maple leaves in the foreground, the whole dog filling about a third of the picture, under bright maple trees, a mountain stream and distant hills, crisp autumn day, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 11月（ファイル名 `shiba-11-nov`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting beside a wooden farmhouse fence in the foreground, the whole dog filling about a third of the picture, next to a persimmon tree heavy with bright orange fruit, golden late-autumn fields and distant hills, warm quiet afternoon, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 12月（ファイル名 `shiba-12-dec`）
```
a large red-and-white Shiba Inu dog with a curled tail sitting in fresh snow in the foreground, the whole dog filling about a third of the picture, in front of a small snowy Japanese house with warm glowing paper windows, snow falling softly, peaceful winter evening, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

### 表紙（ファイル名 `shiba-00-cover`）
```
Four red-and-white Shiba Inu dogs with curled tails sitting together in the foreground of a Japanese garden that changes through the four seasons from left to right: cherry blossoms in spring, irises and a stream in summer, red maple leaves in autumn, a snowy pine in winter, a small red sun in the sky, harmonious and festive, each dog fully visible, original illustration in the style of a traditional Japanese ukiyo-e woodblock print, the dog fully visible from ears to tail, not cut off at the edges, natural dog proportions, gentle and charming but not cartoonish, fine delicate linework, warm soft colors with clear accents, indigo gradient band fading at the top of the sky, subtle washi paper texture, no people, no text, no letters, no numbers, no signature, no seal stamp, no border, landscape 4:3 composition
```

## Zazzle に出品（猫のときと同じ手順・1つずつ）
1. `https://www.zazzle.co.jp/custom/calendars` → いちばん左の **ダブルページ 中 カレンダー（ホワイト）** →「デザインを追加」
2. 左の「アップロード」→ 13枚をまとめて選ぶ（Shift を押しながら）
3. カバー：表紙の絵 →「フィル」（すき間がないか確認）／裏面：何も置かない
4. 1〜12ページ：その月の絵 →「フィット」→「配置」→「上揃え」（フィルは押さない）
5. プレビュー →「オプション」は何も変えずに「確認」→「売る」→「販売」
6. ログインを求められたら「Google で続ける」（いつものアカウント）

**タイトル：**
```
2027 Ukiyo-e Shiba Inu Seasons Wall Calendar
```

**デパートメント：** 「オフィス&スクール > … > カレンダー」

**概要：**
```
Twelve months of Japanese seasons, with a cheerful Shiba Inu as your guide.

Each month features an original ukiyo-e style illustration of a Shiba Inu enjoying the Japanese year:

January – Sitting proudly under a snowy pine at New Year
February – Sniffing the plum blossoms
March – Relaxing under the cherry blossoms
April – Walking beneath the wisteria
May – Watching carp streamers in the breeze
June – Watching the rain on the hydrangeas
July – Resting on a cool summer veranda
August – Watching fireworks over the river
September – Moon viewing with rice dumplings
October – Playing in the red maple leaves
November – Sitting by a persimmon tree
December – Waiting in the snow by a warm house

Drawn in the style of traditional Japanese woodblock prints with soft colors and gentle indigo skies, this calendar is a warm gift for dog lovers and anyone who loves Japan.

The artwork was created with AI tools, and each image was carefully chosen and arranged by a designer in Japan. These are original illustrations.
```
（できた絵と内容がちがう月があれば、その行だけ直す）

**タグ**（1行まとめて貼って「タグを加える」。10個・最後が generative content か確認）：
```
"2027 calendar" "shiba inu calendar" "shiba inu" "japanese dog" "ukiyo-e dog" "dog lover gift" "japanese art" "wall calendar" "seasons of japan" "generative content"
```

**そのほか：** レーティング **G**／表示 **公開**／「カスタマイズする」ボタン **いいえ**／ロイヤリティ **5**／権利のチェックボックスに✓ →「出品する」

**出品のあと：**
- 「リンクをコピー」して貼ってもらう（日本版）
- アメリカ版のリンク：日本版の `zazzle.co.jp/` を `zazzle.com/` にして、`_%E3%82%AB…%BC`（カレンダー）の部分を消した形を開き、ドルの値段が出たらアドレス欄をコピーして貼ってもらう
- プロフィール → コレクション「**2027 Calendars**」→「商品の追加」で入れる

## 最後に：オーナーが前の Claude に伝えるまとめ
```
【四季の柴犬カレンダー 作業のまとめ】
・完成した絵：
・指示文を変えた月と、変えた理由：
・出品：済み／まだ
・日本版リンク：
・アメリカ版リンク：
・コレクションに入れた：済み／まだ
・残っていること：
```
