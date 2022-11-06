// const colors = ['#fff4d','#ff4f4f','red','blue','sky'];

// const btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
    
//     let random = Math.floor(Math.random() * colors.length);
    
//     document.body.style.backgroundColor = colors[random];
// })

// color #f4fd5f simple code js

const HaxColor = document.getElementById('hex-value');
const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    const ColorValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let Value = '#';
    for(let i =0 ;i < 6; i++){
        let random = Math.floor(Math.random() * ColorValue.length);
        Value += ColorValue[random];

    }
    document.body.style.backgroundColor = Value;
    HaxColor.textContent = Value;
})