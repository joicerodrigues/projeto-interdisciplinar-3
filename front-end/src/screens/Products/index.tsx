import { useState, useEffect, useCallback } from "react";
import HeaderHome from "../../components/HeaderHome";
import CardProduct from "../../components/CardProduct";
import { 
  ContainerProducts, 
  ContainerSearchProducts, 
  ContentSearchProducts, 
  InputTextStyle, 
  ContainerProductsList, 
  ContetentProductsList, 
  SubHeader, FadeInUpDiv, 
  ContentNothingFound, 
  NothingFound 
} from "./style";
import InputText from "../../components/InputText";
import ExpandableButton from "../../components/ExpandableButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { getProducts, getProduct } from "../../services/products";
import nothingFound from "../../assets/lotties/gpNwVHuEII.json";
import Lottie from "lottie-react";
import ModalProduct from "../../components/ModalProduct";

function Products() {
  const [search, setSearch] = useState("" as string);
  const ProductCategory = ["Categoria 1", "Categoria 2", "Categoria 3"] as string[];
  const [products, setProducts] = useState([] as Array<any>);
  const [product, setProduct] = useState(null as any);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleProduct(id: string) {
    getProduct(id).then((response) => {
        setProduct(response?.data[0]);
    });
  }

   const convertImageBlobToUrl = useCallback((image: any) => {
       const base64img = arrayBufferToBase64(image.data);
       return "data:image/png;base64," + base64img;
   }, []);

  useEffect(() => {

  }, [convertImageBlobToUrl, product]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  function filterProducts() {
    if (search === "") {
      return products;
    }

    return products.filter((product: any) => {
      var name = product.nome.toLowerCase() as string;
      name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") as string;

      var searchNormalize = search.toLowerCase() as string;
      searchNormalize = searchNormalize.normalize("NFD").replace(/[\u0300-\u036f]/g, "") as string;

      return name.includes(searchNormalize);
    });
  }

  function arrayBufferToBase64(buffer: any) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  return (
    <ContainerProducts>
      <HeaderHome />
      <SubHeader />

      <ModalProduct
        active={open}
        handleClose={handleClose}
        title={product?.nome}
        description={product?.descricao}
        price={"R$ " + product?.valor}
        weight={product?.peso + " Kg"}
        image={ product?.imagem ? convertImageBlobToUrl(product.imagem) : "" }
      />
      <ContainerSearchProducts>
        <ContentSearchProducts>
          <InputText
            placeholder="Pesquise um por um produto"
            value={search}
            onChange={handleSearch}
            style={InputTextStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />

          <ExpandableButton label="Categorias" CategoryItem={ProductCategory} />
        </ContentSearchProducts>
      </ContainerSearchProducts>

      <ContainerProductsList>
        <ContetentProductsList>
          {filterProducts().map((product, index) => {
            return (
              <FadeInUpDiv key={index}>
                <CardProduct 
                    title={product.nome} 
                    description={product.descricao} 
                    price={"R$ " + product.valor} 
                    weight={product.peso + " Kg"} 
                    image={convertImageBlobToUrl(product.imagem)} 
                    labelButton="Detalhes" 
                    onClick={() => {
                        handleProduct(product.id_produto)
                        handleOpen()
                    }} />
              </FadeInUpDiv>
            );
          })}
        </ContetentProductsList>

        <ContentNothingFound>
          {!filterProducts().length && search !== "" && (
            <NothingFound>
              <Lottie animationData={nothingFound} />
              <p>Nenhum resultado encontrato</p>
            </NothingFound>
          )}
        </ContentNothingFound>
      </ContainerProductsList>
    </ContainerProducts>
  );
}

export default Products;
