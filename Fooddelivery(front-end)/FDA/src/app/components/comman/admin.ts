export class Admin {
    admin_id: number;
    first_name: string;
    last_name: string;
    username: string;
    userpassword: string;
    comnfirmuserpassword: string;
  static admin_id: any;
  
    constructor(
      admin_id: number,
      first_name: string,
      last_name: string,
      username: string,
      userpassword: string,
      comnfirmuserpassword: string
    ) {
      this.admin_id = admin_id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.username = username;
      this.userpassword = userpassword;
      this.comnfirmuserpassword = comnfirmuserpassword;
    }
  }
  