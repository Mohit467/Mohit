function showtabel() {

    
    
    let kiski = +document.getElementById('kiski').value;
     document.getElementById('kiski').value = '';
     
    let kistak = +document.getElementById('kistak').value;
   document.getElementById('kistak').value = '';
   
   let kahase = +document.getElementById('kahase').value;
     document.getElementById('kahase').value = '';
     
    let kahatak = +document.getElementById('kahatak').value;
   document.getElementById('kahatak').value = '';
   
    let div = document.getElementById('div');
    div.innerHTML='';
    
    for (let num = kiski; num <= kistak; num++){
      let kiskirow = `<div>${num} ka tabel start`
      div.innerHTML += kiskirow;
      
      for (let i = kahase; i <= kahatak; i++){
        let tabel = `<div>${num} * ${i} = ${num*i}</div>`
        div.innerHTML += tabel;
      }
      
      let kistakrow =  `<div>${num} ka tabel khatam`
       div.innerHTML += kistakrow;
    }
}

