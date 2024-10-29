import styled from 'styled-components';
import { Fonts, Colors } from '@/components/util/globalStyle';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-family: ${Fonts.CrystalRadioKit};
  height: fit-content;
  color: ${Colors.cream};
  background-color: ${Colors.darkGreen};  
  width: 100%;
  padding: .5rem 1rem;
`
const FooterInner = styled.div`
    max-width: 400px;

    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`

type FooterProps = {
  version: string,
  repoUrl: string | null
}

export default function Game({ version, repoUrl = null }: FooterProps) {
    return (
        <Footer>
            <FooterInner>
            <span>{`Version: ${version}`}</span>
            {repoUrl && <span><a href={repoUrl} target='_blank'>View Source</a></span>}
            </FooterInner>
        </Footer>
    )
}