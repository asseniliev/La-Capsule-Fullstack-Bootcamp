const arr = ['A', 'B', 'C', 'A'];

arr.map((el, i) => console.log(`Element = ${el}     :    Index = ${i}    :    Element's index = indexOf: ${arr.indexOf(el) === i}`));

arr.filter((el, i) => arr.includes(el) === i);