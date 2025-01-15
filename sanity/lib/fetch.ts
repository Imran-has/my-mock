import { createClient } from "next-sanity";
import { projectId } from "../env";

const client=createClient({
    projectId:"kwbs696w",
    dataset:"production",
    useCdn:true,
    apiVersion: "2023-10-10"

});
export async function sanityFetch({quary, params={}}:{quary :string ,params?:any}) {
    return await client.fetch(quary,params);
}