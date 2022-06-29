var btn = document.getElementById('btn'),
caja = document.getElementById('caja'),
caja2 = document.getElementById('caja2'),
caja3 = document.getElementById('caja3'),
caja4 = document.getElementById('caja4'),
contador=0;

          function cambio()
          { if(contador==0)
            {
              caja.classList.add('noseve'), caja2.classList.add('seve'), caja3.classList.add('bg-white'),
              caja4.classList.remove('navbar-toggler-icon'), caja4.classList.add('navbar-toggler-icon2');
              contador=1;
            }
            else{
                caja.classList.remove('noseve'),
                caja2.classList.remove('seve');
                caja3.classList.remove('bg-white'),
                caja4.classList.remove('navbar-toggler-icon2'),
                caja4.classList.add('navbar-toggler-icon');
                
          contador=0;}

          }
          btn.addEventListener('click',cambio,true)
          