import BugButton from "@components/BugButton";
import { getUserInfo } from "src/app/lib/settings"


export default async function User(){
    const {
        name,
        mail,
        age 
    } = await getUserInfo();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">User Page</h1>
                <div className=' border borrder-dashed border-red-500 p-4'>
        
                <p>Name: {name}</p>
                <p>Mail: {mail}</p>
                <p>Age: {age}</p>
                </div>
                <div className="mt-4">
        
                <BugButton/>
                </div>
                </div>
    )
}