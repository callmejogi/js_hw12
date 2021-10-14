const n = +prompt(`Type a number:`);

for(let i = 2; i <= n; i++){
    
    if(n % i === 0){
        console.log(i);
        break;
    }

    console.log(i)

}

if(n === 1){
    alert(`Делитель само число: ${n}!`);
};

if(n < 1){
    alert(`NaN!`);
};
