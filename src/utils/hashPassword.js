import bcrypt from 'bcrypt'

export async function hashPassword(password){
    const salt = 10
    return await bcrypt.hash(password,salt)
}
