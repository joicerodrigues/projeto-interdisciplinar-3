import { useState } from 'react';
import ComputerScrap from '../../assets/img/used-computer-cpu-motherboard-scrap-for-sale-336402.jpg';
import { Container, ContainerCard, ProductPrice, ProductInformation, ContentImg, ProductImg, StyledH1, ProductDescription, ContentButtons } from './style';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Button from '@mui/material/Button';
import { average } from 'color.js'

function CardProduct() {
    const text = "Placa mãe, memória, processador, placa central telefônica, placa de celular todo tipo de sucata informatica e eletronica compra paga se por kg buscamos no local consulte valores"
    const [averageColor, setAverageColor] = useState({} as any);

    average(ComputerScrap, { format: 'hex' }).then(color => {
        return setAverageColor(color);
    })

    return (
        <Container>
            <ContainerCard>
                <ProductImg src={ComputerScrap} alt=" Computer Scrap" />
                <ContentImg color={averageColor} hover={averageColor}></ContentImg>
                <StyledH1>Sucata informática eletronica compra</StyledH1>
                <ProductPrice>
                    <AttachMoneyRoundedIcon color="success"></AttachMoneyRoundedIcon>
                    <p>R$ 99,00</p>
                </ProductPrice>
                <ProductInformation>
                    <ScaleRoundedIcon color="disabled" sx={{ fontSize: 18 }}></ScaleRoundedIcon>
                    <p>10 Kg</p>
                </ProductInformation>
                <ProductDescription>
                    {`${text.substring(0, 100) + ' ...'}`}
                </ProductDescription>

                <ContentButtons>
                    <Button variant="contained" size="small" startIcon={<ShoppingCartRoundedIcon />}> Comprar </Button>
                </ContentButtons>
            </ContainerCard>
        </Container>

    );
}

export default CardProduct;