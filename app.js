'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;
    // TODO このコメントを消して正しく実装してください。
    for(let i=1;i<=n;i++){
	result = result * i;	
    }
    return result;
}
