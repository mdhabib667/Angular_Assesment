import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, searchText:any):any {
    if( searchText===''){
      return users;
      }
      
      return users.filter((user:any) => {
        console.log(user)
      return (user.name.toLowerCase().match(searchText.toLowerCase()));
      });
  }
}
