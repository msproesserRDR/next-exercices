import DemandesClient from "./DemandesClient";
import { demandes } from "./data";

export default function Page() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mes demandes</h1>
            <DemandesClient demandes={demandes}/>
        </div>
    );
}