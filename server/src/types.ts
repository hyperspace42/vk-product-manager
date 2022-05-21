export interface IProduct {
  id?: string;
  date: Date;
  username: string;
  productName: string;
  body: string | null;
  chatUrl: string;
  completed: boolean;
}
