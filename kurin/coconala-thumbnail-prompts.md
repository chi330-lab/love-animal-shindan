# ココナラ出品画像：画像生成の指示文（煦鈴）

## 使い方
1. Recraft で新しいプロジェクトを作る（名前の例：`kurin coconala`）
2. Model は **Recraft V4.1**（ふつうの絵。Vector ではない）。縦横の比は **1:1**
3. 下の A〜C のどれかをコピーして貼る → 気に入った1枚を選ぶ
4. Export → **PNG**、横 **1220** 以上で書き出す（「AI ラベル」のチェックは入れない）
5. 文字なし版（A〜C）のときは、できた画像をこのチャットに送る → Claude が日本語の文字を入れる。文字入り版（A'・C'）はいちばん下

> 文字は画像生成に入れてもらわない（日本語の文字はくずれやすいため）。そのため、指示文で **画面の下の3分の1を空けて** もらっている。

## 守ること
- 商用利用できる有料プランで作る
- 実在のタロットの絵柄（有名なカードの絵）はまねしない → 指示文で「カードは裏向き」「オリジナルの模様」にしている
- 実在の作家名・ブランド名は入れない

---

## A. 陽だまりとタロット（おすすめ）
やわらかい日差しの中、窓辺のテーブルに3枚のカード。「陽だまりの心の調律師」に合わせた、あたたかい雰囲気。
```
soft warm watercolor illustration, a cozy sunlit windowsill in the gentle morning light, three original tarot cards laid face down in a row on a cream linen cloth, card backs with an elegant original pattern of a sun and small stars in muted gold on dusty lavender, a small vase of chamomile flowers, a cup of herbal tea, a tiny brass bell, sheer curtains glowing with sunlight, warm golden light rays, peaceful and healing mood, pastel palette of cream, honey yellow, soft coral and lavender, the subject placed in the upper two thirds, the bottom third left as a plain soft cream area with no objects, no text, no letters, no numbers, no signature, no people, square 1:1 composition
```

## B. 手とカード（人の気配がある）
女性の手がカードを1枚そっと開くところ。顔は出さない。「寄り添う鑑定」の感じ。
```
soft warm watercolor illustration, close-up of a gentle woman's hands softly turning over one original tarot card on a cream linen tablecloth, two more cards face down beside it, card backs with an original pattern of a sun and small stars in muted gold on dusty lavender, warm afternoon sunlight falling across the table, a few chamomile petals scattered, calm and kind atmosphere, pastel palette of cream, honey yellow, soft coral and lavender, no face shown, hands only, the subject placed in the upper two thirds, the bottom third left as a plain soft cream area with no objects, no text, no letters, no numbers, no signature, square 1:1 composition
```

## C. 太陽と鈴（シンボル風・シンプル）
「煦鈴」の名前（煦＝あたたかい日差し、鈴）をそのまま絵にした、すっきりした絵。小さく表示されても目に入りやすい。
```
elegant soft illustration, a large gentle sun with soft glowing rays at the top center, below it three original tarot cards fanned out face down, card backs with an original sun and star pattern in muted gold on dusty lavender, a small golden bell with a coral ribbon resting beside the cards, scattered tiny sparkles and chamomile flowers, dreamy and warm healing mood, smooth gradients, pastel palette of cream, honey yellow, soft coral and lavender, the subject placed in the upper two thirds, the bottom third left as a plain soft cream area with no objects, no text, no letters, no numbers, no signature, no people, square 1:1 composition
```

---

## うまくいかないとき（指示文の最後に足す）
- 文字のようなものが出た → `absolutely no writing, no symbols that look like letters`
- カードの表の絵が出た → `all cards face down, only the card backs visible`
- 下が空かない → `large empty space at the bottom`
- 暗い・重い → `bright, airy, high key lighting`
- 子どもっぽい → `refined, sophisticated, for adult women`

---

## 文字も入れて作る場合（オーナーOK・2026-10-14）
文字も画像生成に入れてもらう版。入れる文字は3つだけにしぼっている（多いとくずれやすい）。
- 大きく：「依存させない恋愛タロット」
- 帯：「鑑定書でお届け」
- 小さく：「陽だまりの心の調律師 くりん」（「煦」はめずらしい漢字でくずれやすいので、ひらがなにした）

