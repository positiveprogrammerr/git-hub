const theif = {
    jacket : "black",
    height : 1.7,
    colors: {
        hair: "gray",
        style: "curley",
    },
    howOut: function(){
        console.log("Fast with help doors");
    }
};

theif.howOut();

const {hair , style} = theif.colors;

console.log(hair);
console.log(style);

for(let key in theif){
    if(typeof theif[key] === "object"){
        for(let i in theif[key]){
            console.log(`Property ${i} has value ${theif[key][i]}`)
        }
    } else{
        console.log(`Property ${key} has value ${theif[key]}`)
    }
}    

