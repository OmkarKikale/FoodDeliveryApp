export class Foodservice {
  getMenuItems() {
    throw new Error('Method not implemented.');
  }
  filter(arg0: (item: any) => boolean): Foodservice {
    throw new Error('Method not implemented.');
  }
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imgurl:string;

  constructor(id: number, name: string, description: string, price: number, quantity: number,imgurl: string) {
    this.id = id;
    this.name = name;
    this.description = description ;
    this.price = price;
    this.quantity = quantity ;
    this.imgurl =imgurl;
  }
}
