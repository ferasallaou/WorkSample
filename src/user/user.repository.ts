import { User } from './db';

export async function insertUser(user: typeof User) {
    try {
        return { success: true, data: await User.create(user) };
    } catch (e) {
        const message = e.code === 11000 ? 'Email is already used!' : 'Please try again later!';
        return { success: false, error: message };
    }
}

export async function listUsers(sort: 'asc' | 'desc') {
    try {
        return { success: true, data: await User.find({}).sort({ createdAt: sort }) };
    } catch (e) {
        return { success: false, error: e };
    }
}

export async function deleteTestUsers() {
    try {
        return {
            success: true,
            data: await User.deleteOne({ email: 'normalString@email.com' }),
        };
    } catch (e) {
        return { success: false, error: e };
    }
}
