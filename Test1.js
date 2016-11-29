function test1(){
  var input     = "haveaniceday";
  var expected  = "hae and via ecy";
  var actual    = decodeMessage(input);
  if (actual == expected)
    alert("Pass!");
  else
    alert("Fail");
}

test1();
