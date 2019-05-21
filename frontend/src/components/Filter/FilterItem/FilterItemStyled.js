import styled from 'styled-components';

const FilterItemStyled = styled.li`
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    
    svg {
        margin-bottom: 4px;
        fill: white;
        path {
            fill-opacity: ${props => props.isActive ? 1 : 0.5};
            transition: .2s ease-in-out;
        }
    }
    
    .title {
        font-size: 12px;
        color: white;
        transition: .2s ease-in-out;
        font-family: 'Muli', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        opacity: ${props => props.isActive ? 1 : 0.5};
    }

    &::before {
        content: "";
        opacity: ${props => props.isActive ? 1 : 0};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(0% - 14px);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: white;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }
        svg {
            path {
                fill-opacity: 1;
            }
        }
        .title {
            opacity: 1;
        }
    }
`;

export default FilterItemStyled;