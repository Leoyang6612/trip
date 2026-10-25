const mapFor = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const tabelogFor = (query) => `https://tabelog.com/rstLst/?sk=${encodeURIComponent(query)}`;

const stop = (time, name, note, transport, hours, detail, source = '') => ({
  time,
  name,
  note,
  transport,
  hours,
  detail,
  source,
  map: mapFor(name)
});

const restaurant = (name, note, query = name, official = '') => ({
  name,
  note,
  map: mapFor(query),
  tabelog: tabelogFor(query),
  official
});

const days = [
  {
    number: '01', date: '11/24', city: 'KYOTO', title: '京都初探與整裝',
    route: '關西機場 → 京都 → 四條河原町',
    intro: '抵達關西機場後搭乘 JR HARUKA 前往京都，今晚不追景點，先把行李放好、在河原町吃一頓抵達日本的晚餐。',
    map: mapFor('京都車站'),
    restaurants: [restaurant('四條河原町／先斗町', '抵達晚，建議以不用久候的店家為主。', '先斗町 京都 餐廳')],
    stops: [
      stop('19:20', '抵達關西機場 KIX', '入境、領行李，準備前往 JR 關西機場站。', '飛機；步行至 JR 車站', '機場全天運作；航班、入境與行李時間依當日狀況', '若從第一航廈抵達，JR 車站位在航廈旁；第二航廈需搭接駁車到第一航廈。'),
      stop('20:30–21:00', 'KIX → JR 關西機場站', 'Excel 原表抓 30 分鐘；實際通常不必這麼久，但建議保留買票與找月台時間。', '步行；購買／兌換 JR 車票', 'JR 售票處依車站營業時間；以當日班次為準', 'HARUKA 必須依實際班次搭乘；若使用票券，先確認兌換地點與可搭列車。'),
      stop('約 21:00–22:20', 'JR HARUKA → 京都車站', '約 80 分鐘；請以 2026 年 11 月 24 日的官方時刻表確認班次。', 'JR HARUKA', '依當日列車時刻', '晚上抵達仍可搭乘，但不要把 21:00 當成固定發車時間。'),
      stop('22:20 之後', '京都站 → 絆（京都）', '原 Excel 寫巴士／公車；帶行李且時間較晚，網站推薦直接搭計程車。', '推薦：計程車；替代：公車', '計程車 24 小時可搭乘；公車晚間班次較少', '第一晚以少轉乘、直接到住宿為優先。')
    ]
  },
  {
    number: '02', date: '11/25', city: 'KYOTO', title: '清水寺與祇園精華漫步線',
    route: '清水寺 → 二年坂 → 祇園白川',
    intro: '清晨走進京都最經典的古街，從清水舞台一路下坡，穿過八坂之塔、建仁寺與花見小路，讓傍晚停在白川的柳樹邊。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=清水寺&destination=祇園白川&travelmode=walking',
    restaurants: [
      restaurant('京都柳小路TAKA 居酒屋', 'Excel 推薦；請出發前確認營業時間與是否需要訂位。', '京都柳小路TAKA'),
      restaurant('京洛焼肉やぶ', 'Excel 推薦；適合安排在祇園白川附近晚餐。', '京洛焼肉やぶ')
    ],
    stops: [
      stop('07:00–07:30', '飯店 → 清水寺', 'Excel 中的 HARUKA 不適用京都市區；網站推薦計程車，替代方案是公車。', '推薦：計程車；替代：市營巴士', '道路交通依早晨路況', '早上直接前往清水寺可避免公車塞車，也能保留更多參觀時間。'),
      stop('07:30–09:30', '清水寺', '建議 08:00 前抵達，參觀本堂、清水舞台與音羽瀑布。', '步行', '常態參考：06:00–18:00；特別夜間拝觀時段另計', '營業時間會因季節與特別拝觀調整，出發前請查看官方公告。', 'https://www.kiyomizudera.or.jp/en/'),
      stop('09:30–10:30', '三年坂・二年坂・法觀寺', '沿古街散步，拍攝經典的八坂之塔；順路到八坂庚申堂。', '步行', '街區為戶外道路，全天可通行；各店家時間不同', '古街可以早晨散步，但商店尚未全部開門；請勿阻塞巷道或拍攝私有場所。'),
      stop('10:30–11:00', '八坂庚申堂', '位於八坂之塔下方，以色彩斑斕的倒吊猴束縛福袋聞名。', '步行', '寺院授與所時間依當日公告；外部街區可步行', '建議把它當成沿途短停景點，不要為了等待開門打亂整條路線。'),
      stop('11:00–12:00', '高台寺・寧寧之道', '穿過寧寧之道即可抵達；枯山水庭園與竹林適合放慢腳步。', '步行', '常態參考：09:00–17:30；最後入場約 17:00', '夜間特別拝觀與季節活動可能改變開放時間。', 'https://www.kodaiji.com/e_index.html'),
      stop('12:00–13:30', '午餐時間', '可在寧寧之道、石塀小路或八坂神社前的祇園商店街用餐。', '步行', '餐廳各自營業；熱門店家可能需要排隊', '建議把午餐視為彈性時段，依當天排隊狀況選店。'),
      stop('13:30–14:30', '八坂神社', '欣賞舞殿燈籠，可到美御前社參拜。', '步行', '神社境內通常可自由參拜；授與所時間依官方公告', '境內戶外區域可作為步行路線的一部分，授與所與社務所另有時間。'),
      stop('14:30–15:30', '建仁寺', '京都最古老禪寺之一，法堂雙龍圖與庭園是參觀重點。', '步行', '常態參考：10:00–17:00；最後入場約 16:30', '若遇寺院行事，部分區域可能臨時關閉。'),
      stop('15:30–16:30', '花見小路', '傍晚有機會遇到前往工作的藝伎；兩側私有巷弄嚴禁拍照。', '步行', '街區戶外全天；店舖與私人區域各自管理', '請遵守祇園拍攝禮儀，不追拍藝伎，也不要進入禁止拍照的巷弄。'),
      stop('16:30–17:30', '祇園白川', '沿木造町家與白川散步，傍晚點燈後氣氛很好。', '步行', '戶外街區全天；沿岸店家各自營業', '這段不需要門票，適合依體力延長或提前結束。')
    ]
  },
  {
    number: '03', date: '11/26', city: 'KYOTO', title: '經典三大世界遺產縱跨線',
    route: '伏見稻荷 → 二條城 → 金閣寺',
    intro: '用鐵道與公車串起京都的三種風景：千本鳥居、幕府御殿與鏡湖池的金色倒影。早起，是這條路線順利的關鍵。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=伏見稻荷大社&destination=金閣寺&travelmode=transit',
    restaurants: [
      restaurant('京都PIZZA400度', 'Excel 推薦，位於二條城附近；請確認當日營業與候位。', '京都 PIZZA400度 二條城'),
      restaurant('Kitchen Papa 漢堡排', 'Excel 推薦，可放在金閣寺周邊午餐或備選。', 'Kitchen Papa 京都')
    ],
    stops: [
      stop('07:00–07:30', '絆（京都）→ 伏見稻荷', '不建議全程步行；若住宿靠近清水五條，京阪線較順。', '推薦：步行至京阪＋電車；替代：JR 奈良線', '電車依當日班次', '推薦路線：清水五條／七條 → 京阪伏見稻荷；下車後步行即到神社。'),
      stop('07:30–09:30', '伏見稻荷大社', '08:00 前抵達拍攝千本鳥居，走到奧社奉拜所後折返。', '京阪或 JR；步行', '境內可全天參拜；授與所通常約 08:30–16:30，依官方公告', '千本鳥居不必走完全程，依後續二條城時間在奧社折返。'),
      stop('09:30–10:15', '伏見稻荷 → 二條城', '先搭京阪到三條，再轉地下鐵東西線到二條城前。', '京阪＋地下鐵東西線', '依當日班次；轉乘需步行', '比繞回京都站更符合景點方向，預留轉乘與找出口時間。'),
      stop('10:15–12:00', '二條城', '參觀二之丸御殿，留意防範刺客的鸝鳴地板。', '步行', '常態參考：08:45–17:00；最後入城約 16:00', '二之丸御殿與庭園可能有不同的最後入場時間，請以官方公告為準。', 'https://nijo-jocastle.city.kyoto.lg.jp/?lang=en'),
      stop('12:00–13:30', '午餐＋御金神社', '周邊町家咖啡廳，或往烏丸御池吃拉麵；時間足夠可順道參拜。', '步行', '神社境內戶外可參拜；餐廳時間各自不同', '如果二條城延遲，建議放棄御金神社，不要壓縮金閣寺停留時間。'),
      stop('13:30–14:15', '二條城 → 金閣寺', '公車 12 號方向合理，但京都市區塞車時要留緩衝。', '市營巴士；替代：計程車', '依道路狀況與班次', '若 14:15 前一定要到，計程車是比較穩的備選。'),
      stop('14:15–15:45', '金閣寺（鹿苑寺）', '下午陽光適合觀賞舍利殿與鏡湖池倒影。', '步行', '常態參考：09:00–17:00', '金閣寺是單向參觀路線，入口與出口都有商店與休息處。', 'https://www.shokoku-ji.jp/kinkakuji/'),
      stop('15:45–17:00', '北野天滿宮／平野神社', '二選一：天滿宮祈求學業，或平野神社欣賞季節景色。', '步行／市營巴士', '神社境內戶外；授與所與寶物館依各自公告', '若金閣寺排隊或公車延誤，這段可直接刪除。')
    ]
  },
  {
    number: '04', date: '11/27', city: 'ARASHIYAMA', title: '嵐山竹林嵯峨野風情線',
    route: 'JR 馬堀 → 小火車 → 竹林 → 天龍寺 → 桂川',
    intro: '以 Excel 為準：先到 JR 馬堀再搭嵯峨野觀光小火車，從竹林上方一路向下走；回程推薦 JR，比嵐電轉乘更直接。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=トロッコ嵯峨駅&destination=嵐電嵐山駅&travelmode=walking',
    restaurants: [
      restaurant('鯛匠 HANANA', 'Excel／原規劃推薦的鯛魚茶泡飯；建議提早排隊。', '鯛匠 HANANA 嵐山'),
      restaurant('嵐山湯豆腐', '嵐山大街的湯豆腐套餐，可依現場候位選擇。', '嵐山 湯豆腐')
    ],
    stops: [
      stop('07:00–07:30', '絆（京都）→ 京都站', '住宿附近若靠近地鐵五條站，可搭一站到京都；也可步行／計程車。', '地鐵／步行／計程車', '依當日班次與路況', '要趕小火車時，計程車是最簡單的備選。'),
      stop('07:30–08:15', '京都 → JR 馬堀', '搭 JR 嵯峨野線，預留月台與候車時間。', 'JR 嵯峨野線', '依當日班次；小火車票需配合發車時間', 'JR 馬堀站不是小火車站，抵達後還要步行到 Torokko 龜岡。'),
      stop('08:15–08:45', 'JR 馬堀 → Torokko 龜岡', '步行約 10–15 分鐘，帶行李或人多時請抓到 20 分鐘。', '步行', '戶外道路全天可走', '請先下載離線地圖，沿指標前往小火車站。'),
      stop('08:45–09:15', '報到／等車', '票券與座位請提早確認，避免因 JR 延誤錯過班次。', '步行', '依小火車班次', '嵯峨野觀光小火車是預約行程的關鍵，出發前先確認官方時刻。', 'https://www.sagano-kanko.co.jp/en/'),
      stop('09:15–09:45', '嵯峨野觀光小火車', '從 Torokko 龜岡搭到 Torokko 嵐山。', '嵯峨野觀光小火車', '依季節時刻表；冬季／休業日可能調整', '這一段以官方時刻表為準，不把 09:15 視為全年固定班次。', 'https://www.sagano-kanko.co.jp/en/'),
      stop('09:45–10:30', '嵐山竹林・野宮神社', '從竹林小徑開始，早上的人潮較少；留意黑色鳥居。', '步行', '竹林為戶外道路；野宮神社參拜時間依現場公告', '竹林沒有單一門票時段，商店與神社授與所各自營業。'),
      stop('10:30–12:00', '天龍寺', '由北門入寺，欣賞曹源池庭園，從正門出到商店街。', '步行', '常態參考：08:30–17:30；季節可能提前閉門', '庭園與諸堂可能有不同開放時間，請以官方公告為準。', 'https://www.tenryuji.com/en/'),
      stop('12:00–13:30', '嵐山大街午餐', '鯛匠 HANANA 或湯豆腐套餐，熱門店家建議提早排隊。', '步行', '餐廳各自營業；午餐尖峰可能候位', '若不想排隊，可將午餐改成沿途小吃，保留下午彈性。'),
      stop('13:30–15:00', '常寂光寺／祐齋亭', '二選一：桂川窗景倒影，或依山而建的幽靜古剎。', '步行', '各自有季節性營業與休館安排', '祐齋亭通常需要預約；常寂光寺則受季節景色與天候影響。'),
      stop('15:00–16:30', '渡月橋・桂川', '午後陽光灑在桂川上很漂亮，可安排咖啡與散步。', '步行', '戶外全天；咖啡店各自營業', '這一段可以依體力縮短，讓回程留出緩衝。'),
      stop('16:30–17:15', '和服森林 → 返回市區', 'Excel 寫嵐電；若想節省轉乘，推薦 JR 嵯峨嵐山 → 京都。', '推薦：JR；替代：嵐電', '依當日班次', '嵐電只到四條大宮，並非直達京都站；走累時 JR 會比較直接。')
    ]
  },
  {
    number: '05', date: '11/28', city: 'AMANOHASHIDATE', title: '天橋立雙展望台自助行',
    route: '京都 → View Land → 觀光船 → 傘松公園',
    intro: '採用自助行程：先前往距離車站較近的 View Land，再搭觀光船到一之宮，步行前往傘松公園。兩座展望台一天內都能安排，但必須配合列車與船班，不宜把完整穿越沙洲安排成主要交通方式。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=天橋立駅&destination=傘松公園&travelmode=transit',
    restaurants: [
      restaurant('天橋立站／智恩寺周邊午餐', '建議回到車站一側用餐；若要在一之宮吃飯，請依觀光船班次安排。', '天橋立站 餐廳'),
      restaurant('一之宮周邊海鮮與地方料理', '傘松公園附近用餐選擇較少，建議先查營業日與候位。', '傘松公園 餐廳')
    ],
    stops: [
      stop('06:30–07:00', '絆（京都）→ 京都站', 'Day 5 為天橋立日，建議前一晚確認特急班次與劃位。', '地鐵／步行／計程車', '依當日班次', 'Excel 標註「跟團」；本頁先採用你確認的自行前往版本，若實際參加旅行團請以集合通知為準。'),
      stop('07:30–10:00', '京都 → 天橋立站', '搭特急列車前往天橋立，建議預約指定席。', 'JR 特急 Hashidate', '依 2026 年 11 月 28 日時刻表；車票／周遊券依資格使用', '關西廣域周遊券是否適用、座位是否能預約，請在購票前確認官方規則。'),
      stop('10:00–10:15', '天橋立站 → View Land', 'View Land 位於車站一側，步行前往比先搭船更順。', '步行', '戶外道路全天；展望台依營業時間', '先去 View Land 可以先完成離車站最近的展望台，再前往另一側。'),
      stop('10:15–11:15', '天橋立 View Land', '搭單人吊椅／纜車登上展望台，俯瞰天橋立沙洲。', '步行＋纜車／吊椅', '常態參考：09:00–17:00；最後搭乘時間依官方公告', '風雨或強風可能影響吊椅運行；若停駛，改搭纜車或調整順序。', 'https://www.viewland.jp/'),
      stop('11:15–12:00', '天橋立碼頭 → 一之宮碼頭', '不要徒步穿越整條沙洲；推薦搭觀光船前往傘松公園一側。', '天橋立觀光船', '依觀光船班次；天候與季節可能調整', '請把等船時間、步行到碼頭時間一併計入；若船班不合，可查巴士替代。', 'https://www.amano-hashidate.com/'),
      stop('12:00–13:15', '傘松公園', '搭纜車／吊椅登上展望台，完成第二個視角。', '纜車／吊椅', '常態參考：09:00–17:00；最後搭乘時間依官方公告', '傘松公園的股覗き視角與 View Land 不同；兩個展望台都去時，這裡不要停留過久。', 'https://www.amano-hashidate.com/'),
      stop('13:15–14:00', '一之宮周邊午餐', '可在傘松公園附近簡單用餐，或依船班回到天橋立站一側再吃。', '步行', '餐廳各自營業；北側店家選擇較少', '若回程特急時間緊，建議把午餐控制在 45 分鐘內。'),
      stop('14:00–15:30', '觀光船返回・天橋立散策', '搭船返回後，可走智恩寺與沙洲入口附近，不建議再徒步完整穿越沙洲。', '觀光船＋步行', '戶外景點全天；船班依公告', '保留回車站、買伴手禮與臨時延誤的緩衝。'),
      stop('15:30–16:30', '天橋立站集合／回程準備', '建議 16:00 前回到車站，不要把最後一班接駁船當成唯一方案。', '步行', '車站依列車班次開放', '這是整天最重要的緩衝時段。'),
      stop('約 16:30–19:00', '天橋立 → 京都', '搭特急回京都；實際班次與座位需提前確認。', 'JR 特急', '依當日班次', '如果去程或景點排隊延誤，優先保住回程座位，不要再增加其他景點。')
    ]
  },
  {
    number: '06', date: '11/29', city: 'OSAKA', title: '心齋橋、道頓堀吃逛買',
    route: '京都 → 新世界寄行李 → 心齋橋 → 道頓堀',
    intro: '從百貨、動漫與銀飾開始，沿著橘街一路走到道頓堀。京都退房到大阪寄放行李的時間已提前，避免壓縮下午行程。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=心齋橋PARCO&destination=戎橋&travelmode=walking',
    restaurants: [
      restaurant('蟹道樂', 'Excel 推薦；需要訂位，請確認分店與用餐時間。', '蟹道樂 道頓堀本店'),
      restaurant('ABURIYA', 'Excel 推薦的北海道國產牛燒肉吃到飽；需要訂位。', 'ABURIYA 大阪'),
      restaurant('HARBS／PABLO／甲賀流章魚燒', '下午茶備選，可依當天排隊狀況選擇。', '心齋橋 HARBS')
    ],
    stops: [
      stop('08:30–09:30', '京都 → 大阪住宿寄行李', 'Excel 原本 09:30 出發太緊；網站採提前出發版本。', 'JR → 新今宮；再步行至住宿', '依當日 JR 班次', '先到 CHECK inn 大阪新世界寄放行李，再開始心齋橋行程。'),
      stop('10:00–11:30', '心齋橋 PARCO', '從新今宮／動物園前搭御堂筋線到心齋橋。', '大阪 Metro 御堂筋線', '商場常態參考：10:00–20:00；店舖各自不同', 'Excel 提到 PARCO B2 與心齋橋站 4-B 出口相連，適合當作逛街起點。', 'https://shinsaibashi.parco.jp/'),
      stop('11:30–13:00', '美國村', '逛街、拍照，接著步行往橘街。', '步行', '街區戶外全天；店家各自營業', '適合把想買的店先記在地圖上，避免逛街時來回折返。'),
      stop('13:00–15:30', '橘街・堀江・心齋橋商店街', '安排午餐、銀飾與選物店。', '步行', '店家各自營業', '保留下午茶彈性，不需要把每一家店都排成固定時間。'),
      stop('17:30–19:00', '道頓堀・戎橋', '欣賞固力果跑跑人招牌與河岸霓虹。', '步行', '戶外街區全天；各店家不同', '熱門餐廳建議先訂位，晚餐不要只依賴現場候位。'),
      stop('19:30–20:00', 'Wonder Cruise（Optional）', 'Excel 建議約 19:30 看夜景；要先確認船班與訂位。', '道頓堀水上觀光船', '常態參考：夜間約 17:00–21:30；依官方班次', '若搭船，晚餐建議排在 20:00 後。')
    ]
  },
  {
    number: '07', date: '11/30', city: 'OSAKA', title: '環球影城一日遊',
    route: '新今宮 → 西九條 → Universal City',
    intro: '把一整天交給 USJ。先從超級瑪利歐世界開始，再依園區動線安排熱門設施。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=新今宮駅&destination=ユニバーサル・スタジオ・ジャパン&travelmode=transit',
    guide: {
      kicker: 'USJ NOTE',
      title: '環球影城攻略',
      items: [
        '善用 USJ App 查看整理券、區域入場與即時等待時間。',
        '可考慮單人乘坐，縮短熱門設施的等候時間。',
        '園內禁帶外食，離園後不可再次入園；午餐與回程時間要先留意。'
      ]
    },
    stops: [
      stop('06:30–07:10', '新今宮 → Universal City', '在西九條站轉 JR 夢咲線，抵達 Universal City 後步行前往園區。', 'JR 大阪環狀線／夢咲線', '依當日班次；Day 7 園區 09:00 開園', '交通方向正確；抵達後依現場動線前往園區入口。'),
      stop('09:00–20:30', '超級瑪利歐世界', '入園後先確認區域入場與整理券，再安排熱門設施。', '步行', 'Day 7（11/30）官方營運時間：09:00–20:30', '當日實際入場與區域入場規則，請以官方公告為準。', 'https://www.usj.co.jp/web/en/us'),
      stop('白天', '庫巴・咚奇剛・哈利波特', '依 App 等待時間調整：庫巴挑戰書、咚奇剛瘋狂礦車、禁忌之旅。', '園內步行', '依 USJ 當日運營時間', '熱門設施與期間限定活動會依當日營運狀況調整。', 'https://www.usj.co.jp/web/en/us'),
      stop('下午', '小小兵・Hollywood 區', '小小兵瘋狂乘車遊，以及當期活動（例如芙莉蓮）依公告為準。', '園內步行', '依當期活動公告', '設施與期間限定活動可能因日期調整，出發前查看官方 App。', 'https://www.usj.co.jp/web/en/us'),
      stop('20:30–21:30', 'USJ → 飯店', '離園後搭 JR 返回新今宮，晚餐可安排在新世界。', 'JR 夢咲線／大阪環狀線', '依末班車與園區散場人潮', '不要壓最後一班車，離園後先確認轉乘方向。')
    ]
  },
  {
    number: '08', date: '12/01', city: 'OSAKA', title: '歷史、神社與溫泉療癒一日遊',
    route: '大阪城 → 難波八阪神社 → 新世界 → Spa World',
    intro: '由北往南順路移動，白天看大阪城與獅子頭神殿，下午把時間留給新世界，最後用溫泉替 USJ 的疲憊收尾。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=大阪城天守閣&destination=スパワールド&travelmode=transit',
    restaurants: [restaurant('新世界串炸', '通天閣周邊可作遲來的午餐；尖峰以外較容易入座。', '新世界 串炸')],
    stops: [
      stop('08:30–09:00', '飯店 → 大阪城', '從新今宮搭 JR 大阪環狀線到森之宮，通常比多次轉乘更直觀。', '推薦：JR 大阪環狀線；替代：大阪 Metro', '依當日班次', '大阪城公園範圍很大，從車站到天守閣仍要步行約 15 分鐘以上。'),
      stop('09:00–10:30', '大阪城天守閣', '參觀天守閣，預留入館與排隊時間。', '步行', '常態參考：09:00–17:00；最後入館約 16:30', '天守閣與大阪城公園是不同範圍，請不要只用天守閣的時間估算整段行程。', 'https://www.osakacastle.net/'),
      stop('10:30–11:30', '大阪城御座船', '實際乘船時間與售票方式依當日公告；建議提前到碼頭確認。', '步行＋御座船', '依當日班次與售票狀況', '御座船可能受天候與滿席影響，請保留大阪城公園內的步行緩衝。'),
      stop('11:30–12:30', '大阪城公園散步', '從景點返回車站前，將這段作為緩衝。', '步行', '戶外公園依公告開放', '如果前面延誤，這段可縮短，不要犧牲後面的神社與溫泉。'),
      stop('12:30–13:15', '大阪城 → 難波八阪神社', 'Excel 原估 30 分鐘；加上公園內步行，建議抓 45 分鐘。', '中央線 → 本町轉御堂筋線 → 難波', '依班次與步行時間', '到難波後還需步行約 6–10 分鐘至神社。'),
      stop('13:15–13:55', '難波八阪神社', '拍攝巨大的獅子頭神殿，停留約 30–40 分鐘。', '步行', '境內戶外可參拜；社務所與授與所依公告', '午後仍可拍照，但請留意 17:00 前後的社務所時間。'),
      stop('14:00–15:30', '新世界本通・通天閣', '吃遲來的午餐與串炸，再到通天閣周邊散步。', '御堂筋線至動物園前＋步行', '通天閣常態參考：09:00–20:30；最後入場約 20:00', '從難波到動物園前僅數站，但地下街步行出口可能耗時。', 'https://www.tsutenkaku.co.jp/Guide-pdf/mishiran-guide-english.pdf'),
      stop('15:30–19:30', 'Spa World 溫泉大世界', '把溫泉排在最後，泡湯、休息與補眠。', '步行', '設施長時間營業；浴場、岩盤浴與入館時間依官方公告', '帶好毛巾、替換衣物與必要用品；入館規定可能變動。', 'https://www.spaworld.co.jp/english/'),
      stop('19:30 之後', '新世界／難波晚餐', '泡完湯後可留在新世界，或搭御堂筋線回難波。', '步行／御堂筋線', '餐廳各自營業', '以住宿附近用餐為優先，避免泡湯後再長距離移動。')
    ]
  },
  {
    number: '09', date: '12/02', city: 'OSAKA', title: '中之島與北浜的城市散步',
    route: '中之島公園 → 北浜 → 天神橋筋商店街',
    intro: '在旅程最後留一點城市的空白：河岸、公園、咖啡店與日本最長商店街，晚上再到天滿橋吃飯與按摩。',
    map: 'https://www.google.com/maps/dir/?api=1&origin=中之島公園&destination=天神橋筋商店街&travelmode=walking',
    restaurants: [restaurant('北浜咖啡／午餐', 'Excel 建議保留彈性；可先以 Tabelog 查當天營業與候位。', '北浜 大阪 餐廳')],
    stops: [
      stop('09:30–10:00', '飯店 → 中之島公園', '從動物園前／新今宮搭地鐵至北浜或淀屋橋，再步行。', '大阪 Metro＋步行', '依當日班次', '目的地不同時，北浜與淀屋橋是兩個可能的下車點。'),
      stop('10:00–11:00', '中之島公園', '沿河岸散步，享受城市節奏。', '步行', '戶外公園依公告開放', '花園與部分設施可能有季節性時間。'),
      stop('11:00–12:30', '北浜散策', '欣賞老建築、河岸與咖啡店。', '步行', '街區戶外全天；店家各自營業', '這段可依咖啡店開門時間彈性調整。'),
      stop('12:30–14:00', '北浜午餐・下午茶', '把午餐與下午茶留給當天想進去的店。', '步行', '餐廳各自營業', '建議先查公休日，避免週中臨時休息。'),
      stop('15:30–17:30', '天神橋筋商店街', '逛商店街，補齊伴手禮與日常雜貨。', '步行／地鐵', '店家各自營業；商店街戶外可通行', '商店街很長，不必從頭走到尾，可選一段逛。'),
      stop('17:30–20:30', '天滿橋晚餐・按摩', '用晚餐與按摩為旅程充電，準備隔天回程。', '步行／地鐵', '店家與按摩店各自營業，建議預約', '按摩安排在晚餐後，請預留前往店家的時間。')
    ]
  },
  {
    number: '10', date: '12/03', city: 'RETURN', title: '回程與機場購物',
    route: '新今宮 → 南海電鐵 → KIX → 台灣',
    intro: '11:30 是飛往台灣的國際航班，最後一天提前出發，將報到、安檢與機場購物都留在上午完成。',
    map: mapFor('關西國際機場'),
    stops: [
      stop('06:30–07:00', '整理行李・Check-out', '前一晚完成大部分打包，早上確認護照、票券、充電設備與退稅商品。', '步行', '住宿依櫃檯規定', '先向住宿確認最早退房與行李寄放規則。'),
      stop('07:00–07:20', '飯店 → 新今宮站', '住宿位在新世界附近，步行前往南海新今宮站。', '步行', '車站依首班車時間', '行李多時可直接搭短程計程車，避免在街區拖行李。'),
      stop('約 07:20–08:20', '新今宮 → 關西機場', '國際航班推薦預留約 3 小時抵達機場。', '南海 Rapi:t／Airport Express', '依當日班次；Rapi:t 需確認特急券與座位', 'Rapi:t 較舒適；Airport Express 較省錢。若為第二航廈，還要加上航廈接駁時間。'),
      stop('08:20–10:00', '報到、安檢與機場購物', '先完成報到與行李托運，再安排免稅店與最後採買。', '機場內步行', '航廈與店家時間依 KIX／航空公司公告', '不要把 11:00 才到機場當成計畫；11:30 是國際航班。'),
      stop('11:30', 'KIX → 台灣', '平安回家。', '國際航班', '依航空公司航班資訊', '出發前再次確認航廈、報到櫃檯與行李規定。')
    ]
  }
];

