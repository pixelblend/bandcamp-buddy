var bandcamp = {
  find: function() {
    eval($('html').html().match(/var TralbumData (.|\n)*?^};$/gim)[0]);
    this.album = TralbumData;
  }
};

$(function(){  
  var port = chrome.extension.connect({name: "play"});
  
  var addToList = $('<button />', {text: "Add to list", id: "add-to-list"});
  addToList.appendTo('#customHeader');
  addToList.bind('click', function(){
    bandcamp.find();
    console.log('BB: found', bandcamp.album);  
    port.postMessage({track: bandcamp.album.trackinfo[0].file});    
  });  
})
