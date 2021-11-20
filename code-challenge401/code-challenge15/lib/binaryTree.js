'use strict';
const Node=require('./node.class')
class binaryTree{
constructor(root=null){
  this.root=root;
}
   // symantic errors
IsEmpty(){
  if(this.root===null){
    return ('its empty class')
  }
}
 
// pre order method:
 preOrder(){
   // recrusion Function:


   let array=[];
   function _recrusion(node) {
     array.push(node.value);
     console.log(array)
     if(node.left!==null){
       _recrusion(node.left);
     }
     if(node.right!==null){
       _recrusion(node.right)
     }
     
     
   }

   _recrusion(this.root)
   return(array) ;
 }
 
 inOrder(){
  // recrusion Function:
  let array=[];
  function _recrusion(node) {
    console.log(array)
    if(node.left!==null){
      _recrusion(node.left);
    }
    array.push(node.value);

    if(node.right!==null){
      _recrusion(node.right)
    }
    
  }
  _recrusion(this.root)
  return(array) ;
}

postOrder(){
  // recrusion Function:
  let array=[];
  function _recrusion(node) {
    console.log(array)
    if(node.left!==null){
      _recrusion(node.left);
    }

    if(node.right!==null){
      _recrusion(node.right)
    }
  array.push(node.value);

  }
  _recrusion(this.root)
  return(array) ;
}
}

module.exports=binaryTree