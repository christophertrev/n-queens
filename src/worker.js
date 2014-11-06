var count;
var all;

var placePiece = function (ld , col, rd){
  if (col === all){
    count++;
  }
  var poss = ~ ( ld | col | rd) & all;
  while (poss){
    var bit = poss & -poss;
    poss -= bit ;
    placePiece((ld|bit)<< 1,col|bit,(rd|bit)>>1);
  }
};

var countNQueensSolutionsWithBits= function(n){
  all = 1;
  var arr = [];
  for(var i =1; i < (n+1); i++){
    count = 0;
    placePiece(0,0,0);
    arr.push(count);
    all = 2*all +1;
  }
  //console.log(arr);
  return arr;
};



onmessage = function(event) {
  var num = Number(event.data);
  postMessage(countNQueensSolutionsWithBits(num));
};


