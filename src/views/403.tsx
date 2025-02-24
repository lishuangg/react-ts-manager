import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';
function Error403() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <Result
            status={403}
            title="403"
            subTitle="抱歉，您当前没有访问权限"
            extra={
                <Button type="primary" onClick={handleClick}>
                    返回首页
                </Button>
            }
        />
    );
}

export default Error403;
