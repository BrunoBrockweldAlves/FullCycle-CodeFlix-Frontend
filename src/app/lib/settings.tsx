export const getAppSettings = ():Promise<{theme: string, language: string}> => {
    return new  Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'en'
            })
        }, 2000
    )});
}

export const getUserInfo = ():Promise<User> => {
    return new  Promise(() => getUserById("1"))
}

export interface User{
    name: string,
    id: string,
    username: string,
    mail: string,
    age: number,
    website:string
}

export async function getUserById(id:string): Promise<User> {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return user;
}