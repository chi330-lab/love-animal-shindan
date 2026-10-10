/* 恋愛動物タイプ診断・相性診断で共通に使うデータと関数 */

/* ---------------- cute chibi icons (100x100 viewBox, full color) ---------------- */
const ICONS = {
  cat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="catBody" cx="38%" cy="26%" r="80%">
        <stop offset="0%" stop-color="#a596d9"/><stop offset="55%" stop-color="#6d5da3"/><stop offset="100%" stop-color="#3d3260"/>
      </radialGradient>
      <radialGradient id="catEar" cx="35%" cy="20%" r="85%">
        <stop offset="0%" stop-color="#8f7fc4"/><stop offset="100%" stop-color="#4a3f70"/>
      </radialGradient>
      <filter id="catBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.4"/></filter>
    </defs>
    <ellipse cx="50" cy="86" rx="20" ry="3.5" fill="#000" opacity="0.18"/>
    <ellipse cx="50" cy="50" rx="42" ry="40" fill="#8f7fc4" opacity="0.32" filter="url(#catBlur)"/>
    <path d="M26 64 C20 78 22 90 38 93 C50 95 64 94 73 88 C82 82 82 69 75 62Z" fill="url(#catBody)"/>
    <path d="M64 58 C80 53 88 60 86 70 C82 65 74 63 67 65Z" fill="url(#catEar)"/>
    <circle cx="50" cy="45" r="28" fill="url(#catBody)"/>
    <path d="M26 28 L17 8 L37 22Z" fill="url(#catEar)"/>
    <path d="M74 28 L83 8 L63 22Z" fill="url(#catEar)"/>
    <path d="M27.5 24 L23 12 L34 19Z" fill="#f0a8c6"/>
    <path d="M72.5 24 L77 12 L66 19Z" fill="#f0a8c6"/>
    <path d="M20 22 C24 16 30 18 32 24 M80 22 C76 16 70 18 68 24" stroke="#c8bce6" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M36 54 C41 61 59 61 64 54 C59 68 41 68 36 54Z" fill="#efe9f7"/>
    <circle cx="39" cy="43" r="9" fill="#fff"/>
    <circle cx="61" cy="43" r="9" fill="#fff"/>
    <circle cx="40.6" cy="44.6" r="5.3" fill="#2b2440"/>
    <circle cx="62.6" cy="44.6" r="5.3" fill="#2b2440"/>
    <circle cx="42.6" cy="42.2" r="2.1" fill="#fff"/>
    <circle cx="64.6" cy="42.2" r="2.1" fill="#fff"/>
    <circle cx="38.4" cy="46.6" r="0.9" fill="#fff" opacity="0.85"/>
    <circle cx="60.4" cy="46.6" r="0.9" fill="#fff" opacity="0.85"/>
    <ellipse cx="27" cy="52" rx="6.4" ry="4.2" fill="#f0a8c6" opacity="0.75"/>
    <ellipse cx="73" cy="52" rx="6.4" ry="4.2" fill="#f0a8c6" opacity="0.75"/>
    <path d="M47 55 L53 55 L50 58.5Z" fill="#e28a9a"/>
    <path d="M50 58.5 L50 62 M50 62 C45 64.5 40 64 37 61.5 M50 62 C55 64.5 60 64 63 61.5" stroke="#2b2440" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <path d="M17 49 L1 45 M18 54 L2 56 M83 49 L99 45 M82 54 L98 56" stroke="#2b2440" stroke-width="1.4" stroke-linecap="round" opacity="0.5"/>
  </svg>`,

  dog: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="dogBody" cx="38%" cy="26%" r="80%">
        <stop offset="0%" stop-color="#ffe7c9"/><stop offset="55%" stop-color="#f6c98f"/><stop offset="100%" stop-color="#dc9c5c"/>
      </radialGradient>
      <radialGradient id="dogEar" cx="35%" cy="20%" r="85%">
        <stop offset="0%" stop-color="#dda06a"/><stop offset="100%" stop-color="#a86a3a"/>
      </radialGradient>
      <filter id="dogBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.4"/></filter>
    </defs>
    <ellipse cx="50" cy="86" rx="20" ry="3.5" fill="#000" opacity="0.18"/>
    <ellipse cx="50" cy="50" rx="42" ry="40" fill="#f6c98f" opacity="0.32" filter="url(#dogBlur)"/>
    <path d="M28 64 C20 78 26 90 40 93 C50 95 60 95 69 91 C80 85 80 70 73 62Z" fill="url(#dogBody)"/>
    <path d="M18 20 C4 25 2 44 14 53 C19 42 26 33 35 28Z" fill="url(#dogEar)"/>
    <path d="M82 20 C96 25 98 44 86 53 C81 42 74 33 65 28Z" fill="url(#dogEar)"/>
    <circle cx="50" cy="45" r="29" fill="url(#dogBody)"/>
    <ellipse cx="50" cy="54" rx="17" ry="14" fill="#fff7ea" opacity="0.85"/>
    <circle cx="38" cy="42" r="9.2" fill="#fff"/>
    <circle cx="62" cy="42" r="9.2" fill="#fff"/>
    <circle cx="39.7" cy="43.8" r="5.4" fill="#3a2a1a"/>
    <circle cx="63.7" cy="43.8" r="5.4" fill="#3a2a1a"/>
    <circle cx="41.7" cy="41.4" r="2.1" fill="#fff"/>
    <circle cx="65.7" cy="41.4" r="2.1" fill="#fff"/>
    <circle cx="37.4" cy="45.6" r="0.9" fill="#fff" opacity="0.85"/>
    <circle cx="61.4" cy="45.6" r="0.9" fill="#fff" opacity="0.85"/>
    <ellipse cx="27" cy="51" rx="6.6" ry="4.4" fill="#f7b3c2" opacity="0.8"/>
    <ellipse cx="73" cy="51" rx="6.6" ry="4.4" fill="#f7b3c2" opacity="0.8"/>
    <ellipse cx="50" cy="57" rx="5.6" ry="4" fill="#3a2a1a"/>
    <path d="M50 61 L50 64.5 M50 64.5 C45 68 40 67 37 63.5 M50 64.5 C55 68 60 67 63 63.5" stroke="#3a2a1a" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    <path d="M71 78 C82 73 89 80 84 89 C78 85 74 83 68 83Z" fill="url(#dogBody)"/>
  </svg>`,

  swan: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="swanBody" cx="35%" cy="22%" r="85%">
        <stop offset="0%" stop-color="#ffffff"/><stop offset="60%" stop-color="#f2f6fb"/><stop offset="100%" stop-color="#d7e4f0"/>
      </radialGradient>
      <filter id="swanBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.4"/></filter>
    </defs>
    <ellipse cx="52" cy="88" rx="22" ry="3.5" fill="#000" opacity="0.14"/>
    <ellipse cx="48" cy="66" rx="40" ry="34" fill="#dbe9f7" opacity="0.4" filter="url(#swanBlur)"/>
    <ellipse cx="46" cy="72" rx="32" ry="21" fill="url(#swanBody)"/>
    <path d="M64 28 C46 28 38 44 43 57 C50 50 59 48 68 50 C61 57 56 63 58 72" stroke="url(#swanBody)" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="65" cy="26" r="12" fill="url(#swanBody)"/>
    <path d="M75 23 L89 20 L77 30Z" fill="#f6b45e"/>
    <circle cx="68" cy="23" r="2.8" fill="#2b2440"/>
    <circle cx="69.2" cy="21.8" r="1" fill="#fff"/>
    <circle cx="66.6" cy="24.6" r="0.5" fill="#fff" opacity="0.8"/>
    <ellipse cx="60" cy="30" rx="4.4" ry="2.8" fill="#f7b3c2" opacity="0.7"/>
    <path d="M26 76 C21 83 28 90 38 87 C33 82 30 78 30 73Z" fill="#eef3fa"/>
    <path d="M64 82 C69 89 79 89 82 82 C74 82 69 79 64 76Z" fill="#eef3fa"/>
  </svg>`,

  fox: `<svg viewBox="0 -6 100 106" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="foxBody" cx="36%" cy="24%" r="82%">
        <stop offset="0%" stop-color="#ffc580"/><stop offset="55%" stop-color="#f4a94e"/><stop offset="100%" stop-color="#d97f26"/>
      </radialGradient>
      <filter id="foxBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.4"/></filter>
    </defs>
    <ellipse cx="50" cy="88" rx="20" ry="3.5" fill="#000" opacity="0.16"/>
    <ellipse cx="50" cy="52" rx="44" ry="42" fill="#f4a94e" opacity="0.3" filter="url(#foxBlur)"/>
    <path d="M76 60 C93 60 98 78 89 90 C84 79 78 74 68 71Z" fill="url(#foxBody)"/>
    <path d="M83 65 C92 65 95 76 88 83 C86 76 81 72 76 70Z" fill="#fdf3e4"/>
    <path d="M28 64 C20 78 25 90 40 93 C50 95 61 95 70 90 C81 84 81 70 72 63Z" fill="url(#foxBody)"/>
    <path d="M20 18 L8 -2 L34 17Z" fill="url(#foxBody)"/>
    <path d="M80 18 L92 -2 L66 17Z" fill="url(#foxBody)"/>
    <path d="M20.5 16 L15 3 L28 14Z" fill="#fdf3e4"/>
    <path d="M79.5 16 L85 3 L72 14Z" fill="#fdf3e4"/>
    <path d="M50 19 C70 19 81 34 77 50 C74 63 63 70 50 70 C37 70 26 63 23 50 C19 34 30 19 50 19Z" fill="url(#foxBody)"/>
    <path d="M50 41 C61 41 67 50 64 60 C61 69 39 69 36 60 C33 50 39 41 50 41Z" fill="#fdf3e4"/>
    <circle cx="38" cy="41" r="8.8" fill="#fff"/>
    <circle cx="62" cy="41" r="8.8" fill="#fff"/>
    <circle cx="39.7" cy="42.8" r="5.1" fill="#3a2410"/>
    <circle cx="63.7" cy="42.8" r="5.1" fill="#3a2410"/>
    <circle cx="41.7" cy="40.3" r="2" fill="#fff"/>
    <circle cx="65.7" cy="40.3" r="2" fill="#fff"/>
    <circle cx="37.2" cy="44.8" r="0.85" fill="#fff" opacity="0.85"/>
    <circle cx="61.2" cy="44.8" r="0.85" fill="#fff" opacity="0.85"/>
    <ellipse cx="27" cy="49" rx="6.2" ry="4" fill="#f7b3c2" opacity="0.7"/>
    <ellipse cx="73" cy="49" rx="6.2" ry="4" fill="#f7b3c2" opacity="0.7"/>
    <path d="M45 54 L55 54 L50 61Z" fill="#3a2410"/>
  </svg>`,

  rabbit: `<svg viewBox="0 -6 100 106" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rabbitBody" cx="38%" cy="24%" r="82%">
        <stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#fdeef3"/><stop offset="100%" stop-color="#f2cede"/>
      </radialGradient>
      <filter id="rabbitBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.4"/></filter>
    </defs>
    <ellipse cx="50" cy="90" rx="19" ry="3.5" fill="#000" opacity="0.14"/>
    <ellipse cx="50" cy="56" rx="42" ry="42" fill="#f7d3e2" opacity="0.32" filter="url(#rabbitBlur)"/>
    <path d="M30 70 C22 81 27 91 40 93 C50 95 61 95 70 91 C81 85 78 71 71 66Z" fill="url(#rabbitBody)"/>
    <path d="M30 44 C23 22 28 0 38 -3 C45 0 45 24 43 45Z" fill="url(#rabbitBody)"/>
    <path d="M70 44 C77 22 72 0 62 -3 C55 0 55 24 57 45Z" fill="url(#rabbitBody)"/>
    <path d="M33 41 C29 25 32 6 39 3 C43 6 43 26 41 43Z" fill="#f0a8c6"/>
    <path d="M67 41 C71 25 68 6 61 3 C57 6 57 26 59 43Z" fill="#f0a8c6"/>
    <circle cx="50" cy="53" r="28" fill="url(#rabbitBody)"/>
    <circle cx="38" cy="51" r="9" fill="#fff"/>
    <circle cx="62" cy="51" r="9" fill="#fff"/>
    <circle cx="39.7" cy="52.8" r="5.2" fill="#5c3a44"/>
    <circle cx="63.7" cy="52.8" r="5.2" fill="#5c3a44"/>
    <circle cx="41.7" cy="50.3" r="2.1" fill="#fff"/>
    <circle cx="65.7" cy="50.3" r="2.1" fill="#fff"/>
    <circle cx="37.4" cy="54.6" r="0.9" fill="#fff" opacity="0.85"/>
    <circle cx="61.4" cy="54.6" r="0.9" fill="#fff" opacity="0.85"/>
    <ellipse cx="27" cy="59" rx="6.6" ry="4.2" fill="#f0a8c6" opacity="0.8"/>
    <ellipse cx="73" cy="59" rx="6.6" ry="4.2" fill="#f0a8c6" opacity="0.8"/>
    <path d="M46 61 L54 61 L50 65Z" fill="#e28a9a"/>
    <path d="M50 65 L50 68 M50 68 C46 70.5 41 70 38 67.5 M50 68 C54 70.5 59 70 62 67.5" stroke="#5c3a44" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  </svg>`,

  owl: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="owlBody" cx="36%" cy="22%" r="85%">
        <stop offset="0%" stop-color="#c9e5d3"/><stop offset="55%" stop-color="#8fbb9f"/><stop offset="100%" stop-color="#5c8a6c"/>
      </radialGradient>
      <filter id="owlBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3.4"/></filter>
    </defs>
    <ellipse cx="50" cy="92" rx="20" ry="3.5" fill="#000" opacity="0.16"/>
    <ellipse cx="50" cy="56" rx="44" ry="44" fill="#8fbb9f" opacity="0.32" filter="url(#owlBlur)"/>
    <path d="M36 22 L24 2 L44 16Z" fill="#6d9c7c"/>
    <path d="M64 22 L76 2 L56 16Z" fill="#6d9c7c"/>
    <path d="M50 20 C74 20 85 38 83 58 C81 80 68 94 50 94 C32 94 19 80 17 58 C15 38 26 20 50 20Z" fill="url(#owlBody)"/>
    <path d="M22 60 C17 69 19 78 26 83 C24 74 24 67 26 60Z" fill="#6d9c7c"/>
    <path d="M78 60 C83 69 81 78 74 83 C76 74 76 67 74 60Z" fill="#6d9c7c"/>
    <circle cx="36" cy="53" r="17" fill="#fdfaf2"/>
    <circle cx="64" cy="53" r="17" fill="#fdfaf2"/>
    <circle cx="36" cy="54" r="10.4" fill="#4a3320"/>
    <circle cx="64" cy="54" r="10.4" fill="#4a3320"/>
    <circle cx="39" cy="51" r="3.4" fill="#fff"/>
    <circle cx="67" cy="51" r="3.4" fill="#fff"/>
    <circle cx="33.6" cy="57.4" r="1.3" fill="#fff" opacity="0.8"/>
    <circle cx="61.6" cy="57.4" r="1.3" fill="#fff" opacity="0.8"/>
    <path d="M45 64 L55 64 L50 73Z" fill="#f6b45e"/>
    <ellipse cx="50" cy="80" rx="8" ry="4.4" fill="#6d9c7c" opacity="0.55"/>
    <path d="M22 84 L17 93 M27 86 L24 95 M73 86 L76 95 M78 84 L83 93" stroke="#f6b45e" stroke-width="2.6" stroke-linecap="round"/>
  </svg>`
};

