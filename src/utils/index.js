import _ from 'lodash';

const getQuantity = (array, param, initValue = 0) => {
return  array.reduce((accum, current) => {
    if(current[param] >= accum){
      accum += 1;
    }
    return accum;
  }, initValue)
}

const sortArray = array => {
  return _.sortBy(array, ['x', 'y']);
}

const arrayTransform = array => {
    let qntSeatsInRow;
    let withRows = []
    let chunk = [];

    qntSeatsInRow =   getQuantity(array, "y");

    array.map((curr, index) => {
      if(index > 0 && index % qntSeatsInRow === 0){
        withRows.push(chunk);
        chunk = [];
      }
      if(index === array.length -1){
        withRows.push(chunk);
      }
      chunk.push(curr);
      return null;
    });
  
    return withRows;
  }



  export default {arrayTransform, sortArray};


