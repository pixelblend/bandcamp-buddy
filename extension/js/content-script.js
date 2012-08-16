(function() {
  var bandcamp;

  bandcamp = {
    find: function() {
      eval($('html').html().match(/var TralbumData (.|\n)*?^};$/gim)[0]);
      return this.album = TralbumData;
    }
  };

  $(function() {
    var addToList, port;
    port = chrome.extension.connect({
      name: "play"
    });
    addToList = $('<button />', {
      text: "Add to list",
      id: "add-to-list"
    });
    addToList.appendTo('#customHeader');
    return addToList.bind('click', function() {
      bandcamp.find();
      console.log('BB: found', bandcamp.album);
      return port.postMessage({
        track: bandcamp.album.trackinfo[0].file
      });
    });
  });

}).call(this);
