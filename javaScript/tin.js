let block = document.querySelectorAll('.them');
let bd = document.querySelector('body');

block.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.id === 'white')
        {
            bd.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'grey')
        {
            bd.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'yellow')
        {
            bd.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'red')
        {
            bd.style.backgroundColor = 'red'
        }
    })
})