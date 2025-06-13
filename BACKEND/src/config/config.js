export const cookieOptions={
    httpOnly:true,
    secure:process.env.NODE_ENV=="production",
    sameSite:"lax",
    maxAge:100*60*5 //5 minutes
}