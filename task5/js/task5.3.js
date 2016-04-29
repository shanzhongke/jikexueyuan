
var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var indexs={};//字母索引
var max_count=0;//字母最多出现次数
var max_item;//出现次数最多的字母
for(var i =0;i<arr.length;i++){
	var word=arr[i];
	if(!indexs[word]){
		indexs[word]=[];
	}
	indexs[word].push(i);
	if(indexs[word].length>max_count){
		max_count=indexs[word].length;
		max_item=word;
	}
}
document.write("出现次数最多的字母:" + max_item + " 出现次数:" + max_count + " 字母索引:" + indexs[max_item]);
