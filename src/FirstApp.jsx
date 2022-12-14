import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {
    //console.log(props)
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle + 2}</h2>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}