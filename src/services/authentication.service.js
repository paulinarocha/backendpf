import {SignJWT} from 'jose';
const encode = async (payload) => {
    try {
        const secretKey = process.env.APP_SECRET;
        const token = await SignJWT()
            .sign(
                'HS256S',
                secretKey,
                payload,
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