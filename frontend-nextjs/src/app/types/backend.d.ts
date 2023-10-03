interface IRecipe {
  id: number;
  title: string;
  description: string;
  note: string;
}
//xxxxxxx.d.ts  thì typescript tự nhận biết được file này sẽ là data type nên là việc sử dụng interface trong component không bị lỗi
