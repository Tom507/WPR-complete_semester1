

function printe(...text){
    let blub = 3
    // text = ['test']
    for(var i in text){
        console.log(text[i])
    }
    console.log("hi");
}

const A = [3,4];
A[0] += 2;
A[5] = 10; // das nicht
//A = [4,3] // das gibt nen error
console.log(A);

let b = [1,2];
b = [3,4];
console.log(b);

function findStudent (matrikelNo) 
{
    let student = studentArray.find( (x,y)=> x.matrikelNumber == matrikelNo );
    return `${student.firstName} ${student.lastName}`;
}


var a = document.getElementById("nemo"); //####### this is the problem #########
console.log(a)

const MY_ROWS = a.getElementsByTagName("tr");
//console.log(MY_ROWS)

var c = [1,2]
var c = [4,5]

printe(c)

printe(5,"HI","STAR WARS");

//document.getElementById("Absatz1").innerHTML