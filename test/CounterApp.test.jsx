import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe( 'test suit for ConterApp component', () => {

    const initialValue = 0;
    test( 'should match with the snapshot', () => {
        const { container } = render( <CounterApp value={ initialValue } /> )
        expect( container ).toMatchSnapshot();
    } )

    test( 'should show the initial value 0', () => {
        render( <CounterApp value={ 100 } /> )
        expect( screen.getByText( 100 ) ).toBeTruthy();
    } )

    test( 'should increment pressing button +1', () => {
        render( <CounterApp value={ initialValue } /> )
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-inc' } ) );
        expect( screen.getAllByText( initialValue + 1 ) ).toBeTruthy();
    } )

    test( 'should decrement pressing button -1', () => {
        render( <CounterApp value={ initialValue } /> )
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-dec' } ) );
        expect( screen.getAllByText( initialValue - 1 ) ).toBeTruthy();
    } )

    test( 'should show 0 pressing button Reset', () => {
        render( <CounterApp value={ initialValue } /> )
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-inc' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-inc' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-inc' } ) );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );
        expect( screen.getAllByText( 0 ) ).toBeTruthy();
    } )
} )