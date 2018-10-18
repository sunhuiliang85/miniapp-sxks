class QuestionAlgorithm {
  
  constructor(){
    this.fivebelowaddition = [[1, 2,3], [1, 3, 4], [1, 4, 5], [2, 1, 3], [2, 2, 4], [2, 3, 5], [3, 1, 4], [3, 2, 5], [4, 1, 5],[0, 5, 5]]
  }
  
  getFivebelowaddition() {
    //console.log('10');
    return this.fivebelowaddition[Math.floor(Math.random() * (this.fivebelowaddition.length-1))];
    //console.log(Math.floor(Math.random() * 5));
  }

}
export default QuestionAlgorithm