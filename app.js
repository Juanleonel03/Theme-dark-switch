window.addEventListener('load', () => {
  let btn = document.getElementById('btn');
  let spanToggle = document.getElementById('toggle');
  let box = document.querySelector('.box');

  btn.addEventListener('click', () => {
    spanToggle.classList.toggle('change');
    box.classList.toggle('box-change');
    btn.classList.toggle('button-change');

    //localStorage
    if (box.classList.contains('box-change') && spanToggle.classList.contains('change') && btn.classList.contains('button-change')) {
      localStorage.setItem('dark', 'true')
      localStorage.setItem('change', 'true')
      localStorage.setItem('button', 'true')
    } else {
      localStorage.setItem('dark', 'false')
      localStorage.setItem('change', 'false')
      localStorage.setItem('button', 'false')
    }
  })
  if (localStorage.getItem('dark') === 'true' && localStorage.getItem('change') === 'true' && localStorage.getItem('button') === 'true') {
    box.classList.toggle('box-change');
    spanToggle.classList.toggle('change');
    btn.classList.toggle('button-change');
  }else{
    box.classList.remove('box-change');
    spanToggle.classList.remove('change');
    btn.classList.remove('button-change');
  }
})