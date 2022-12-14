import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe( 'test suit for FirstApp component', () => {
    // test( 'should match with the snapshot', () => {

    //     const title = 'Hello, World!';
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();
    // } )

    test( 'should show the title within a h1', () => {

        const title = 'Hello, World!';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect( getByText( title ) ).toBeTruthy();

        // const h1 = container.querySelector( 'h1' );
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId( 'test-title' ).innerHTML ).toContain( title );
    } )

    test( 'should show the subtitle send by props', () => {
        const title = 'Hello, World!';
        const subtitle = 123;
        const { getByText } = render( <FirstApp
            title={ title }
            subtitle={ subtitle }
        /> );
        expect( getByText( subtitle ) ).toBeTruthy();

    } )
} )