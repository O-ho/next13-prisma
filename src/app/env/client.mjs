//@ts-check
import { clientEnv, clientSchema } from "./schema.mjs";

const _clientEnv = clientSchema.safeParse(clientEnv);

export const formatErrors = (errors) => {
    if(!errors) return;
    Object.entries(errors).map(([name, value]) => {
        if(value && "_errors" in value) {
            return `${name}: ${value._errors.join(", ")}\n`;
        }
    }).filter(Boolean);
    if(!_clientEnv.success){
        console.error(
            "❌ Invalid environment variables:\n",
            formatErrors(_clientEnv.error)
        );
        throw new Error("Invalid environment variables");
    }
    for (let key of Object.keys(_clientEnv.data)){
        if(key.startsWith("NEXT_PUBLIC_")) {
            console.warn("❌ You are exposing a server-side env-variable:", key);
            throw new Error("You are exposing a server-side env-variable");
        }
    }
}
export const env =_clientEnv;
