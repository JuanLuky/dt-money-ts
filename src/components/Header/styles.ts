import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
`
export const Content = styled.div`
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
        border-radius: 0.5rem;
        border-top: 2px solid transparent;
        background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.4rem;
        height: 3rem;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`