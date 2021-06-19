import { createSessionStore, createCookieSessionStorage } from "remastered";

export const getSession = createSessionStore(
  createCookieSessionStorage({
    cookie: {
      name: "_rmstrd_get_there",
      secret: "kitty",
    },
  })
);
