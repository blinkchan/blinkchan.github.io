import {RomajiToHiragana} from './util/romaji-to-hiragana.js'
import {RomajiToKatakana} from './util/romaji-to-katakana.js'
import {hiraganaObject, katakanaObject} from './characterdata.js'

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

var currentCharacter;

// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){

  $('[data-toggle="popover"]').focusin(() => {
    let characterTitle;
    let char = event.target.id; // https://api.jquery.com/category/events/event-object/
	  
    // use '#' in id to distinguish hiragana and katakana
    if(char[0] == '#'){
      characterTitle = randomProperty(katakanaObject[char.substr(1)]);
    }else{
      characterTitle = randomProperty(hiraganaObject[char]);
    }

    
    if(characterTitle != undefined && characterTitle != null){
      currentCharacter = Hololive[characterTitle];
    }else{
      currentCharacter = undefined;
    }
    //console.log(characterTitle);
    //console.log(currentCharacter);
    if(currentCharacter != undefined && currentCharacter != null){

      for(let h of currentCharacter.hiragana){
        document.getElementById(h).style.background =  currentCharacter.color;
        document.getElementById(h).style.color =  "#000000";
      }
      for(let k of currentCharacter.katakana){
        document.getElementById('#'+k).style.background =  currentCharacter.color;
        document.getElementById('#'+k).style.color =  "#000000";
      }
      // (title = "",jpFullName = "", enFullName = "", color = "#FFFFFF", hiragana = [], katakana = [], image = "")
	    
      $('[data-toggle="popover"]').popover({
        //placement : 'top',
        trigger : 'focus',
        html : true,
	// the content won't update if not using function here
        content : () => `<div class="text-center">
		<img width="140" src="${currentCharacter.image}" class="img-fluid alt="Character Image">
		<h4>${currentCharacter.jpFullName}<br /> ${currentCharacter.enFullName}</h4>
		</div>`
      }); // popover
    } // if(characterTitle != undefined && characterTitle != null)
  }); // focusin

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
});

var randomProperty = function (obj) {
  if(obj == undefined || obj == null) return undefined;
  let keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};
