const { User } = require('../models');

const userData = [{
        username: 'Mike',
        password: 'M1ke'

    },
    {
        username: 'Timmy',
        password: 'T1mmy'
    },
    {
        username: 'Jane',
        password: 'Jane1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;