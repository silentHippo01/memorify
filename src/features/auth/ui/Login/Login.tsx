import { Button, Input, Link } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { authApi } from "../../model/authApi";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [login, { isLoading, data: token, error: loginError }] = authApi.useLoginMutation();

    const navigate = useNavigate();

    const onSubmit = useCallback(async (data: any) => {
        try {
            const tokenData = await login(data).unwrap();
            localStorage.setItem('memorify', tokenData.token);
            navigate('/');
        } catch (e: any) {
            enqueueSnackbar(e, { variant: 'error' })
        }
        console.log(data)
    }, [login])

    return (
        <>
            <form
                className='flex flex-col gap-4 w-full max-w-sm container px-2 text-center'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    className="w-100px"
                    {...register("email", {
                        required: true,
                    })}
                    type="email"
                    label="Email"
                    isInvalid={!!errors.email}
                    errorMessage={!!errors.email && "Введите почту"}
                />

                <Input
                    {...register("password", {
                        required: true,
                    })}
                    type="password"
                    label="Пароль"
                    isInvalid={!!errors.password}
                    errorMessage={!!errors.password && "Введите пароль"}
                />
                <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    type="submit"
                    color="primary"
                    variant="solid"
                >
                    Войти
                </Button>
                <span>Забыли пароль? <a className="text-pink-500" href="#">Восстановить</a></span>
            </form>
        </>

    );
};