const ANIMALS = {
  cat:{
    name:"黒猫", color:"var(--cat)",
    catch:"追われると冷める、追うと燃える。愛したいのに、逃げたくなる",
    desc:"好きな人ほど、なぜか素っ気なくしてしまう。近づかれると、心のどこかで“逃げなきゃ”と感じてしまう。それは冷めているからじゃない。傷つく前に自分を守る術を、誰よりも知っているだけ。ペースを尊重してくれる人の前でだけ、あなたは誰よりも深く愛せる。",
    keywords:["自由な恋","マイペース","駆け引き上手"]
  },
  dog:{
    name:"子犬", color:"var(--dog)",
    catch:"好きになったら止まらない。一途すぎて、不安にもなる",
    desc:"好きな人には、まっすぐ気持ちを伝えられる。でもその分、既読がつかないだけで不安になったり、嫌われたかもと考えすぎてしまう夜もある。それは愛情が浅いからじゃなく、深いから。安心をくれる人と出会えたとき、そのまっすぐさは何よりの魅力になる。",
    keywords:["一途","素直","尽くし上手"]
  },
  swan:{
    name:"白鳥", color:"var(--swan)",
    catch:"静かな安心感で、愛をゆっくり育てる",
    desc:"感情の波に振り回されることは少なく、穏やかに関係を築いていける。刺激的な恋より、信頼できる恋を選びたいタイプ。派手さはなくても、あなたがそばにいるだけで、相手はどこかほっとしている。それは、簡単には真似できない愛の力。",
    keywords:["安定感","包容力","信頼"]
  },
  fox:{
    name:"狐", color:"var(--fox)",
    catch:"本音を隠すのは、傷つきたくないから",
    desc:"余裕がある人に見られがちだけど、本当は誰よりも慎重に相手を見極めている。簡単に心を明け渡さないのは、何かを守れなかった経験があるからかもしれない。信頼できると確信した相手にだけ、あなたは静かに、でも深く心を開く。",
    keywords:["魅力的","ミステリアス","主導権"]
  },
  rabbit:{
    name:"うさぎ", color:"var(--rabbit)",
    catch:"つながりが切れることが、一番怖い",
    desc:"好きな人とは、できるだけ近くにいたい。連絡が減ると、自分が何か悪いことをしたのかと不安になる。それは愛情が浅いからじゃない、むしろ誰よりも深く人を想えるから。安心をくれる関係の中で、その愛情深さはまっすぐな魅力に変わる。",
    keywords:["愛情深い","甘え上手","絆重視"]
  },
  owl:{
    name:"梟", color:"var(--owl)",
    catch:"簡単には心を開かない、開いたら一途",
    desc:"誰にでも心を開けるタイプじゃない。傷つくのが怖くて、最初は距離を取ってしまう。でも、一度“この人は大丈夫”と思えた相手には、誰よりも静かに、深く愛情を注ぐ。時間がかかる分、あなたの愛は簡単には壊れない。",
    keywords:["慎重","観察眼","深い愛情"]
  }
};

