// object that store {kana : character}
// e.g. hiraganaObject = {"pe" : "Pekora", "shi" : "Rushia"};
let hiraganaObject = {};
let katakanaObject = {};

const A = 'a', I = 'i', U = 'u', E = 'e', O = 'o',
      KA = 'ka', KI = 'ki', KU = 'ku', KE = 'ke', KO = 'ko',
      SA = 'sa', SHI = 'shi', SU = 'su', SE = 'se', SO = 'so',
      TA = 'ta', CHI = 'chi', TSU = 'tsu', TE = 'te', TO = 'to',
      NA = 'na', NI = 'ni', NU = 'nu', NE = 'ne', NO = 'no',
      HA = 'ha', HI = 'hi', FU = 'fu', HE = 'he', HO = 'ho',
      MA = 'ma', MI = 'mi', MU = 'mu', ME = 'me', MO = 'mo',
      YA = 'ya', YU = 'yu', YO = 'yo',
      RA = 'ra', RI = 'ri', RU = 'ru', RE = 're', RO = 'ro',
      WA = 'wa', WO = 'wo',
      N = 'n',
      GA = 'ga', GI = 'gi', GU = 'gu', GE = 'ge', GO = 'go',
      ZA = 'za', ZI = 'ji', ZU = 'zu', ZE = 'ze', ZO = 'zo',
      DA = 'da', DI = 'di', DU = 'du', DE = 'de', DO = 'do',
      BA = 'ba', BI = 'bi', BU = 'bu', BE = 'be', BO = 'bo',
      PA = 'pa', PI = 'pi', PU = 'pu', PE = 'pe', PO = 'po';

