const n = +prompt(`Type a number:`);

if(n < 1){
    alert(`it is NaN!`);
};

if(isNaN(n)){
    alert(`NaN!`);
}else{
    for(let i = 2; i <= n; i++){
    
        if(n % i === 0){
            console.log(i);
            break;
        }else if(n === 1){
            alert(`Делитель само число: ${n}!`);
        };
    }
}






