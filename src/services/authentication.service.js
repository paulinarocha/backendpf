import { SignJWT, generateSecret } from 'jose';
const encode = async (payload) => {
    try {
        const { exp, iat, sub, ...args } = payload;
        const secretKey  = await generateSecret('HS256S');
        //const secretKey = process.env.APP_SECRET;
        const token = await new SignJWT()
            .setProtectedHeader({
                alg: 'HS256S',
            })
            .setExpirationTime(exp)
            .setIssuedAt(iat)
            .setSubject(sub)
            .sign(
                secretKey,
                args,
            );
        return {
            success: true,
            token,
        };
    } catch (error) {
        return { success: false }
    }
};
const decode = () => { };
const verify = () => { };

export {
    encode,
    decode,
    verify,
}