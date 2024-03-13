import React, {Component} from "react";
import './header.scss';
import Logo from '../logo/logo';
import Button from '../button/button';

class Header extends Component {
    state = {
        isMenuOpen: false
    }

    render() {
        const { isMenuOpen } = this.state;

        const bodyOpenMenuState = 'body--open_menu_state';

        if (isMenuOpen) {
            document.body.classList.add(bodyOpenMenuState);
        } else {
            document.body.classList.remove(bodyOpenMenuState);
        }

        return (
            <header className="header">
                <div className="header__in">
                    <Logo/>
                    <div className="header__buttons">
                        <Button label='Users' type="button"/>
                        <Button label='Sign up' type="button"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

