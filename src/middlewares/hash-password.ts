import bcrypt from 'bcrypt';

export const hash_password = (password: string): string => {
    const hashed_password = bcrypt.hashSync(
        password + process.env.BCRYPT_PASSWORD,
        parseInt(process.env.SALT_ROUNDS as string)
    );
    return hashed_password;
};
