const n = +prompt(`Type a number:`);

prime:
for(i = 0; i <= n; i++){
    
    for(j = 2; j <= i ; j++){
        if(n % j === 0){
            alert(`Наименьший делитель числа ${n} = ${i}`);
            break prime;
        }else{
            alert(`Делитель само число: ${n}`);
            break prime;
        }

    }
};

if(n === 1){
    alert(`Делитель само число: ${n}!`);
};

if(n < 1){
    alert(`NaN!`);
};
