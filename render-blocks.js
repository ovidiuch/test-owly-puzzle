window.renderBlocks = function(blocks) {
  var blockRenderer;
  while (blockRenderer = blocks.shift()) {
    document.getElementById('puzzle').appendChild(blockRenderer());
  }
};
