let diaSemana = 'Lunes'

switch (diaSemana) {
    case 'Lunes':
        console.log("Es el primer dia de la semana")
        break;
    case 'Miercoles':
    case 'Viernes':
        console.log("Es un dia de trabajo");
        break;
        default:
        console.log("Es un dia de descanso ");
        break;
}