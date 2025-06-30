import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";

const noAuth = (Component: any) => {
  
  const Auth = (props: any) => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("SESSION_ID")) {
        router.push("/");
      }
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default noAuth;
