
/*
let f1 = document.forms['form1']

form1.checkbox1.addEventListener('click', function(){
    if (form1.checkbox1.checked){
        document.getElementById('h2').style.fontWeight = 'bold'
    } else {
        document.getElementById('h2').style.fontWeight = 'normal'
    }
})                                   // i'm surprised but I' ve got it
*/

/*
let f2 = document.forms['f2']

f2.check.addEventListener('click', function(){
    for (let i = 0; i < f2.elements.length-2; i++)
    console.log(f2.elements[i])
    f2.elements[i].checked = true;
})
f2.uncheck.addEventListener('click', function(){
    for (let i = 0; i < f2.elements.length-2; i++)
    console.log(f2.elements[i])
    f2.elements[i].checked = false;
})
*/


/*
function choseall() {
    let x = document.getElementsByName("checkbox2");
    for (let i = 0; i < x.length; i++) {
        if (document.getElementsByName("checkbox2")[i].checked) {
            document.getElementsByName("checkbox2")[i].checked = false;
        } else {
            document.getElementsByName("checkbox2")[i].checked = true;
        }
    }
}                                  // lol another solution found for task 3
*/

// let f3 = document.forms['f3']

// for(let i = 0; i<f3.length; i++){
//    // console.log(f3.elements[i])
//     f3.elements[i].addEventListener('click',function(){                   // this one wasn't done by me
//         alert(this.value)
//     })
// }

document.getElementById('edit-button').addEventListener('click',function(){
    document.getElementById("mytextarea").style.display = 'block'; 
    document.getElementById('add-btn').style.display = 'block';
    document.getElementById('save-btn').style.display = 'block';
})

   