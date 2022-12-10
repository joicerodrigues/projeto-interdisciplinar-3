import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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
  Evaluation,
  FooterModal
} from "./style";
import ProductImage from "../../assets/img/used-computer-cpu-motherboard-scrap-for-sale-336402.jpg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import Carousel from "nuka-carousel";

interface ModalProductProps {
  active            ?: any;
  handleClose       ?: () => void;
  title             ?: String;
  weight            ?: String;
  price             ?: String;
  description       ?: String;
  image             ?: String;
}

function ModalProduct({ active, handleClose, title, weight, price, description, image }: ModalProductProps) {
  const StyeleButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "10px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#7376AD",
  });

  return (
    <div>
      <Modal open={active} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalContainer}>
          <CloseRoundedIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 12,
              right: 38,
              cursor: "pointer",
              color: "#4C4B4F",
              height: 70,
            }}
          />

          <ProductContainer>
            <ProductInformationContainer>
              <ContentDescriptionProduct>
                <ContentTitleProduct>
                  <div>
                    <TitleProduct>{title}</TitleProduct>
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
                  <p>{description}</p>
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
                <p>Avaliação:</p>
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

          <ProductCarousel>
            <Carousel
              autoplay
              autoplayInterval={3000}
              wrapAround={true}
              slidesToShow={1}
              style={{
                width: 500,
                height: 200,
                borderRadius: 8,
              }}
              defaultControlsConfig={{
                nextButtonText: ">",
                prevButtonText: "<",
                pagingDotsStyle: {
                  fill: "#E6E6E8",
                  marginLeft: 5,
                },
              }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <ImageProduct src={image ?? ProductImage} key={index} />
              ))}
            </Carousel>
          </ProductCarousel>

        <FooterModal>
        <StyeleButton 
            variant="contained" 
            size="small" 
            startIcon={<LocalPhoneRoundedIcon />} 
            sx={ButtonStyle} 
            onClick={() => {}}
          >
            Contatar vendedor
          </StyeleButton>
        </FooterModal>

        </Box>
      </Modal>
    </div>
  );
}

export default ModalProduct;
