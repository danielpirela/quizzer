import { NextResponse } from 'next/server'
import { prisma } from '../../../utils/prisma'
import { hashPassword } from '../../../utils/hashPassword'


export async function POST(req) {
    try {
        const {phone,email,password,name} = await req.json()
        const newPassword = await hashPassword(password)

        if (!phone && !email && !password && !name) {
            return NextResponse.json({ error: 'Invalid data'})
        }
        const userCreated = await prisma.user.create({
            data: {
                phone,
                email,
                password: newPassword,
                name
            }
        })

        if (!userCreated) return NextResponse.json({error: 'User creation failed'})

        return NextResponse.json(userCreated)

    } catch (err) {
        return NextResponse.json({error: err.message, status: 500})
    }
}


export async function GET() {
    try {
        const users = await prisma.user.findMany()

        if (!users) return NextResponse.json({error: 'Users not found'})

        return NextResponse.json(users)
    } catch (err) {
        return NextResponse.json({error: err.message, status: 500})
    }
}
