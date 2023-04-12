const router = require('express').Router();
const { User } = require('../../models')

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: {email: req.body.email }})
        if (!userData || !(await userData.checkPassword(req.body.password))){
            res.status(400).json({message: 'Invalid Login Details, Try Again'})
            return;
        }
  
        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true
            res.status(200).json({ user: userData, message: 'Logged in successfully'})
        })
    } catch(err) {
        res.status(400).json('')
    }
  })

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.userName,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json({ user: newUser, message: 'Logged in successfully' });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Signup Failed' });
    }
})
module.exports = router;