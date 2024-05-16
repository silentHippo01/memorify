import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { authApi } from "../../model/authApi";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SingIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [singIn, { isLoading, data: token, error: singError }] = authApi.useSignInMutation();
    const navigate = useNavigate();

    const onSubmit = useCallback(async (data: any) => {
        try {
            const tokenData = await singIn(data).unwrap();
            localStorage.setItem('memorify', tokenData.token);
            navigate('/');
        } catch (e: any) {
            enqueueSnackbar(e, { variant: 'error' })
        }
        console.log(data)
    }, [singIn])

    console.log({ token })
    console.log(singError)

    useEffect(() => {
        if (singError) {
            singError && enqueueSnackbar(singError.data.message, { variant: 'error' })
        }
    }, [singError])

    return (
        <form
            className='flex gap-10 flex-col gap-4 w-full max-w-sm container px-2 text-center'
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
                {...register("name", {
                    required: true,
                })}
                type="text"
                label="Имя"
                isInvalid={!!errors.nikname}
                errorMessage={!!errors.nikname && "Введите имя"}
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
                className=""
                type="submit"
                // color="primary"
                isLoading={isLoading}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};