class Character {
    constructor(title = "",jpFullName = "", enFullName = "", color = "#FFFFFF", hiragana = [], katakana = [], image = "") {
      this.title = title;
      this.jpFullName = jpFullName;
      this.enFullName = enFullName;
      this.color = color;
      this.hiragana = hiragana;
      this.katakana = katakana;
      this.image = image;
      for(let char of hiragana){
        if(hiraganaObject[char] == undefined){
          hiraganaObject[char] = [title];
        }else{
          hiraganaObject[char].push(title);
        }
      }
  
      for(let char of katakana){
        if(katakanaObject[char] == undefined){
          katakanaObject[char] = [title];
        }else{
          katakanaObject[char].push(title);
        }
      }
  
    }
  }
  
  // Hololive Members
  // images are from hololive fandom wiki https://virtualyoutuber.fandom.com/wiki/Hololive
  let Hololive = {
      "Hololive" : new Character("Hololive","ホロライブ", "Hololive", "#44C3F2", [], [HO,RO,RA,I,BU],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/fc/Hololive_production_Logo.png/revision/latest/scale-to-width-down/300?cb=20200519001500"),
    "Sora" : new Character("Sora","ときのそら", "Tokino Sora", "#5860FF", [TO, KI, NO, SO, RA], [],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/4/4b/Tokino_Sora_-_Profile_Picture.jpg/revision/latest/scale-to-width-down/165?cb=20200516161325"
                          ),
    "Roboko" : new Character("Roboko","ロボ子", "Roboko","#3A2A23",[],[RO, BO, KO],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/8/8e/Roboco_-_Profile_Picture.jpg/revision/latest/scale-to-width-down/165?cb=20200516161215"
                            ),
    "Miko" : new Character("Miko","さくらみこ", "Sakura Miko", "#F17176",[SA, KU, RA, MI,KO], [],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/5/54/Sakura_Miko_-_Profile_Picture.jpg/revision/latest/scale-to-width-down/165?cb=20200516171312"
                          ),
    "Suisei" : new Character("Suisei","星街すいせい", "Hoshimati Suisei", "#A9CBF0", [SU, I, SE], [],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/1/16/Hoshimachi_Suisei_-_Profile_Picture.jpg/revision/latest/scale-to-width-down/165?cb=20200516161514"
                            ),
  
    // 1st generation
    "Fubuki" : new Character("Fubuki","白上フブキ","Shirakami Fubuki", "#FEFFFA", [], [FU,BU,KI],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/e/e8/Shirakami_Fubuki_Portrait.jpg/revision/latest/scale-to-width-down/310?cb=20190206185441"
                            ),
    "Matsuri" : new Character("Matsuri","夏色まつり", "Natsuiro Matsuri", "#C6F957", [MA, TSU, RI], [],
                              "https://vignette.wikia.nocookie.net/virtualyoutuber/images/0/04/Natsuiro_Matsuri_-_Profile_Picture.jpg/revision/latest/scale-to-width-down/100?cb=20200516140927"
                             ),
    "Haato" : new Character("Haato","赤井はあと", "Akai Haato", "#FFE4B1", [HA, A, TO], [],
                            "https://vignette.wikia.nocookie.net/virtualyoutuber/images/7/77/Akai_Haato_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215174535"
                           ),
    "Mel" : new Character("Mel","夜空メル", "Yozora Mel", "#FDD500", [], [ME,RU],
                          "https://vignette.wikia.nocookie.net/virtualyoutuber/images/c/cf/Yozora_Mel_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215175632"
                         ),
    "Aki" : new Character("Aki","アキ・ローゼンタール", "Aki Rosenthal", "#F6E3BD", [], [A, KI, RO, ZE, N, TA, RU],
                          "https://vignette.wikia.nocookie.net/virtualyoutuber/images/5/59/Aki_Rosenthal_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215173936"
                         ),
  
    // 2nd generation
    "Aqua" : new Character("Aqua","湊あくあ", "Minato Aqua", "#EBADDB", [A,KU], [],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/8/8b/Minato_Aqua_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215180705"
                          ),
    "Shion" : new Character("Shion","紫咲シオン", "Murasaki Shion", "#864E9E", [], [SHI, O, N],
                            "https://vignette.wikia.nocookie.net/virtualyoutuber/images/3/3f/Murasaki_Shion_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190702115949"
                           ),
    "Ayame" : new Character("Ayame","百鬼あやめ", "Nakiri Ayame", "#C82053", [A, YA, ME], [],
                            "https://vignette.wikia.nocookie.net/virtualyoutuber/images/0/09/Nakiri_Ayame_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215184953"
                           ),
    "Subaru" : new Character("Subaru","大空スバル", "Ozora Subaru", "#E4EB74", [], [SU,BA,RU],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/4/49/Oozora_Subaru_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190221182438"
                            ),
    "Choco" : new Character("Choco","癒月ちょこ", "Yuzuki Choco", "#FFE6A9", [CHI,YO,KO], [],
                            "https://vignette.wikia.nocookie.net/virtualyoutuber/images/a/a8/Yuzuki_Choco_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215165656"
                           ),
  
    // Hololive Gamers
    "Mio" : new Character("Mio","大神ミオ", "Okami Mio", "#2C2929", [], [MI, O],
                          "https://vignette.wikia.nocookie.net/virtualyoutuber/images/1/18/Ookami_Mio_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190215191005"
                         ),
    "Korone" : new Character("Korone","戌神ころね", "Inugami Korone", "#A36D67", [KO, RO, NE], [],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/0/05/Inugami_Korone_img.png/revision/latest/scale-to-width-down/310?cb=20190405185913"
                            ),
    "Okayu" : new Character("Okayu","猫又おかゆ", "Nekomata Okayu", "#F3E1F9", [O, KA, YU], [],
                            "https://vignette.wikia.nocookie.net/virtualyoutuber/images/3/35/Nekomata_Okayu_img.png/revision/latest/scale-to-width-down/310?cb=20190405185910"
                           ),
  
    // 3rd generation
    "Pekora" : new Character("Pekora","兎田ぺこら", "Usada Pekora", "#D3DEF4", [PE, KO, RA], [PE],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/9/95/Usada_Pekora_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190821034245"
                            ),
    "Rushia" : new Character("Rushia","潤羽るしあ", "Uruha Rushia", "#70D0B5", [RU, SHI, A], [],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/a/a2/Uruha_Rushia_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190821034540"
                            ),
    "Marine" : new Character("Marine","宝鐘マリン", "Houshou Marine", "#BD5E72", [], [MA, RI, N],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/4/4e/Houshou_Marine_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190821035347"
                            ),
    "Flare" : new Character("Flare","不知火フレア", "Shiranui Flare", "#DBB581", [], [FU, RE, A],
                            "https://vignette.wikia.nocookie.net/virtualyoutuber/images/8/82/Shiranui_Flare_-_Portrait_02.png/revision/latest/scale-to-width-down/310?cb=20191205142732"
                           ),
    "Noel" : new Character("Noel","白銀ノエル", "Shirogane Noel", "#E7DAE3", [], [NO, E, RU],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/0/03/Shirogane_Noel_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190821035057"
                          ),
  
    // 4th generation
    "Kanata" : new Character("Kanata","天音かなた", "Amane Kanata", "#95DBE5", [KA, NA, TA], [],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/6/6c/Amane_Kanata_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200121010144"
                            ),
    "Coco" : new Character("Coco","桐生ココ", "Kiryu Coco", "#FD8E5E", [], [KO],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/0/09/Kiryu_Coco_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20191228224253"
                          ),
    "Watame" : new Character("Watame","角巻わため", "Tsunomaki Watame", "#FEF8C4", [WA, TA, ME], [],
                             "https://vignette.wikia.nocookie.net/virtualyoutuber/images/c/c6/Tsunomaki_Watame_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20191229204823"
                            ),
    "Towa" : new Character("Towa","常闇トワ", "Tokoyami Towa", "#BB99D6", [], [TO, WA],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/3/35/Tokoyami_Towa_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200126194247"
                          ),
    "Luna" : new Character("Luna","姫森ルーナ", "Himemori Luna", "#FBAEDA", [], [RU,NA],
                           "https://vignette.wikia.nocookie.net/virtualyoutuber/images/2/22/Himemori_Luna_-_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200126200041"
                          )
  };


export {hiraganaObject,katakanaObject, Hololive}
