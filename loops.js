// FOREACH
 cars.forEach(function(car, index, array){
   console.log(`${index} : ${car}`);
   console.log(array);
 });

// MAP
 const users  = [
   {id: 1, name:'John'},
   {id: 2, name: 'Sara'},
   {id: 3, name: 'Karen'},
   {id: 4, name: 'Steve'}
 ];

 const ids = users.map(function(user){
   return user.id;
 });

 console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}