import { Sequelize,} from 'sequelize';

const sequelize = new sequelize('mysql://root:@localhost:3306/database');








try{
    await sequelize.authenticate();
    console.log('connected to database');

}catch{
    console.error('Error to connect to database');
}

export{
    sequelize,
}