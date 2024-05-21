
import { Button, Input, Link, NavbarBrand, Navbar as NavbarComponent, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const isAuth = useSelector((state: any) => state.auth.isAuth);

    return (
        <header className='w-full'>
            <NavbarComponent>
                <NavbarBrand>
                    <Link href='/'>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 to-yellow-500 text-3xl font-bold underline cursor-pointer italic shadow-lg">Memorify</h1>
                    </Link>
                </NavbarBrand>
                <NavbarContent>
                    {/* <NavbarItem>
                        <Link color='foreground' href="#">Ваши колоды</Link>
                    </NavbarItem> */}
                    <NavbarItem>
                        <Input
                            placeholder="Поиск..."
                            className='w-[300px]'
                            variant='bordered'
                        />
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Link color='foreground' href="#">Профиль</Link>
                    </NavbarItem>
                    {isAuth ?
                        <Button as={Link} href="/login" variant="flat">
                            Выйти
                        </Button>
                        :
                        <Button as={Link} href="/login" variant="flat">
                            Войти
                        </Button>
                    }

                </NavbarContent>
            </NavbarComponent>
        </header>
    );
};

export default NavBar;