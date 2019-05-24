import styled from "styled-components";
import { Blackcurrant, Fog, Turbo, White } from "../../helpers/const";

const SearchModalStyled = styled.div`
    height: 100vh;
    width: 516px;
    z-index: 1000;
    position: absolute;
    top: 0;
    right: -516px;
    transform: ${props => props.isSearchOpen ? 'translateX(-516px)' : 'translateX(0px)'};
    transition: transform 0.4s ease-in-out;
    background: white;

   .searchModal {
       a{
           text-decoration:none;
       }
       position: relative;
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       padding: 32px 36px 32px 32px;
       box-sizing: border-box;

        &__closeBtn {
            position: absolute;
            top: 32px;
            right: 36px;
            cursor: pointer;
        }
        &__title {
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: -0.04em;
            color: ${Blackcurrant};
        }
        &__subtitle {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            color: ${Blackcurrant};
            margin-bottom: 27px;
        }
        &__inputContainer {
            width: 100%;
            height: 48px;
            border: 1px solid ${Fog};
            box-sizing: border-box;
            border-radius: 3px;
            position: relative;

            .logoSearch {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 16px;
                outline: none;
                z-index: 1;
            }
            .inputSearch {
                font-family: 'Muli', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 18px;
                color: ${Fog};
                position: absolute;
                border: transparent;
                outline: none;
                top: 50%;
                transform: translateY(-50%);
                padding-left: 64px;
                width: calc(100% - 65px);

                &::placeholder {
                    font-family: 'Muli', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 18px;
                    color: ${Fog};
                }
            }
        }
        &__resultsContainer {
            border: 1px dotted lightgrey;
            width: 100%;
            height: calc(100vh - 174px);
            margin: 32px 0px 29px 0px;
            overflow-y:scroll;
        }
        &__moreDetailsBtn {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: ${White};
            width: 167px;
            height: 48px;
            background: ${Turbo};
            border-radius: 32px;
            outline: none;
            margin-left: 50%;
            transform: translateX(-50%);
            cursor: pointer;
            border:none;
        }
        &__alphabet
        { 
            position:sticky;
            top:0px;
            li{
                margin:0.25rem;
                color:#2E133C;
                font-family: Karla;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 20px;
                text-transform: uppercase;
                line-height:20px;
            }
            float:right;
        }
        &__resultContent
        {   
            max-width:90%;
            padding:10px;
            li{
                font-family: Muli;
                font-style: normal;
                font-weight: 300;
                font-size: 13px;
                margin-top:16px;
                color:#2E133C;
            }
        }
        &__wineContent
        {
            opacity: 0.4;
           transition: .2s ease-in-out;
        }
    }
    .hovered
    {
        opacity: 1;
        transition: .2s ease-in-out;
    }
`;

export default SearchModalStyled;