const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        // save to db //
        const savedUser = await user.save();
        res
        .status(200)
        .send({ user: savedUser, message: "User created in database" });
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = req.params.username;
        const targetUser = User.findOne({ username: user });
        res.status(200).send({ user: targetUser });
    } catch (error) {
        res.status(500).send(error);
    }
}