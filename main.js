const body = document.body; 


console.log(body.firstElementChild); 



console.log(body.lastElementChild);



const exo4 = body.getElementsByTagName('div')[0].childNodes; 

console.log(exo4);



/*

const ol = body.getElementsByTagName('ol'); 

console.log(ol[0].firstElementChild);

console.log(ol[0].nextElementSibling);

*/


const ol = document.querySelector('ol[type=a]'); 

const first = ol.firstElementChild;

console.log(first); 

console.log(first.nextElementSibling);

// ; 
const sec = first.nextElementSibling.previousElementSibling; 

console.log(sec);



