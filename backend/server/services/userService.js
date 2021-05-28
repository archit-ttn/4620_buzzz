const Users = require('../models/main/users');
const Profiles = require('../models/main/profiles');
exports.getAllUsers = async () => {
    try {
        const data = await Users.find({}).exec();
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getUser = async (user_id) => {
    try {

        const data = await (await Users.findById(user_id));
        console.log(data);
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.addFriendRequested = async (user_id, friend_id) => {
    try {
        console.log(user_id, friend_id);
        const user_profile = await Profiles.findOneAndUpdate(
            { _id: user_id },
            {
                $addToSet: {
                    'requested': friend_id
                },
                $pull: {

                    'suggestions': friend_id
                }
            }
        );
        await user_profile.save();
        const friend_profile = await Profiles.findOneAndUpdate(
            { _id: friend_id },
            {
                $addToSet: {
                    'requests': user_id


                },
                $pull: {
                    'suggestions': user_id


                }
            });
        await friend_profile.save();
        return user_profile;
    }
    catch (err) {
        return err;
    }
};
exports.addFriendResponded = async (user_id, friend_id) => {
    try {
        console.log(user_id, friend_id);
        const user_profile = await Profiles.findOneAndUpdate(
            { _id: user_id },
            {
                $addToSet: {
                    'friends': friend_id


                },
                $pull: {
                    'requests': friend_id
                }
            });
        await user_profile.save();
        const friend_profile = await Profiles.findOneAndUpdate(
            { _id: friend_id },
            {
                $addToSet: {
                    'friends': user_id
                },
                $pull: {
                    'requested': user_id
                }
            });
        await friend_profile.save();
        return user_profile;
    }
    catch (err) {
        return err;
    }
};
exports.removeFriend = async (user_id, friend_id) => {
    try {
        console.log(user_id, friend_id);
        const user_profile = await Profiles.findOneAndUpdate(
            { _id: user_id },
            {
                $addToSet: {
                    'suggestions': friend_id
                },
                $pull: {
                    'friends': friend_id
                }
            });
        await user_profile.save();
        const friend_profile = await Profiles.findOneAndUpdate(
            { _id: friend_id },
            {
                $addToSet: {
                    'suggestions': user_id
                },
                $pull: {
                    'friends': user_id
                }
            });
        await friend_profile.save();
        return user_profile;
    }
    catch (err) {
        return err;
    }
};
exports.rejectRequestResponded = async (user_id, friend_id) => {
    try {
        console.log(user_id, friend_id);
        const user_profile = await Profiles.findOneAndUpdate(
            { _id: user_id },
            {
                $addToSet: {
                    'suggestions': friend_id
                },
                $pull: {
                    'requests': friend_id
                }
            });
        await user_profile.save();
        const friend_profile = await Profiles.findOneAndUpdate(
            { _id: friend_id },
            {
                $addToSet: {
                    'suggestions': user_id
                },
                $pull: {
                    'requested': user_id
                }
            });
        await friend_profile.save();
        return user_profile;
    }
    catch (err) {
        return err;
    }
};
exports.revokeRequest = async (user_id, friend_id) => {
    try {
        console.log(user_id, friend_id);
        const user_profile = await Profiles.findOneAndUpdate(
            { _id: user_id },
            {
                $addToSet: {
                    'suggestions': friend_id
                },
                $pull: {
                    'requested': friend_id
                }
            });
        await user_profile.save();
        const friend_profile = await Profiles.findOneAndUpdate(
            { _id: friend_id },
            {
                $addToSet: {
                    'suggestions': user_id
                },
                $pull: {
                    'requests': user_id
                }
            });
        await friend_profile.save();
        return user_profile;
    }
    catch (err) {
        return err;
    }
};