let hiraganaObject = {};
let katakanaObject = {};
let RomajiToHiragana = {
  "a": "あ",
  "i": "い",
  "u": "う",
  "e": "え",
  "o": "お",
  "ka": "か",
  "ga": "が",
  "ki": "き",
  "gi": "ぎ",
  "ku": "く",
  "gu": "ぐ",
  "ke": "け",
  "ge": "げ",
  "ko": "こ",
  "go": "ご",
  "kya": "きゃ",
  "gya": "ぎゃ",
  "kyu": "きゅ",
  "gyu": "ぎゅ",
  "kyo": "きょ",
  "gyo": "ぎょ",
  "sa": "さ",
  "za": "ざ",
  "shi": "し",
  "ji": "ぢ",
  "su": "す",
  "zu": "づ",
  "se": "せ",
  "ze": "ぜ",
  "so": "そ",
  "zo": "ぞ",
  "sha": "しゃ",
  "ja": "ぢゃ",
  "shu": "しゅ",
  "ju": "ぢゅ",
  "sho": "しょ",
  "jo": "ぢょ",
  "ta": "た",
  "da": "だ",
  "chi": "ち",
  "tsu": "つ",
  "te": "て",
  "de": "で",
  "to": "と",
  "do": "ど",
  "cha": "ちゃ",
  "chu": "ちゅ",
  "cho": "ちょ",
  "na": "な",
  "ni": "に",
  "nu": "ぬ",
  "ne": "ね",
  "no": "の",
  "nya": "にゃ",
  "nyu": "にゅ",
  "nyo": "にょ",
  "ha": "は",
  "ba": "ば",
  "pa": "ぱ",
  "hi": "ひ",
  "bi": "び",
  "pi": "ぴ",
  "fu": "ふ",
  "bu": "ぶ",
  "pu": "ぷ",
  "he": "へ",
  "be": "べ",
  "pe": "ぺ",
  "ho": "ほ",
  "bo": "ぼ",
  "po": "ぽ",
  "hya": "ひゃ",
  "bya": "びゃ",
  "pya": "ぴゃ",
  "hyu": "ひゅ",
  "byu": "びゅ",
  "pyu": "ぴゅ",
  "hyo": "ひょ",
  "byo": "びょ",
  "pyo": "ぴょ",
  "ma": "ま",
  "mi": "み",
  "mu": "む",
  "me": "め",
  "mo": "も",
  "mya": "みゃ",
  "myu": "みゅ",
  "myo": "みょ",
  "ya": "や",
  "yu": "ゆ",
  "yo": "よ",
  "ra": "ら",
  "ri": "り",
  "ru": "る",
  "re": "れ",
  "ro": "ろ",
  "rya": "りゃ",
  "ryu": "りゅ",
  "ryo": "りょ",
  "wa": "わ",
  "wo": "を",
  "n": "ん"
}

