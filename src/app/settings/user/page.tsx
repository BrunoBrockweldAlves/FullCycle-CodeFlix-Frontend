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
        <div>Name: {name}</div>
        <div>Mail: {mail}</div>
        <div>Age: {age}</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <BugButton/>
        </div>
    )
}