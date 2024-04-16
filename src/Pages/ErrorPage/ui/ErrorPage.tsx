import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Такая страница не найдена</h1>
        </div>
    );
};
