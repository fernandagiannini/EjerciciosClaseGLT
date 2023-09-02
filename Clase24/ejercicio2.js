const ONE_SECOND_IN_MS = 1000


for (let i = 1; i<=10 ; i++){
    setTimeout (()=>{
        console.log (i)
    },i* ONE_SECOND_IN_MS)
    
}
 