import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any, searchText:string):any {
    if(searchText===''){
      console.log('if_log')
      return users;
      }
      
      return users.filter((user:any) => {
        console.log(user.name)
        console.log('hi')
        if(searchText!=null&&searchText!=undefined){
          
        return (user.username.toLowerCase().match(searchText.toLowerCase())||user.email.match(searchText.toLowerCase()));
        }
      });
  }
}
