const arrayTransform = array => {
    let withRows = []
    let chunk = [];
    array.map((curr, index) => {
      if(index > 0 && index % 5 === 0){
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

  export default arrayTransform;