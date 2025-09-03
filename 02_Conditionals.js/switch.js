let  day =2 ;

switch (day) {
    case 1:
        console.log('monday');
        break;
case 2 : console.log('tuesday');
    default:console.log('invalid')
}


// fall through condition
// remove break
let  days =2 ;

switch (day) {
    case 1:
        console.log('monday');
    
case 2 : console.log('tuesday');
break;
    default:console.log('invalid')
}

// when to use if and when to use switch

switch (day) {
    case 1:
    case 2:
    case 3:
        console.log('monday');
        break;

    default:console.log('invalid')
}

switch (true) {
    case 19>6:
        console.log('helo')
        
        break;

    default:
        break;
}

let num  = 0.2 + 0.3 
// precise

switch (num){
    case 0.4 : console.log('hello')
    break;

    case 0.4 : console.log('hey')
    break;

  default : console.log('go')
}