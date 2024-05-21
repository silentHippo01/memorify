
import { Button, Input, Link, NavbarBrand, Navbar as NavbarComponent, NavbarContent, NavbarItem } from '@nextui-org/react';

const NavBar = () => {
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
                    <Button as={Link} href="/login" variant="flat">
                        Войти
                    </Button>
                </NavbarContent>
            </NavbarComponent>
        </header>
    );
};

export default NavBar;