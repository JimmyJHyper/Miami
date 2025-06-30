import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem("SESSION_ID")) {
        router.push("/admin/login");
      }
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
