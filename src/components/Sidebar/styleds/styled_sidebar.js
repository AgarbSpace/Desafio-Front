import styled from "styled-components";

const StyledSidebar = styled.div `
    background-color: #649FBF;
    width: 40px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: relative;

    .white {
        height: 30px;
        width: 100%;
        background-color: white;
        position: absolute;
        top: 10%;
    }

    .icon_container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 15px;
    }

    .line {
        display: none;
        width: 3px;
        height: 100%;
        position: absolute;
        left: 0;
        background-color: white;
    }

    .icon {
        font-size: 18px;
        height: 25px;
        width: 25px;
        display: flex;
        justify-content: center;
        background-color: #E0ECF2;
        border-radius: 5px;
        pointer-events: none;
    }

    .icon_container:hover .line{
        display: flex;
    }

    .icon_container:hover .icon{
        background-color: white;
    }

    .active {
        background-color: white;
    }

    .active.line {
        display: flex;
    }


`

export default StyledSidebar;