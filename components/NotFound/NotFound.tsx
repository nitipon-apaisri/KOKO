import { Button, Result } from "antd";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    const backToHome = () => {
        setTimeout(() => {
            router.push("/");
        }, 200);
    };
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you searched does not exist."
            extra={
                <Button type="primary" onClick={() => backToHome()}>
                    Back Home
                </Button>
            }
        />
    );
};

export default NotFound;
