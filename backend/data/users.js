import bcrypt from 'bcryptjs'

const users=[ {
    name:'Admin User',
    email:'admin@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true
},
{
    name:'Tejas Rathod',
    email:'tejas@example.com',
    password:bcrypt.hashSync('123456',10),
},
{
    name:'Hardik Rathod',
    email:'Hardik@example.com',
    password:bcrypt.hashSync('123456',10),
},

]
export default users