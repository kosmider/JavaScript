/*
#### Zadanie 3 - rozwiązywane z wykładowcą

1. W pliku `zadanie03.js` napisz funkcję ```distFromAverage```,
która ma przyjmować jako argument tablicę z liczbami.
2. Zwracana przez funkcję tablica ma przedstawiać w każdej komórce
różnicę między liczbą z danej komórki a średnią wartością tablicy.
   Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.

Np.
```JavaScript
distFromAverage([1,2,3,4,5,6,7]);// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]);// => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]);// => [3,3,2,2] (średnia z tablicy wejściowej to 5)
 */

const add = function (array) {
    let result = 0;
    for (let i = 0; i < array.length; ++i) {
        result += array[i];
    }
    return result;
};
const distFromAverage = function (array) {
    const result = [];
    const sum = add(array);
    const length = array.length;
    const avg = sum / length;
    for (let i = 0; i < array.length; ++i) {
        const distance = Math.abs(array[i] - avg);
        result.push(distance);
    }
    return result;
};
console.log(distFromAverage([1,2,3,4,5,6,7]));// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage([1,1,1,1]));// => [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage([2,8,3,7]));// => [3,3,2,2] (średnia z tablicy wejściowej to 5)