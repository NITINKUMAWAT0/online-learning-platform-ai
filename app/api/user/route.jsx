// app/api/users/route.js
import { NextResponse } from 'next/server';
import { db } from '../../../config/db';
import { usersTable } from '@/config/schema';
import { eq } from 'drizzle-orm';

export async function POST(req) {
    try {
        const { name, email } = await req.json();
        
        // Validate input
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' }, 
                { status: 400 }
            );
        }

        // Check if user already exists
        const users = await db.select().from(usersTable).where(eq(usersTable.email, email));

        // If user does not exist, create a new user
        if (users.length === 0) {
            const result = await db.insert(usersTable).values({
                name: name,
                email: email,
            }).returning();
            
            console.log('New user created:', result);
            return NextResponse.json(result[0]);
        }

        console.log('User already exists:', users[0]);
        return NextResponse.json(users[0]);
        
    } catch (error) {
        console.error('Error in POST /api/users:', error);
        return NextResponse.json(
            { error: 'Internal server error' }, 
            { status: 500 }
        );
    }
}