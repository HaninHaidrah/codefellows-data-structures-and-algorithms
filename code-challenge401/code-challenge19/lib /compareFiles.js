'use strict';

function compareFiles(data1,data2){
    let array1=[];
    let array2=[]
function _compareHelper1 (node){
    if (node.value.includes('.')){
        array1.push(node.value)
    }

    if(node.left){_compareHelper1(node.left)}
    if(node.right){_compareHelper1(node.right)}

}
function _compareHelper2 (node){
    if (node.value.includes('.')){
        array2.push(node.value)
    }

    if(node.left){_compareHelper2(node.left)}
    if(node.right){_compareHelper2(node.right)}

}
_compareHelper1(data1.root)
_compareHelper2(data2.root)

if (array1.length===array2.length){return true}
else{return false}

}

module.exports=compareFiles;