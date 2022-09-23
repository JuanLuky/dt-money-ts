import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    
    section {
        border-radius: 0.5rem;
        color: var(--text-title);
        border-top: 3px solid transparent;
        background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
    }

    div {
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;
        background: #fff ;


        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &.highlight-green {
            background-color: var(--green);
            color: #fff;
        }
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`