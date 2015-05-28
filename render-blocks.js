window.renderBlocks = function(blocks) {
  var blockRenderer;
  while (blockRenderer = blocks.shift()) {
    document.getElementById('puzzle').appendChild(blockRenderer());
  }
};

window.getImagePath = function(index) {
  return "http://4bf7b4a569b1cd36b775-ebc958ba361dc365f260e879192c467f.r91.cf2.rackcdn.com/" + md5(index) + ".jpg";
};
