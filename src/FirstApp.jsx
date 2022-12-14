import PropTypes from 'prop-types';

export const FirstApp = ( { title, subtitle, name } ) => {
    //console.log(props)
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <h2>{ subtitle }</h2>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    subtitle: 1000,
    name: 'Alejandro'
}