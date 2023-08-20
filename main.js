const main = document.querySelector('.main');
const con = document.querySelector('.con');
const txt = document.querySelector('#txt');
const yes = document.querySelector('#yesBtn');
const no = document.querySelector('#noBtn');

yes.addEventListener('click', () => {
    no.style.display = 'none';
    yes.style.display = 'none';
    
    main.style.backgroundColor = '#28b821';
    
    con.style.border = '2px solid #fff';
    con.style.backgroundColor = '#27f01d';
    con.style.boxShadow = '#16ff0a 15px 15px 20px inset, #16ff0a -15px -15px 20px inset, #cf1e1e 0 0 100px';
    
    txt.innerHTML = ' Yess!! I Finally Got Her😭 <br><br>Tara Coffee Date Tayo Libre Ko 🫶🏻';
    txt.style.color = '#fff';
    txt.style.textShadow = '1px 1px #131413, -1px -1px #131413, 0 0 20px red';
});

no.addEventListener('click', () => {
    let pos1 = Math.floor(Math.random() * 75);
    let pos2 = Math.floor(Math.random() * -300);
    no.style.position = 'absolute';
    no.style.transform = `translate(${pos1}px, ${pos2}px)`;
});