var faker = require('faker')
function generateCustomers()
{
       var customers=[]
       for(var id=0;id<50;id++)
       {
            
              var firstName = faker.name.firstName();
              var age = faker.c_age.age();
              customer.push
              ({
                     "id":id,
                     "firstName":firstName,
                     "age":age
              })
       }
       return {"customers":customers}
}
module.exports = generateCustomers