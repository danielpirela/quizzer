import { NextResponse } from 'next/server'
import { prisma } from '../../../utils/prisma'
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const {email,password} = await req.json()

        if (!email || !password) return NextResponse.json({message: 'Invalid email or password'})

        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        const userPassword = user.password
        const validate = await bcrypt.compare(password,userPassword)
        if (!validate) return NextResponse.json({ message: 'Invalid password', status: 405})

        return NextResponse.json({ message: 'ok' })
    } catch (err) {
        return NextResponse.json({ message: err.message, status:500})
    }
}
