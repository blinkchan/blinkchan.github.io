import {RomajiToHiragana} from './util/romaji-to-hiragana.js'
import {RomajiToKatakana} from './util/romaji-to-katakana.js'
import {hiraganaObject, katakanaObject, Hololive} from './characterdata.js'

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
        if(isLight(currentCharacter.color)) document.getElementById(h).style.color =  "#000000";
      }
      for(let k of currentCharacter.katakana){
        document.getElementById('#'+k).style.background =  currentCharacter.color;
        if(isLight(currentCharacter.color)) document.getElementById('#'+k).style.color =  "#000000";
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

function isLight(color){
  let c = color.substring(1);      // strip #
  let rgb = parseInt(c, 16);   // convert rrggbb to decimal
  let r = (rgb >> 16) & 0xff;  // extract red
  let g = (rgb >>  8) & 0xff;  // extract green
  let b = (rgb >>  0) & 0xff;  // extract blue

  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 128) {
    return false;
  } else {
    return true;
  }
}

