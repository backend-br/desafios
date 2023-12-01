export interface IUser {
    userDocument: string;
    creditCard: string;
    value: number;
  }
  
  export interface IUserCreated {
    id: number;
    userDocument: string;
    creditCardToken: string;
    value: number;
  }
  
  export interface IUserUpdate {
    userDocument?: string;
    creditCard?: string;
    value?: number;
  }