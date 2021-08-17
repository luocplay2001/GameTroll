let $no = document.getElementById("no");
let $yes = document.getElementById("yes");
let $answers = document.getElementById("answers")
let count  = 0;

$no.addEventListener('mouseover',function() {
    $answers.classList.toggle('reverse')
    count++;
    if(count > 5) {
        alert("Đồng ý rồi!")
        $answers.remove();
    }
})

$yes.addEventListener('click',function() {
    alert("Chúng mình yêu nhau rồi nè <3")
})