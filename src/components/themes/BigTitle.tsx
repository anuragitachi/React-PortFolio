import React from 'react';
import styled from 'styled-components';

interface BigTitleProps {
    top: string;
    left: string;
    right: string;
    text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}

const Text = styled.h1<{ top: string; left: string; right: string; }>`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: ${props => `rgba(${props.theme.textRgba}, 0.1)`};
    font-size: calc(5rem + 5vw);
    z-index: 0;
`;

const BigTitle: React.FC<BigTitleProps> = (props) => {
    return (
        <Text top={props.top} left={props.left} right={props.right}>
            {props.text}
        </Text>
    );
}

export default BigTitle;
