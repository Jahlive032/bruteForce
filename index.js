for(i=0; i<2; i++)
    for(j=0; j<10; j++)
        for(k=0; k<10; k++)
            if (i==j || i==k || j==k){
                if(i + j + k == 5){
                    if(parseInt(i.toString()+ j.toString()+k.toString()) %2 ==0){
                        console.log(i,j,k);
                    }
                }
                
            }

//  Exercice 6.6.6 Nombres pairs

    // for(let i=0; i<=10; i++){
    //     if (i %2 ==0) {
    //         console.log(i);
    //     }
    // }