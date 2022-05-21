export interface IProduct {
  id: string;
  date: Date;
  username: string;
  productName: string;
  body?: string;
  chatUrl: string;
  completed: boolean;
}
