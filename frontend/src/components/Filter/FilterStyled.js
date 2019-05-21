import styled from 'styled-components';

const FilterStyled = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    left: 40px;
    z-index: 10;

    .filtersContainer {
        display: flex;
        flex-direction: column;

        .filtersList {  
        }
    }

    .filterComponent__container {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        border-radius: 3px;
        margin-left: 25px;
        display: flex;
    }
`;

export default FilterStyled;