const commonResources = [
  {
    name: 'Google Maps',
    type: '地圖與導航',
    note: '查路線、附近店家、營業狀態與步行時間。',
    url: 'https://www.google.com/maps'
  },
  {
    name: 'Tabelog／食べログ',
    type: '餐廳評價與訂位',
    note: '查日本在地評價、候位與訂位資訊。',
    url: 'https://tabelog.com/'
  },
  {
    name: '日本氣象廳',
    type: '天氣與警報',
    note: '天橋立、纜車與觀光船出發前的天候確認。',
    url: 'https://www.jma.go.jp/jma/indexe.html'
  },
  {
    name: 'Google 翻譯',
    type: '旅途中溝通',
    note: '翻譯菜單、告示與臨時需要說明的內容。',
    url: 'https://translate.google.com/'
  }
];

const dailyResources = [
  [
    { name: 'JR 西日本', type: '交通官方', note: '確認 HARUKA 與京都方向的班次。', url: 'https://www.westjr.co.jp/global/tc/' },
    { name: 'KIX 關西機場', type: '機場官方', note: '確認航廈、航班與機場交通。', url: 'https://www.kansai-airport.or.jp/tw/' }
  ],
  [
    { name: '清水寺官方', type: '景點官方', note: '確認開放時間與特別拝觀。', url: 'https://www.kiyomizudera.or.jp/en/' },
    { name: '京都觀光官方', type: '城市資訊', note: '查京都景點與旅途中公告。', url: 'https://ja.kyoto.travel/' }
  ],
  [
    { name: '二條城官方', type: '景點官方', note: '確認開城時間、休城日與入場資訊。', url: 'https://nijo-jocastle.city.kyoto.lg.jp/?lang=en' },
    { name: '金閣寺官方', type: '景點官方', note: '確認參拜時間與入場資訊。', url: 'https://www.shokoku-ji.jp/kinkakuji/' }
  ],
  [
    { name: '嵯峨野觀光鐵道', type: '交通官方', note: '確認小火車班次、票券與休業日。', url: 'https://www.sagano-kanko.co.jp/en/' },
    { name: '天龍寺官方', type: '景點官方', note: '確認庭園與諸堂的開放時間。', url: 'https://www.tenryuji.com/en/' }
  ],
  [
    { name: 'JR 西日本', type: '交通官方', note: '確認天橋立特急與指定席。', url: 'https://www.westjr.co.jp/global/tc/' },
    { name: 'View Land', type: '景點官方', note: '確認纜車、吊椅與展望台運行狀態。', url: 'https://www.viewland.jp/' },
    { name: '天橋立觀光協會', type: '地方資訊', note: '確認觀光船、傘松公園與天候相關資訊。', url: 'https://www.amano-hashidate.com/' }
  ],
  [
    { name: '大阪 Metro', type: '交通官方', note: '確認心齋橋、難波與新世界的轉乘。', url: 'https://subway.osakametro.co.jp/cht/' },
    { name: '道頓堀觀光協會', type: '地方資訊', note: '查道頓堀周邊觀光與店家資訊。', url: 'https://www.dotonbori.or.jp/' }
  ],
  [
    { name: 'USJ 官方網站', type: '園區官方', note: '確認開園時間、設施與期間限定活動。', url: 'https://www.usj.co.jp/web/zh/tw/' }
  ],
  [
    { name: '大阪城官方', type: '景點官方', note: '確認天守閣、御座船與公園資訊。', url: 'https://www.osakacastle.net/' },
    { name: 'Spa World', type: '設施官方', note: '確認入館規定、浴場與營業資訊。', url: 'https://www.spaworld.co.jp/english/' }
  ],
  [
    { name: '大阪 Metro', type: '交通官方', note: '確認北浜、淀屋橋與天神橋筋的路線。', url: 'https://subway.osakametro.co.jp/cht/' }
  ],
  [
    { name: '南海電鐵', type: '交通官方', note: '確認新今宮前往 KIX 的班次與特急券。', url: 'https://www.nankai.co.jp/traffic/railmap.html' },
    { name: 'KIX 關西機場', type: '機場官方', note: '確認航廈、報到與前往第二航廈的接駁。', url: 'https://www.kansai-airport.or.jp/tw/' }
  ]
];

