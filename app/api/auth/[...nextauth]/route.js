import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import allowedUsers from "./allowedUsers.json";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedUser = allowedUsers.includes(user.email);
      if (isAllowedUser) {
        return true;
      } else {
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import allowedUsers from "./allowedUsers.json";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async authorize(credentials, req) {
//       const { email } = credentials;
//       console.log("User Email:", email);
//       console.log("Allowed Users:", allowedUsers);

//       if (allowedUsers.includes(email)) {
//         console.log("Access granted for", email);
//         return true;
//       } else {
//         console.log("Access denied for", email);
//         return false;
//       }
//     },
//   },
// });

// export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };
