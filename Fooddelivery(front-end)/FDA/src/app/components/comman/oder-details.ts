

export class OderDetails {
    id :number;
    fullname: string;
    fullAddress: String;
    contactNumber: String;
    alternateContactNumber : String;
    price : number;
    quantity : number;
    date: String;
    orderStatus : String;
    
    constructor(id : number,fullname: string, fullAddress : string,contactNumber: string,
      alternateContactNumber:string, price :number, quantity:number, date :String , orderStatus :String ) {
        this.id=id
        this.fullname = fullname; 
        this.fullAddress =fullAddress;
        this.contactNumber = contactNumber;
        this.alternateContactNumber=alternateContactNumber;
        this.price=price;
        this.quantity=quantity;
        this.date=date;
        this.orderStatus=orderStatus;
        
      }
    
}
