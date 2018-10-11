class QuestionAlgorithm {
  
  constructor(){
    this.fivebelowaddition = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [4, 1],[0,5]]
  }
  
  getFivebelowaddition() {
    //console.log('10');
    return this.fivebelowaddition[Math.floor(Math.random() * (this.fivebelowaddition.length-1))];
    //console.log(Math.floor(Math.random() * 5));
  }

}
export default QuestionAlgorithm