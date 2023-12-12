const CALCULAR = document.getElementById('Calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
function calculoBasal(){
    let PESO = document.getElementById('peso').valueAsNumber;
    if ( PESO < 30){
        if (PESO <= 10){
           let calculoBasal = PESO*100;
           calculoBasal /= 24; 
           return calculoBasal;            
        }      
        else if (PESO>10 && PESO<=20){
            let calculo1 = (PESO - (PESO-10))*100;
            let calculo2 = (PESO-10)*50;
            let calculoBasalFinal= calculo1+calculo2;
            calculoBasalFinal /= 24;
            return calculoBasalFinal;
        }
        else if (PESO>20 && PESO<30){
            let calculoBasalFinal = ((PESO-20))*20+1500;
            calculoBasalFinal /= 24;
            return calculoBasalFinal;    
        }
    }
    else if(PESO >=30){
        //formula superficie corporal
        let superficieCorporal = (((PESO*4)+7))/(PESO+90);
        superficieCorporal *= 1500;
        superficieCorporal /= 24;
        return Math.round(superficieCorporal);
    } 
}
CALCULAR.addEventListener('click', ()=> {
    const DATO = document.getElementById('peso').valueAsNumber;
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calculoBasal();
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = 'Necesita ' + flujo + 'cc/hr';
        MAN.innerHTML = 'm+m/2 y el mantenimineto es ' + mantenimiento + 'cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if(DATO==0) {
        ERROR.style.display = 'block';
        let flujo = calculoBasal();
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = 'Necesita ' + flujo + 'cc/hr';
        MAN.innerHTML = 'm+m/2 y el mantenimineto es ' + mantenimiento + 'cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
})

