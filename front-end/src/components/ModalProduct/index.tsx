import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  ModalContainer,
  TitleProduct,
  ImageProduct,
  ProductContainer,
  ProductInformationContainer,
  ProductCarousel,
  ContentTitleProduct,
  ProductInformation,
  ProductPrice,
  ProductDescription,
  ContentDescriptionProduct,
  ButtonStyle,
  ContentSellerInformation,
  Location,
  Evaluation
} from './style';
import ProductImage from '../../assets/img/used-computer-cpu-motherboard-scrap-for-sale-336402.jpg';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import Carousel from 'nuka-carousel';

interface ModalProductProps {
  active            ?: any;
  handleClose       ?: () => void;
  idProduct         ?: Number;
  title             ?: String;
  weight            ?: String;
  price             ?: String;
  description       ?: String;
}

function ModalProduct({ active, handleClose, title, weight, price, description}: ModalProductProps) {

  const StyeleButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#7376AD',
  });


  return (
    <div>
      <Modal
        open={active}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalContainer}>

          <CloseRoundedIcon
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 4,
              right: 45,
              cursor: 'pointer',
              color: '#4C4B4F',
              height: 70
            }}
          />

          <ProductContainer>
            <ProductCarousel>

              <Carousel
                autoplay
                autoplayInterval={3000}
                wrapAround={true}
                slidesToShow={1}
                style={{
                  width: 500,
                  height: 200,
                  borderRadius: 8
                }}
                defaultControlsConfig={{
                  nextButtonText: '>',
                  prevButtonText: '<',
                  pagingDotsStyle: {
                    fill: '#E6E6E8',
                    marginLeft: 5,
                  }
                }}>

                {
                  [1, 2, 3, 4, 5].map((item, index) => (
                    <ImageProduct src={ProductImage} key={index} />
                  ))
                }

              </Carousel>
            </ProductCarousel>

            <ProductInformationContainer>

              <ContentDescriptionProduct>

                <ContentTitleProduct>
                  <div>
                    <TitleProduct>{title}</TitleProduct>
                  </div>
                  <div>
                    <FavoriteRoundedIcon
                      style={{
                        color: '#DDDDDD',
                        position: 'absolute',
                        top: 298,
                        right: 45,
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                </ContentTitleProduct>

                <ProductPrice>
                  <AttachMoneyRoundedIcon color="disabled" />
                  <p>{weight}</p>
                </ProductPrice>
                <ProductInformation>
                  <ScaleRoundedIcon color="disabled" sx={{ fontSize: 18 }} />
                  <p>{price}</p>
                </ProductInformation>
                <ProductDescription>
                  <p>
                    {description}
                  </p>
                </ProductDescription>
              </ContentDescriptionProduct>

            </ProductInformationContainer>
          </ProductContainer>


          <ContentSellerInformation>
            <Location>
              <div>
                <p>
                  Vendedor:
                  <span> Denis Arruda</span>
                </p>

              </div>
              <div>
                <p>
                  Localização:
                  <span> Leme - São Paulo</span>
                </p>
              </div>
            </Location>

            <Evaluation>
              <div>
                <p>
                  Avaliação:
                </p>
                <div>
                  <StarRoundedIcon color="action" sx={{ fontSize: 18 }} />
                  <StarRoundedIcon color="action" sx={{ fontSize: 18 }} />
                  <StarRoundedIcon color="action" sx={{ fontSize: 18 }} />
                  <StarRoundedIcon color="disabled" sx={{ fontSize: 18 }} />
                  <StarRoundedIcon color="disabled" sx={{ fontSize: 18 }} />
                </div>
              </div>
            </Evaluation>
          </ContentSellerInformation>


          <StyeleButton
            variant="contained"
            size="small"
            startIcon={<AddRoundedIcon />}
            sx={ButtonStyle}
            onClick={() => { }}
          >
            Contatar vendedor
          </StyeleButton>

        </Box>
      </Modal>
    </div>
  );
}

export default ModalProduct;