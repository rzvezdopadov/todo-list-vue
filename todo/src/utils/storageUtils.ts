export class StorageUtils {
    constructor() { }
  
    public getStorage(): Array<any> {
      let arr = JSON.parse(localStorage.getItem('state') || "[]");
      
      if (arr.length === 0) {
        arr = [
          [10, true, 'Написать код'],
          [20, false, 'Выпить кофе'],
          [30, true, 'Протестировать код'],
          [40, false, 'Залить на гит'],
          [50, false, 'Отправить ментору'],
          [60, true, 'Отрефакторить'],
          [70, false, 'Смержить'],
        ]
  
        this.setStorage(arr);
      }
  
      return arr;
    }
    
    public setStorage(arr: Array<[]>): Array<any>{
      localStorage.setItem('state', JSON.stringify(arr));
  
      return arr;
    }
}
