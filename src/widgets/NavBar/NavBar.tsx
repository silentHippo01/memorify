import React from 'react';

import { Button, Link, NavbarBrand, Navbar as NavbarComponent, NavbarContent, NavbarItem } from '@nextui-org/react';

const NavBar = () => {
    return (
        <header className='w-full'>
            <NavbarComponent>
                <NavbarBrand>
                    <h3>Memorify</h3>
                </NavbarBrand>
                <NavbarContent>
                    <NavbarItem>
                        <Link color='foreground' href="#">Ваши колоды</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Link color='foreground' href="#">Профиль</Link>
                    </NavbarItem>
                    <Button as={Link} href="#" variant="flat">
                        Войти
                    </Button>
                </NavbarContent>
            </NavbarComponent>
        </header>
    );
};

export default NavBar;