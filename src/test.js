let x = {
    flag : 1,
    toString : function(){
        return this.flag++;
    }
}
if(x==1 && x==2 && x==3)
    console.log('if this hits, you are done 💥');
console.log(x==1, x==2, x==3)
