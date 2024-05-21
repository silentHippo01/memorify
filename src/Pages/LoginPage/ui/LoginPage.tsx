import { SingIn, Login } from "@/features/auth";
import { Button, Card, CardBody, Input, Link, Tab, Tabs } from "@nextui-org/react";
import React, { Key } from "react";


export const LoginPage = () => {
    const [selected, setSelected] = React.useState<string>("login");

    const handleSelectionChange = (key: Key) => {
        if (typeof key === "string") {
            setSelected(key);
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center h-screen">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-yellow-500 text-6xl font-bold underline cursor-pointer italic shadow-lg my-8">Memorify</h1>
            {/* <h1 className="text-3xl font-bold my-8">Добро пожаловать!</h1> */}
            <Tabs
                className="w-full max-w-sm px-2"
                fullWidth
                selectedKey={selected}
                onSelectionChange={handleSelectionChange}
                variant='bordered'
            >
                <Tab
                    className="w-full max-w-sm"
                    key='login'
                    title='Вход'
                >
                    <Login />
                </Tab>

                <Tab
                    className="w-full max-w-sm"
                    key='register'
                    title='Регистрация'
                >
                    <SingIn />
                </Tab>
            </Tabs>
        </div>
    );
};
