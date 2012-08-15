var bandcamp = {
  find: function() {
    eval($('html').html().match(/var TralbumData (.|\n)*?^};$/gim)[0]);
    this.album = TralbumData;
  }
};

$(function(){
  bandcamp.find();
  console.log('BB: found', bandcamp.album);  
  
  var port = chrome.extension.connect({name: "play"});
  port.postMessage({track: bandcamp.album.trackinfo[0].file});
})
