const buttons = document.querySelectorAll('button');

for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const isClicked = btn.classList.contains('clicked');
        buttons.forEach((rmbtn)=>rmbtn.classList.remove('clicked'));
        if(!isClicked){
            btn.classList.add('clicked')
        }
        const answer = btn.parentElement.nextElementSibling;
            document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');

        if (!isClicked) {
          answer.style.display = 'block';
        }
    })
}