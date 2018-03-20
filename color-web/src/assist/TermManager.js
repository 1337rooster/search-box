
export default class TermManager {
  constructor() {
    console.log("TermManager");
  }

  load() {
    console.log("Load");
    var file = "file:///Users/amato/git_react/KoreanAssist/search-box/color-web/src/assist/top_6000_words.csv";

    var reader = new FileReader();
    
    reader.onload = function(e) {
      var text = reader.result;
      console.log("text " + text);
    }
    reader.readAsText(file);
  }


}