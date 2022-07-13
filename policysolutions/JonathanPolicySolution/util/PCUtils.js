export class PCUtils{

    async getDateForToday() {
        const date = new Date();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0.
        const dd = String(date.getDate() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    async getLossDate() {
        const date = new Date();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0.
        const dd = String(date.getDate() - 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }
    
}