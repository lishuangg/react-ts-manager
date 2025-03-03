import { useEffect } from 'react';
import request from '@/utils/request';
export default function Login() {
    useEffect(() => {
        request
            .post<string>('/api/login', {
                id: '123'
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}
