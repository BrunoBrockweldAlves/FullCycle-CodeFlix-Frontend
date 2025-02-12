import { getAppSettings } from "../lib/settings";

export default async function Settings(){
    const {theme, language} = await getAppSettings();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="border border-dashed border-red-500">
            <p>Theme: {theme}</p>
            <p>Language: {language}</p>
        </div>
        </div>
    )
}