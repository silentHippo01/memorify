import Login from "@/features/auth";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import React from "react";


export const LoginPage = () => {
    const [selected, setSelected] = React.useState("login");

    return (
        <div className="w-full h-full absolute flex flex-col justify-center items-center">
            <Tabs
                className="w-full max-w-sm px-2"
                fullWidth
                selectedKey={selected}
                onSelectionChange={setSelected}
            >
                <Tab
                    className="w-full max-w-sm"
                    key='login'
                    title='Вход'
                >
                    <Login />
                </Tab>

                <Tab key='register' title='Регистрация'>

                </Tab>
            </Tabs>
        </div>
    );
};
