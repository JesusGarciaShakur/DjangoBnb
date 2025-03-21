'use server';

import { cookies } from 'next/headers'

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    (await cookies()).set('session_userId', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
    
    (await cookies()).set('session_accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/'
    });
    (await cookies()).set('session_refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
}

export async function resetAuthCookies() {
    (await cookies()).set('session_userId', '',);
    (await cookies()).set('session_accessToken', '',);
    (await cookies()).set('session_refreshToken', '',);
}

export async function getUserId() {
    const userId = (await cookies()).get('session_userId')?.value;
    return userId ? userId : null;
}

export async function getAccessToken() {
    const accessToken = (await cookies()).get('session_accessToken')?.value;
    return accessToken
}