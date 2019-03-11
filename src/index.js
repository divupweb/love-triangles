/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var trianglesCount = 0;
  for(var i=0;i<preferences.length;i++){
    var firstTriangle = preferences[i];
    var secondTriangle = preferences[firstTriangle-1];
    var thirdTriangle = preferences[secondTriangle-1];
    if(thirdTriangle-1 == i && i+1!=firstTriangle ){
      trianglesCount++;
    }
  }
  return trianglesCount/3;
};