const foodSearches = [
  '京都站 河原町 餐廳',
  '清水寺 祇園 餐廳',
  '二條城 金閣寺 餐廳',
  '嵐山 餐廳',
  '天橋立 餐廳',
  '心齋橋 道頓堀 餐廳',
  'Universal City 餐廳',
  '新世界 動物園前 餐廳',
  '北浜 天神橋筋 餐廳',
  '新今宮 關西機場 餐廳'
];

const defaultFoodTags = [
  '宇治抹茶', '湯豆腐', '和牛', '大阪燒', '拉麵', '炸豬排', '壽司', '串炸',
  '蟹料理', '海鮮／海鮮丼', '鯛魚茶泡飯', '章魚燒', '咖啡／甜點'
];

const defaultChecklist = [
  { id: 'sim', text: '購買 eSIM／實體 SIM', done: false },
  { id: 'train', text: '預訂嵯峨野小火車票', done: false },
  { id: 'amanohashidate', text: '確認天橋立特急、觀光船與兩座展望台班次', done: false },
  { id: 'usj', text: '確認 USJ 快通 4 與區域入場方案', done: true },
  { id: 'pass', text: '確認關西廣域周遊券是否購買', done: false },
  { id: 'exchange', text: '換日幣（約 1–2 萬台幣）', done: false },
  { id: 'luggage', text: '確認去程與回程是否加購行李', done: false },
  { id: 'restaurants', text: '預約蟹道樂、ABURIYA 與熱門餐廳', done: false },
  { id: 'hours', text: '出發前重新確認景點開放時間與休館日', done: false }
];

