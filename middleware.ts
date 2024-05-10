/*
 * @Description:  middleware
 * @Author: liaolei
 * @Date: 2024-05-10 09:39:19
 * @LastEditors: liaolei
 * @LastEditTime: 2024-05-10 09:39:26
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};