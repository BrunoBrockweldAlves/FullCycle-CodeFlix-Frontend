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

export const getUserInfo = ():Promise<{
    name: string,
    mail: string,
    age: number,
}> => {
    return new  Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'User-Name',
                mail: 'user@email.com',
                age: 30
            })
        }, 2000
    )});
}