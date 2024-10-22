import { PrismaClient } from "@prisma/client";
import exp from "constants";

declare global{
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != "production") { // fix or hack for nextjs hook we are loading, it can hot reload and create new prisma client instance, 
    // it can break stuff as two many instances are active, 
    // global based variable not affected by hot relaod.
    globalThis.prisma = client;
}

export default client;