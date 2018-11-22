export interface IPayment{
  text: String;
  type: String;
}

export interface IPaymentList extends Array<IPayment>{}