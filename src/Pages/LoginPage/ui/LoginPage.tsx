import { SingIn, Login } from "@/features/auth";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import React, { Key } from "react";


export const LoginPage = () => {
    const [selected, setSelected] = React.useState<string>("login");

    const handleSelectionChange = (key: Key) => {
        if (typeof key === "string") {
            setSelected(key);
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Tabs
                className="w-full max-w-sm px-2"
                fullWidth
                selectedKey={selected}
                onSelectionChange={handleSelectionChange}
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
