const n = +prompt(`Type a number:`);

for(i = 2; i <= n; i++){
    
    if(n % i === 0){
        alert(`Наименьший делитель числа ${n} = ${i}`);
        break;
    }else{
        alert(`Делитель само число: ${n}`);
        break;
    }

}

if(n === 1){
    alert(`Делитель само число: ${n}!`);
};

if(n < 1){
    alert(`NaN!`);
};
