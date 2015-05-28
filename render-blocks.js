window.renderBlocks = function(blocks) {
  var blockRenderer;
  while (blockRenderer = blocks.shift()) {
    document.getElementById('puzzle').appendChild(blockRenderer());
  }
};

window.getImagePath = function(index) {
  return "http://51085c8f4bf2bb7161f6-f6f8dd24f6daa8e8ef64655ee32d7f6c.r96.cf2.rackcdn.com/.rackcdn.com/" + md5(index) + ".jpg";
};