/* ---------------- おすすめ（アフィリエイト）設定 ----------------
   ASP（A8.net / もしもアフィリエイト / Amazonアソシエイト 等）で取得した
   広告リンクを url に、計測用の画像URL（0.gif）があれば pixel に貼り付けてください。
   url が空の項目は表示されません。
   ※ 表示文言は、提携先の広告規約・表現ルールに合わせて調整してください。 */
const OFFERS = {
  uranai: {
    title:"電話占い【ココナラ】",
    text:"ひとりで抱えている恋の悩みを、プロの占い師に話してみる。新規会員登録で3,000円分の無料クーポンプレゼント中。",
    cta:"占い師を見てみる",
    url:"https://px.a8.net/svt/ejp?a8mat=45G0HT+2W6X6Q+2PEO+C3BAQ",
    pixel:"https://www10.a8.net/0.gif?a8mat=45G0HT+2W6X6Q+2PEO+C3BAQ"
  },
  matching: {
    title:"価値観で探せるマッチングアプリ",
    text:"性格や価値観の診断から、相性のいい相手を探せる。（18歳以上・独身の方向け）",
    cta:"アプリをチェックする",
    url:""
  },
  counseling: {
    title:"オンラインの恋愛・心理カウンセリング",
    text:"不安になりやすいクセを、専門家と一緒にほどいていく。",
    cta:"カウンセラーを探す",
    url:""
  },
  book: {
    title:"愛着スタイルを知る本",
    text:"\"なぜいつも同じ恋をしてしまうのか\"を、心理学からやさしく解説。",
    cta:"本を見てみる",
    url:""
  }
};
/* タイプごとに表示するおすすめ（上から順に表示。url が空のものは飛ばす） */
const TYPE_OFFERS = {
  cat:["uranai","book"],
  dog:["uranai","counseling"],
  swan:["matching","book","uranai"],
  fox:["uranai","matching"],
  rabbit:["counseling","uranai"],
  owl:["matching","book","uranai"]
};
/* 1つの結果画面に出すおすすめの最大数（url が入っているものを上から順に） */
const MAX_RECS = 2;
const RECS_LEDE = {
  cat:"距離をとりたくなる本当の理由を、誰かと一緒にのぞいてみませんか。",
  dog:"不安な夜を、ひとりで過ごさなくていいように。",
  swan:"あなたの穏やかさを分かってくれる人と、出会うために。",
  fox:"隠している本音を、たまには安心して話せる場所を。",
  rabbit:"\"つながりが切れる不安\"との付き合い方を見つけるために。",
  owl:"じっくり相手を知ってから始まる恋を、あなたのペースで。"
};

