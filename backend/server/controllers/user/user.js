const users = require('../../models/main/user');

user = (req, res) => {
    console.log('req.body', req.body, 'req.user', req.user);
    const newUser = new users({

    });
    newUser.save()
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        });
    res.redirect('http://localhost:3000/');
};
module.exports = { user };