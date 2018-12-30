import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <p>This is PortfolioItemPage: <b> { props.match.params.id} </b></p>
        </div>
    )
};

export default PortfolioItemPage;