function renderRecs(key){
  const items = (TYPE_OFFERS[key]||[]).filter(id=>OFFERS[id] && OFFERS[id].url).slice(0, MAX_RECS).map(id=>({id, ...OFFERS[id]}));
  if(!items.length) return '';
  return `
    <div class="recs">
      <div class="recs-head">FOR YOU</div>
      <p class="recs-lede">${RECS_LEDE[key]||''}</p>
      ${items.map(o=>`
        <a class="rec" href="${o.url}" target="_blank" rel="sponsored noopener" data-offer="${o.id}">
          <div class="rec-top"><span class="rec-pr">PR</span><span class="rec-title">${o.title}</span></div>
          <div class="rec-text">${o.text}</div>
          <span class="rec-cta">${o.cta} &rarr;</span>
        </a>
        ${o.pixel ? `<img src="${o.pixel}" width="1" height="1" alt="" style="position:absolute; width:1px; height:1px; border:0;">` : ''}
      `).join('')}
      <p class="recs-note">※ 上記は広告（アフィリエイトリンク）です。<br>リンク先で購入・登録されると当サイトに報酬が支払われる場合があります。</p>
    </div>
  `;
}

/* ---------------- アクセス解析（Google アナリティクス） ---------------- */
function track(name, params){
  try{ if(typeof gtag === 'function') gtag('event', name, params || {}); }catch(e){}
}
