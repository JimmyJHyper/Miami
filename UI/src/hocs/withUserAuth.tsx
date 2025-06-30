import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/providers/UsersProvider";
import { UserContextType } from "@/providers/types";

const withUserAuth = (Component: any) => {
  
  const Auth = (props: any) => {
    const router = useRouter();
    const {token} = useUser() as UserContextType
    
    useEffect(() => {
      
      if (!localStorage.getItem("SESSION_ID") || !token) {
        router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withUserAuth;
