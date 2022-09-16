import world from "./world";

export class CustomMethod{

    async getCurrentDate(){

        const currentDate = new Date();

        let day = currentDate.getDate() - 1;
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        if(day < 10) day = "0" + day;
        if(month < 10) month = "0" + month;

        let dateToday = "";
        
        dateToday = month + day + year;

        world.Date.currentDate =  dateToday;
        
        console.log("Current Date:", dateToday);

        return dateToday;

    }

    async getPastDate(daysToBackdate){

        const currentDate = new Date();
        let  miliSecondsPerDay = 86400000;
        let pastDate = new Date(currentDate - (daysToBackdate * miliSecondsPerDay));

        let pastDay = pastDate.getDate();
        let pastMonth = pastDate.getMonth() + 1;
        let year = pastDate.getFullYear();

        if(pastDay < 10) pastDay = "0" + pastDay;
        if(pastMonth < 10) pastMonth = "0" + pastMonth;

        let myPastDate ="";
        
        world.Date.pastDate = myPastDate = pastMonth + pastDay + year;

        return myPastDate;

    }
    
}