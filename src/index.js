
exports.min = function min (array) {
  if ((arguments.length===0)||(array.length===0)){
    return 0;
  }
    else{
     let min=array[0];
     array.forEach(a=> {
       if (a<min) {
        min=a;
    }});
  return min;
    }
}


exports.max = function max (array) {
  if ((arguments.length===0)||(array.length===0)){
    return 0;
  }
    else{
     let max=array[0];
     array.forEach(a=> {
       if (a>max) {
        max=a;
    }});
  return max;
    }
 }

exports.avg = function avg (array) {
  if ((arguments.length===0)||(array.length===0)){
    return 0;
  }
    else{
  let summ=array.reduce((sum,array)=>sum+array,0);
  return summ/array.length;
    }
 }
