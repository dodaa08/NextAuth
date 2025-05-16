import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import {
  LoginButton,
  LogoutButton,
  Signup
} from "./components/buttons/components";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >

      <div>
        {session ? <LogoutButton /> : <>
          <LoginButton />
          <Signup />
        </>}
      </div>

      <div>
        {JSON.stringify(session)}
      </div>
    </main> 
  );
}