// --- JSONBin.io API Configuration ---
const JSONBIN_BIN_ID = '6adcd619ffd5d16053888d36';
const JSONBIN_API_KEY = '$2a$10$iu/NXYLDsqe7jNFzScj8U.cd/QPOsfHUJOOBIRaeQb/TKabd5J6KC';
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

const tabs = document.querySelector('#day-tabs');
const detail = document.querySelector('#day-detail');
const modal = document.querySelector('#detail-modal');
const toolbox = document.querySelector('#toolbox-grid');
const todayReset = document.querySelector('#today-reset');
const foodTags = document.querySelector('#food-tags');
const foodTagForm = document.querySelector('#food-tag-form');
const tripYear = 2026;

let currentSelectedDayIndex = 0;
let checklist = [];
let foodTagItems = [];
let reservations = [];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[character]));
}

// --- Unified JSONBin.io Cloud Sync Methods ---
async function loadCloudData() {
  const list = document.querySelector('#check-list');
  if (list) list.innerHTML = '<li class="empty-checklist">載入雲端資料中...</li>';
  if (foodTags) foodTags.innerHTML = '<p class="empty-food-tags">載入雲端想吃清單中...</p>';

  try {
    const response = await fetch(`${JSONBIN_URL}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY
      }
    });
    if (!response.ok) throw new Error('無法從雲端載入資料');
    const data = await response.json();
    const record = data.record || {};

    checklist = Array.isArray(record.checklist) ? record.checklist : defaultChecklist.map((item) => ({ ...item }));
    foodTagItems = Array.isArray(record.foodTags) ? record.foodTags : [...defaultFoodTags];
    reservations = Array.isArray(record.reservations) ? record.reservations : [];
  } catch (error) {
    console.error('載入雲端資料失敗，改用預設值', error);
    checklist = defaultChecklist.map((item) => ({ ...item }));
    foodTagItems = [...defaultFoodTags];
    reservations = [];
  }

  renderChecklist();
  renderFoodTags();
  renderDay(currentSelectedDayIndex);
}

async function saveCloudData() {
  try {
    const response = await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify({
        checklist,
        foodTags: foodTagItems,
        reservations
      })
    });
    if (!response.ok) throw new Error('更新雲端資料失敗');
  } catch (error) {
    console.error('儲存失敗', error);
    alert('同步至雲端失敗，請檢查網路連線。');
  }
}

function renderFoodTags() {
  if (!foodTagItems.length) {
    foodTags.innerHTML = '<p class="empty-food-tags">目前沒有想吃項目，可以新增一個。</p>';
    return;
  }

  foodTags.innerHTML = foodTagItems.map((tag) => `
    <span class="food-tag">
      <span>${escapeHtml(tag)}</span>
      <button type="button" data-delete-food-tag="${escapeHtml(tag)}" aria-label="刪除 ${escapeHtml(tag)}">×</button>
    </span>
  `).join('');

  foodTags.querySelectorAll('[data-delete-food-tag]').forEach((button) => button.addEventListener('click', async () => {
    foodTagItems = foodTagItems.filter((tag) => tag !== button.dataset.deleteFoodTag);
    renderFoodTags();
    await saveCloudData();
  }));
}

function dayDateKey(day) {
  const [month, date] = day.date.split('/');
  return `${tripYear}-${month.padStart(2, '0')}-${date.padStart(2, '0')}`;
}

function japanTodayKey() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getTodayIndex() {
  const today = japanTodayKey();
  const start = dayDateKey(days[0]);
  const exactIndex = days.findIndex((day) => dayDateKey(day) === today);
  if (exactIndex >= 0) return exactIndex;
  return today < start ? 0 : days.length - 1;
}

const todayIndex = getTodayIndex();

function tripPhase() {
  const today = japanTodayKey();
  const start = dayDateKey(days[0]);
  const end = dayDateKey(days[days.length - 1]);
  if (today < start) return 'before';
  if (today > end) return 'after';
  return 'during';
}

function resourceMarkup(resource) {
  return `
    <a class="resource-link" href="${resource.url}" target="_blank" rel="noreferrer">
      <span><strong>${escapeHtml(resource.name)}</strong><small>${escapeHtml(resource.type)} · ${escapeHtml(resource.note)}</small></span>
      <b>↗</b>
    </a>
  `;
}

function renderToolbox(index) {
  const daily = dailyResources[index] || [];
  toolbox.innerHTML = `
    <article class="toolbox-card toolbox-card-accent">
      <span class="card-kicker">DAY ${days[index].number} · QUICK LINKS</span>
      <h3>今天先開這些</h3>
      <p class="toolbox-note">依 ${days[index].city} 今日路線整理的官方入口，出發前與途中都可以快速確認。</p>
      <div class="resource-list">
        ${daily.map(resourceMarkup).join('')}
      </div>
    </article>
    <article class="toolbox-card">
      <span class="card-kicker">ALWAYS USEFUL</span>
      <h3>隨身入口</h3>
      <p class="toolbox-note">地圖、餐廳、天氣與翻譯等，不依日期都能直接使用。</p>
      <div class="resource-list">
        ${commonResources.map(resourceMarkup).join('')}
      </div>
    </article>
  `;
}

function renderTodayDashboard(index) {
  const day = days[index];
  const phase = tripPhase();
  const isToday = index === todayIndex;
  const phaseLabel = phase === 'before'
    ? `BEFORE THE TRIP · DAY ${day.number}`
    : phase === 'after'
      ? `TRIP COMPLETE · DAY ${day.number}`
      : `TODAY · DAY ${day.number}`;
  const title = !isToday
    ? day.title
    : phase === 'before'
      ? '先從 Day 1 開始準備。'
      : phase === 'after'
        ? '旅程完成，回看最後一天。'
        : '今天，先看這裡。';

  document.querySelector('#today-kicker').textContent = isToday ? phaseLabel : `PLAN PREVIEW · DAY ${day.number}`;
  document.querySelector('#today-title').textContent = title;
  document.querySelector('#today-intro').textContent = day.intro;
  document.querySelector('#today-status').textContent = isToday ? `${day.date} · ${day.city}` : `${day.date} · ${day.city} · 預覽`;
  document.querySelector('#today-date').textContent = `${day.date} / ${tripYear}`;
  document.querySelector('#today-route').textContent = day.route;
  document.querySelector('#today-next-stop').textContent = day.stops[0]?.name || '—';
  document.querySelector('#today-note').textContent = day.stops[0]?.note || '依當日狀況彈性安排。';
  document.querySelector('#today-map-link').href = day.map;
  document.querySelector('#today-food-link').textContent = `查看 Day ${day.number} 餐廳`;
  todayReset.hidden = isToday;
}

function renderTabs(activeIndex = todayIndex) {
  tabs.innerHTML = days.map((day, index) => `
    <button class="day-tab" type="button" role="tab" aria-selected="${index === activeIndex}" aria-controls="day-detail" data-day="${index}">
      <small>DAY ${day.number}</small>
      <strong>${day.date}</strong>
    </button>
  `).join('');

  tabs.querySelectorAll('.day-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = Number(tab.dataset.day);
      renderTabs(index);
      renderDay(index);
    });
  });
}

function renderDay(index) {
  currentSelectedDayIndex = index;
  const day = days[index];
  renderTodayDashboard(index);
  renderToolbox(index);

  const dayReservations = reservations.filter((res) => res.dayIndex === index);

  detail.innerHTML = `
    <div class="day-summary">
      <p class="eyebrow">DAY ${day.number} · ${day.city}</p>
      <h3>${day.title}</h3>
      <p>${day.intro}</p>
      <p class="date">${day.date} / 2026</p>
      <span class="route-pill">${day.route}</span>
      ${day.guide ? `
        <div class="day-guide">
          <p class="day-guide-kicker">${day.guide.kicker}</p>
          <h4>${day.guide.title}</h4>
          <ul>${day.guide.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        </div>
      ` : ''}
    </div>
    <div class="day-stops">
      <div class="day-stops-head">
        <h4>今日節點</h4>
        <a class="map-link" href="${day.map}" target="_blank" rel="noreferrer">在地圖中開啟 ↗</a>
      </div>
      <ol class="stop-list">
        ${day.stops.map((item, stopIndex) => `
          <li class="stop-item">
            <span class="stop-time">${item.time}</span>
            <div class="stop-content">
              <span class="stop-name">${item.name}</span>
              <span class="stop-note">${item.note}</span>
              <div class="stop-meta">
                <span class="transport-label">${item.transport}</span>
                <button class="detail-button" type="button" data-day="${index}" data-stop="${stopIndex}">查看細節＋</button>
              </div>
            </div>
          </li>
        `).join('')}
      </ol>
      <div class="restaurant-box">
        <div class="restaurant-box-heading"><span class="card-kicker">FOOD / NEARBY</span><h4>今天吃什麼</h4></div>
        ${day.restaurants && day.restaurants.length ? `
          <p class="restaurant-intro">已整理的候選優先放在前面；以下連結可分別查看地圖、Tabelog 與官方資訊。</p>
          <div class="restaurant-list">
            ${day.restaurants.map((item) => `
              <article class="restaurant-item">
                <strong>${escapeHtml(item.name)}</strong>
                <span>${escapeHtml(item.note)}</span>
                <div class="restaurant-actions">
                  <a href="${item.map}" target="_blank" rel="noreferrer">Google Maps ↗</a>
                  <a href="${item.tabelog}" target="_blank" rel="noreferrer">Tabelog ↗</a>
                  ${item.official ? `<a href="${item.official}" target="_blank" rel="noreferrer">官方網站 ↗</a>` : ''}
                </div>
              </article>
            `).join('')}
          </div>
        ` : '<p class="restaurant-intro">今天尚未整理固定候選，可以先從附近搜尋開始。</p>'}

        <!-- 已訂位區塊 -->
        <div class="restaurant-box-heading" style="margin-top: 24px;">
          <span class="card-kicker">RESERVED</span>
          <h4>已訂位</h4>
        </div>
        <div id="reservation-list" class="restaurant-list" style="margin-top: 10px;">
          ${dayReservations.length ? dayReservations.map((res) => `
            <article class="restaurant-item">
              <strong>${escapeHtml(res.time)} · ${escapeHtml(res.name)}</strong>
              <div class="restaurant-actions">
                ${res.url ? `<a href="${escapeHtml(res.url)}" target="_blank" rel="noreferrer">開啟訂位連結 ↗</a>` : ''}
                <button type="button" class="delete-check" data-delete-res="${res.id}" style="color:var(--red); font-size:11px; cursor:pointer; border:0; background:none;">刪除</button>
              </div>
            </article>
          `).join('') : '<p class="restaurant-intro">今天尚無已訂位餐廳。</p>'}
        </div>
        <form id="reservation-form" class="checklist-form" style="margin-top: 12px; flex-wrap: wrap;">
          <input id="res-time" type="text" placeholder="時間（例：19:00）" style="flex: 1 1 100px;" required />
          <input id="res-name" type="text" placeholder="餐廳名稱" style="flex: 2 1 150px;" required />
          <input id="res-url" type="url" placeholder="連結（選填）" style="flex: 2 1 150px;" />
          <button class="button button-primary button-small" type="submit">＋ 新增訂位</button>
        </form>

        <div class="restaurant-discovery" style="margin-top: 20px;">
          <div><strong>附近探索</strong><span>依今天的區域查找高評價餐廳，營業狀態與訂位規則請以店家資訊為準。</span></div>
          <div class="restaurant-discovery-links">
            <a href="${tabelogFor(foodSearches[index])}" target="_blank" rel="noreferrer">Tabelog 附近搜尋 ↗</a>
            <a href="${mapFor(foodSearches[index])}" target="_blank" rel="noreferrer">Google Maps 附近搜尋 ↗</a>
          </div>
        </div>
      </div>
    </div>
  `;

  detail.querySelectorAll('.detail-button').forEach((button) => {
    button.addEventListener('click', () => openModal(Number(button.dataset.day), Number(button.dataset.stop)));
  });

  const resForm = detail.querySelector('#reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const time = detail.querySelector('#res-time').value.trim();
      const name = detail.querySelector('#res-name').value.trim();
      const url = detail.querySelector('#res-url').value.trim();
      if (!time || !name) return;

      reservations.push({
        id: `res-${Date.now()}`,
        dayIndex: index,
        time,
        name,
        url
      });
      renderDay(index);
      await saveCloudData();
    });
  }

  detail.querySelectorAll('[data-delete-res]').forEach((button) => {
    button.addEventListener('click', async () => {
      const resId = button.dataset.deleteRes;
      reservations = reservations.filter((r) => r.id !== resId);
      renderDay(index);
      await saveCloudData();
    });
  });
}

function openModal(dayIndex, stopIndex) {
  const day = days[dayIndex];
  const item = day.stops[stopIndex];
  document.querySelector('#modal-kicker').textContent = `DAY ${day.number} · ${item.time}`;
  document.querySelector('#modal-title').textContent = item.name;
  document.querySelector('#modal-transport').textContent = item.transport;
  document.querySelector('#modal-hours').textContent = item.hours;
  document.querySelector('#modal-description').innerHTML = `
    <p>${item.detail}</p>
    <p class="hours-disclaimer">時間為目前整理的常態參考；寺院、交通、船班、USJ 與商場可能因季節、活動、天候或休館日變動，出發前請以官方公告為準。</p>
  `;
  const mapLink = document.querySelector('#modal-map');
  mapLink.href = item.map;
  const sourceLink = document.querySelector('#modal-source');
  if (item.source) {
    sourceLink.href = item.source;
    sourceLink.hidden = false;
  } else {
    sourceLink.hidden = true;
  }
  modal.hidden = false;
  document.body.classList.add('modal-open');
  document.querySelector('#modal-close').focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.querySelector('#modal-close').addEventListener('click', closeModal);
modal.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

function renderChecklist() {
  const list = document.querySelector('#check-list');
  if (!checklist.length) {
    list.innerHTML = '<li class="empty-checklist">目前沒有待確認事項，可以新增一項。</li>';
    return;
  }
  list.innerHTML = checklist.map((item) => `
    <li class="check-item ${item.done ? 'is-done' : ''}">
      <label><input type="checkbox" data-check-id="${escapeHtml(item.id)}" ${item.done ? 'checked' : ''} /><span>${escapeHtml(item.text)}</span></label>
      <button type="button" class="delete-check" data-delete-id="${escapeHtml(item.id)}" aria-label="刪除 ${escapeHtml(item.text)}">刪除</button>
    </li>
  `).join('');

  list.querySelectorAll('[data-check-id]').forEach((input) => input.addEventListener('change', async () => {
    const item = checklist.find((entry) => entry.id === input.dataset.checkId);
    if (item) {
      item.done = input.checked;
      renderChecklist();
      await saveCloudData();
    }
  }));
  list.querySelectorAll('[data-delete-id]').forEach((button) => button.addEventListener('click', async () => {
    checklist = checklist.filter((item) => item.id !== button.dataset.deleteId);
    renderChecklist();
    await saveCloudData();
  }));
}

foodTagForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.querySelector('#food-tag-input');
  const text = input.value.trim();
  if (!text) return;
  const duplicate = foodTagItems.some((tag) => tag.toLocaleLowerCase() === text.toLocaleLowerCase());
  if (duplicate) {
    input.select();
    return;
  }
  foodTagItems.push(text);
  renderFoodTags();
  input.value = '';
  input.focus();
  await saveCloudData();
});

document.querySelector('#checklist-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.querySelector('#checklist-input');
  const text = input.value.trim();
  if (!text) return;
  checklist.push({ id: `custom-${Date.now()}`, text, done: false });
  renderChecklist();
  input.value = '';
  input.focus();
  await saveCloudData();
});

document.querySelector('#clear-completed').addEventListener('click', async () => {
  checklist = checklist.filter((item) => !item.done);
  renderChecklist();
  await saveCloudData();
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

todayReset.addEventListener('click', () => {
  renderTabs(todayIndex);
  renderDay(todayIndex);
  document.querySelector('#today').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

async function initApp() {
  renderTabs(todayIndex);
  renderDay(todayIndex);
  await loadCloudData();
}

initApp();