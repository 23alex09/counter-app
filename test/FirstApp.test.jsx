import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe( 'test suit for FirstApp component', () => {

    const title = 'Hello, World!';
    const subtitle = 123;

    test( 'should match with the snapshot', () => {
        const { container } = render( <FirstApp title={ title } /> )
        expect( container ).toMatchSnapshot();
    } )


    test( 'should show the title Hello, World!', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    } )

    test( 'should show the title within a h1', () => {

        render( <FirstApp title={ title } /> );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );

    } )

    test( 'should show the subtitle send by props', () => {

        render( <FirstApp title={ title } subtitle={ subtitle } /> )
        expect( screen.getByText( subtitle ) ).toBeTruthy();

    } )
} )