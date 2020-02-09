var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 140;
var BAR_Y = 240;
var BAR_BETWEEN = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT,);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getHls = function (h,s,l) {
  var colors = [];
  s = Math.round(Math.random(s) * 100);
  colors.push(`hsl(${h},${s}%,${l}%)`);
  return colors;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = 'bold 16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  var renderPlayersStat = function (ctx, x, y, color, players, times) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, BAR_WIDTH, currentBarheight);
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], x, y + GAP + GAP);
    ctx.fillText(Math.round(times[i]), x, y - GAP + currentBarheight);
  };

  for (var i = 0; i < players.length; i++) {
    var currentBarheight = (BAR_HEIGHT * times[i]) / maxTime;
    if (players[i] === 'Вы') {
      renderPlayersStat(ctx, BAR_X + (BAR_BETWEEN + BAR_WIDTH) * i, BAR_Y, 'rgba(255, 0, 0, 1)', players, times);
    } else {
      renderPlayersStat(ctx, BAR_X + (BAR_BETWEEN + BAR_WIDTH) * i, BAR_Y, getHls(240,100,50), players, times);
    }
  }
};
