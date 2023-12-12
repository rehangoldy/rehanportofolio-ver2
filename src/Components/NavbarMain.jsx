import React from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


export default class NavbarMain extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="container">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Raihan Goldy Azzalli</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="ml-auto justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Skill</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Project</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }
}