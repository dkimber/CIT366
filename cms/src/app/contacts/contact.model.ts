export class Contact {

  public contactId: number;
  public name: string;
  public email: string;
  public phone: string;
  public imgUrl: string;
  public group: any;

  constructor(id: number, name: string, email: string, phone: string, imgUrl: string, group: any){
    this.name = name;
    this.contactId = id;
    this.email = email;
    this.phone = phone;
    this.imgUrl = imgUrl;
    this.group = group;

  }
}
