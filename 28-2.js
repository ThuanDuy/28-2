var sachs = [
    {
        tacgia: 'Thuan Duy',
        tieude: 'Cuoc song cua chang trai hau tet',
        namxuatban: 2024,
        trangthai: true
    },
    {
        tacgia: 'Dale Carnegie',
        tieude: 'Dac Nhan Tam',
        namxuatban: 2018,
        trangthai: false
    }
];
for(let index=0; index < sachs.length; index++){
    console.log(sachs[index].tacgia);
}
/* sach */

function findMinMax(arr) {
  return [Math.max(...arr), Math.min(...arr)];
}

// Sử dụng hàm với một mảng đầu vào
const inputArray = [2, 3, 4, 5];
const [maxValue, minValue] = findMinMax(inputArray);
console.log(maxValue, minValue);
/* min max*/

function findLongestWord(sentence) {
    const longestWord = sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
    return longestWord;
  }
  
  // Sử dụng hàm với một câu đầu vào
  const inputSentence = "cô thi đẹp gái";
  const result = findLongestWord(inputSentence);
  console.log(result);
  /* ki tu dai nhat */