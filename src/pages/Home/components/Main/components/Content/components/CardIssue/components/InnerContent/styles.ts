import styled from 'styled-components'

export const ContainerInnerContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme['base-profile']};

  height: 19rem;

  margin: 0 auto;

  .left-effect {
    position: absolute;
    left: 0;
    top: 70px;
  }

  .right-effect {
    position: absolute;
    right: 0;
    top: 30px;
  }
`

export const HeaderContentInner = styled.div`
  padding: 4rem;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    width: 45px;
    margin-bottom: 1.25rem;
  }

  .logo span {
    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-brand']};
    text-transform: uppercase;
    font-family: 'Coda';
  }
`

export const InfoContent = styled.div`
  display: flex;
  width: 54rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  color: ${(props) => props.theme['base-title']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-direction: row;
  flex-wrap: wrap;

  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -140%);

  .links {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  .list-info {
    display: flex;
    gap: 10px;
    margin-top: 8px;
    color: ${(props) => props.theme['base-span']};
  }

  .list-info li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
  }
`

export const BodyContentContainer = styled.div`
  height: 100vh;
  background: #071422;
  color: ${(props) => props.theme['base-text']};
`
