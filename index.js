let svg = document.querySelectorAll('.back');
let back = document.querySelectorAll('.feedback-item');
let add = document.querySelector('.add');
for (let i = 0; i < svg.length; i++) {
    svg[i].addEventListener('click', function() {
        back[i].classList.add('add');
    })
}
console.log(back);
let i = 0;
let cnt = 0;
setInterval(() => {
    let k = i;// 0, 1, 2
    i++;// 3
    if (cnt > 0) {
        back[k].classList.remove('add');// remove các trước, 1
    }
    back[i].classList.add('add');// Thêm class 2 vào
    cnt++;// 2
    if (i > 1) {
        i = 0;
    }
}, 2000);

remove(m)// remove -> 0
add(j)// -> 1, 
