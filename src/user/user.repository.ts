import {User} from './db'

export async function insertUser(user: typeof User) { 
    try {
        return {success: true, data: await User.create(user)}
    }catch(e) {
        return {success: false, error: e}
    }
} 

export async function listUsers(sort: 'asc' | 'desc') { 
    try {
        return {success: true, data: await User.find({}).sort({createdAt: sort })}
    }catch(e) {
        return {success: false, error: e}
    }
} 