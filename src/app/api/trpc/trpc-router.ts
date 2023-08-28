import { initTRPC } from "@trpc/server";
import superjson from "superjson";
const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  getUsers: t.procedure.query(({ ctx }) => {
    return [{ id: 1, name: "test" }];
  }),
});

export type AppRouter = typeof appRouter;