let RomajiToKatakana = {
  "a": "ア",
  "i": "イ",
  "u": "ウ",
  "e": "エ",
  "o": "オ",
  "ka": "カ",
  "ga": "ガ",
  "ki": "キ",
  "gi": "ギ",
  "ku": "ク",
  "gu": "グ",
  "ke": "ケ",
  "ge": "ゲ",
  "ko": "コ",
  "go": "ゴ",
  "kya": "キャ",
  "gya": "ギャ",
  "kyu": "キュ",
  "gyu": "ギュ",
  "kyo": "キョ",
  "gyo": "ギョ",
  "sa": "サ",
  "za": "ザ",
  "shi": "シ",
  "ji": "ヂ",
  "su": "ス",
  "zu": "ヅ",
  "se": "セ",
  "ze": "ゼ",
  "so": "ソ",
  "zo": "ゾ",
  "sha": "シャ",
  "ja": "ヂャ",
  "shu": "シュ",
  "ju": "ヂュ",
  "sho": "ショ",
  "jo": "ヂュ",
  "ta": "タ",
  "da": "ダ",
  "chi": "チ",
  "tsu": "ツ",
  "te": "テ",
  "de": "デ",
  "to": "ト",
  "do": "ド",
  "cha": "チャ",
  "chu": "チュ",
  "cho": "チョ",
  "na": "ナ",
  "ni": "ニ",
  "nu": "ヌ",
  "ne": "ネ",
  "no": "ノ",
  "nya": "ニャ",
  "nyu": "ニュ",
  "nyo": "ニョ",
  "ha": "ハ",
  "ba": "バ",
  "pa": "パ",
  "hi": "ヒ",
  "bi": "ビ",
  "pi": "ピ",
  "fu": "フ",
  "bu": "ブ",
  "pu": "プ",
  "he": "ヘ",
  "be": "ベ",
  "pe": "ペ",
  "ho": "ホ",
  "bo": "ボ",
  "po": "ポ",
  "hya": "ヒャ",
  "bya": "ビャ",
  "pya": "ピャ",
  "hyu": "ヒュ",
  "byu": "ビュ",
  "pyu": "ピュ",
  "hyo": "ヒョ",
  "byo": "ビョ",
  "pyo": "ピョ",
  "ma": "マ",
  "mi": "ミ",
  "mu": "ム",
  "me": "メ",
  "mo": "モ",
  "mya": "ミャ",
  "myu": "ミュ",
  "myo": "ミョ",
  "ya": "ヤ",
  "yu": "ユ",
  "yo": "ヨ",
  "ra": "ラ",
  "ri": "リ",
  "ru": "ル",
  "re": "レ",
  "ro": "ロ",
  "rya": "リャ",
  "ryu": "リュ",
  "ryo": "リョ",
  "wa": "ワ",
  "wo": "ヲ",
  "n": "ン"
}

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
// Hololive Members
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
  "Pekora" : new Character("Pekora","兎田ぺこら", "Usada Pekora", "#D3DEF4", [PE, KO, RA], [],
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

var currentCharacter;

$(document).ready(function(){

  $('[data-toggle="popover"]').focusin(() => {
    let characterTitle;
    let char = event.target.id;
    if(char[0] == '#'){
      characterTitle = randomProperty(katakanaObject[char.substr(1)]);
    }else{
      characterTitle = randomProperty(hiraganaObject[char]);
    }

    //console.log(characterTitle);
    if(characterTitle != undefined && characterTitle != null){
      currentCharacter = Hololive[characterTitle];
    }else{
      currentCharacter = undefined;
    }
    //console.log(currentCharacter.title);
    //console.log(randomProperty(hiraganaObject[char]));
    if(currentCharacter != undefined && currentCharacter != null){
      //console.log(currentCharacter);

      for(let h of currentCharacter.hiragana){
        document.getElementById(h).style.background =  currentCharacter.color;
        document.getElementById(h).style.color =  "#000000";
      }
      for(let k of currentCharacter.katakana){
        document.getElementById('#'+k).style.background =  currentCharacter.color;
        document.getElementById('#'+k).style.color =  "#000000";
      }
      // (title = "",jpFullName = "", enFullName = "", color = "#FFFFFF", hiragana = [], katakana = [], image = "")
      //console.log(currentCharacter.image);
      $('[data-toggle="popover"]').popover({
        //placement : 'top',
        trigger : 'focus',
        html : true,
        content : () => `<div class="text-center">
<img width="140" src="${currentCharacter.image}" class="img-fluid alt="Character Image">


<h4>${currentCharacter.jpFullName}<br /> ${currentCharacter.enFullName}</h4>

</div>`
      }); 
    }

  });

  $('[data-toggle="popover"]').focusout( () => {

    if(currentCharacter != undefined  && currentCharacter!= null){
      for(let h of currentCharacter.hiragana){
        document.getElementById(h).style.background =  "#6C757D";
        document.getElementById(h).style.color =  "#FFFFFF";
      }
      for(let k of currentCharacter.katakana){
        document.getElementById('#'+k).style.background =  "#6C757D";
        document.getElementById('#'+k).style.color =  "#FFFFFF";

      }
    }
    currentCharacter = undefined;
  });

  //document.getElementById("a").style.background = "#FD8E5E";

});

var randomProperty = function (obj) {
  if(obj == undefined || obj == null) return undefined;
  if(Object.keys(obj).length == 0){
    return undefined;
  }else{
    var keys = Object.keys(obj);
    //console.log(keys);
    return obj[keys[ keys.length * Math.random() << 0]];
  }
};
