import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "fa4li8h2",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-03-25",
});

export default client;