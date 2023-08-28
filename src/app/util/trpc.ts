import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/app/api/trpc/trpc-router";

export const trpc = createTRPCReact<AppRouter>();
