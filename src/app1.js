export default function chooseAttack(person){
    let { special } = person;
    let attacks = Object.keys(special);      
    for (let attack in attacks) { 
        let s = special[attack];    
        let { id, name, icon, description}  = s;
        if (description == undefined) {
            special[attack].description = 'Описание недоступно';         
        }     
    }     
    return special;   
} 

 