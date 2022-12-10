import { useEffect, useState } from 'react';
import {
    Container,
    ContainerCard,
    ProductPrice,
    ProductInformation,
    ContentImg,
    ProductImg,
    StyledH1,
    ProductDescription,
    ContentButtons,
    ButtonStyle,
    FadeInUpDiv
} from './style';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { average } from 'color.js';

interface ICardProduct {
  title           ?: string;
  description     ?: string;
  price           ?: string;
  weight          ?: string;
  labelButton     ?: string;
  image           ?: string;
  style           ?: React.CSSProperties;
  onClick         ?: () => void;
}

function CardProduct({title, description, price, image, weight, onClick, labelButton, style}:ICardProduct) {
    const StyeleButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '10px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#7376AD',
    });

    const [averageColor, setAverageColor] = useState({} as any);

    useEffect(() => {
        average(image as string, { format: 'hex' }).then(color => {
            setAverageColor(color);
        });
    }, [image]);

    return (
        <Container>
            <FadeInUpDiv>
            <ContainerCard style={style}>
                <ProductImg src={image} alt="Computer Scrap" />
                <ContentImg color={averageColor} />
                <StyledH1>{title}</StyledH1>
                <ProductPrice>
                    <AttachMoneyRoundedIcon color="disabled" />
                    <p>{price}</p>
                </ProductPrice>
                <ProductInformation>
                    <ScaleRoundedIcon color="disabled" sx={{ fontSize: 18 }} />
                    <p>{weight}</p>
                </ProductInformation>
                <ProductDescription>
                    {`${description?.substring(0, 100) + ' ...'}`}
                </ProductDescription>

                <ContentButtons>
                    <StyeleButton 
                        variant="contained" 
                        size="small" 
                        startIcon={<AddRoundedIcon />}
                        sx={ButtonStyle}
                        onClick={onClick}
                    >
                        {labelButton}
                    </StyeleButton>
                </ContentButtons>
            </ContainerCard>
            </FadeInUpDiv>
        </Container>

    );
}

export default CardProduct;