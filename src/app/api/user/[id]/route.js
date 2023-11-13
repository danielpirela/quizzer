import { NextResponse } from 'next/server'
import { prisma } from '../../../../utils/prisma'
import { hashPassword } from '../../../../utils/hashPassword'

export async function GET(req,{params}) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: Number(params.id)
            }
        })

        if (!user) return NextResponse.json({error: 'User not found' , status: 404})
        return NextResponse.json(user)
    } catch (err) {
        return NextResponse.json({error: err.message, status: 500})
    }
}

export async function PUT(req, {params}) {
    try {
        const {phone , email, password, name} = await req.json()
        const newPassword = await hashPassword(password)

        const userEdited = await prisma.user.update({

            where: {
                id: Number(params.id)
            },
            data :{
                phone,
                email,
                password: newPassword,
                name,
            }
        })
        if (!userEdited) return NextResponse.json({ error: 'User cant edit', status: 404})
        return NextResponse.json(userEdited)
    } catch (err) {
        return NextResponse.json({ error: err.message, status: 500})
    }
}


export async function DELETE(req, {params}) {
    try {
        await prisma.user.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json({message: 'User deleted'})
    } catch (err) {
        return NextResponse.json({ error: err.message, status: 500})
    }
}

