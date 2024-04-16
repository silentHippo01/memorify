import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

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
                {...register("nikname", {
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
            >
                Регистрация
            </Button>
        </form>
    );
};

export default Login;