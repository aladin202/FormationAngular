export interface IEmploye {
    firstName:string;    
    lastName:string;
    bdate:Date;
    tel:number;
    poste:string;
    adress:string;
    getAge:()=>number;
}