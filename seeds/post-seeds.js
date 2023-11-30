const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;