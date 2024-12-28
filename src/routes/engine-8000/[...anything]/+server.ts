// https://stackoverflow.com/questions/77785202/how-to-create-catch-all-route-in-sveltekit-api-dir

import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

const server = 'http://mc-engine.hopto.org:8000'
const get_path = (event) => `${server}/${event.params.anything}`;

export async function GET(event: RequestHandler): Promise<Response> {
    return fetch(get_path(event));
}

export async function POST(event: RequestHandler): Promise<Response> {
    const body = await event.request.json();

    return fetch(
        get_path(event),
        {
            method  : 'POST',
            body    : JSON.stringify(body)
        }
    );
}