**できたら必ず確認**：文字がまちがっていないか（とくに「依」「鑑」「調律」）。くずれていたら作り直すか、その絵をチャットに送ってもらえば Claude が文字だけ直す。

### A'. 陽だまりとタロット＋文字（おすすめ）
```
soft warm watercolor illustration for a fortune-telling service thumbnail, a cozy sunlit windowsill in gentle morning light, three original tarot cards laid face down in a row on a cream linen cloth, card backs with an elegant original pattern of a sun and small stars in muted gold on dusty lavender, a small vase of chamomile flowers, a tiny brass bell, warm golden light rays, peaceful and healing mood, pastel palette of cream, honey yellow, soft coral and lavender, the illustration in the upper half, in the lower half clean Japanese typography on a plain cream background: a soft coral rounded ribbon with the white text "鑑定書でお届け", below it the large bold dark brown title "依存させない恋愛タロット", and at the very bottom small brown text "陽だまりの心の調律師 くりん", all text in Japanese, correctly spelled, clear and easy to read, rounded gentle Japanese font, no other text, no people, square 1:1 composition
```

### C'. 太陽と鈴＋文字（小さく表示されても目立つ）
```
elegant soft illustration for a fortune-telling service thumbnail, a large gentle sun with soft glowing rays at the top, below it three original tarot cards fanned out face down, card backs with an original sun and star pattern in muted gold on dusty lavender, a small golden bell with a coral ribbon beside the cards, tiny sparkles and chamomile flowers, dreamy warm healing mood, pastel palette of cream, honey yellow, soft coral and lavender, the illustration in the upper half, in the lower half clean Japanese typography on a plain cream background: a soft coral rounded ribbon with the white text "鑑定書でお届け", below it the large bold dark brown title "依存させない恋愛タロット", and at the very bottom small brown text "陽だまりの心の調律師 くりん", all text in Japanese, correctly spelled, clear and easy to read, rounded gentle Japanese font, no other text, no people, square 1:1 composition
```

### 文字がくずれるとき
- 文字を2つに減らす：最後の「陽だまりの心の調律師 くりん」の部分を消す
- Model を変えてみる：文字に強いモデル（Recraft の一覧で「text」や「typography」が得意と書かれているもの）

---

## ② 人生の鑑定（40代・50代向け）のメイン画像（2026-10-16）
恋愛の鑑定の画像（窓辺・カード3枚）と雰囲気をそろえて、**夕方のやわらかい光**と、**数字を書いたノート（数秘術）**を足した。文字も入れる。Recraft V4.1、1:1。

入れる文字（4つ）：
- 帯：「鑑定書でお届け」
- 大きく：「40代50代からの人生鑑定」
- 中くらい：「タロット・数秘術」
- 小さく：「陽だまりの心の調律師 くりん」

```
soft warm watercolor illustration for a fortune-telling service thumbnail, a cozy windowsill in gentle late afternoon golden light, three original tarot cards laid face down in a row on a cream linen cloth, card backs with an elegant original pattern of a sun and small stars in muted gold on dusty lavender, beside the cards an open vintage notebook with a few small handwritten numbers in gold ink, a cup of tea, a small vase of chamomile and lavender, calm mature and elegant mood for women in their forties and fifties, pastel palette of cream, honey yellow, soft coral and lavender, the illustration in the upper half, in the lower half clean Japanese typography on a plain cream background: a soft coral rounded ribbon with the white text "鑑定書でお届け", below it the large bold dark brown title "40代50代からの人生鑑定", below it medium lavender text "タロット・数秘術", and at the very bottom small brown text "陽だまりの心の調律師 くりん", all text in Japanese, correctly spelled, clear and easy to read, rounded gentle Japanese font, no other text, no people, square 1:1 composition
```
できたら確認：文字（とくに「鑑」「秘」「術」「調律」）がまちがっていないか。くずれていたらチャットに送れば、Claude が文字だけ直す。
