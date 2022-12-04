import { useState, useEffect } from 'react';
import HeaderHome from "../../components/HeaderHome";
import CardProduct from "../../components/CardProduct";
import { ContainerProducts, ContainerSearchProducts, ContentSearchProducts, InputTextStyle, ContainerProductsList, ContetentProductsList, SubHeader } from "./style";
import InputText from "../../components/InputText";
import ExpandableButton from "../../components/ExpandableButton"
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { getProducts } from '../../services/products'

function Login() {
    const [search, setSearch] = useState('' as string);
    const ProductCategory = [
        "Categoria 1",
        "Categoria 2",
        "Categoria 3"
    ] as string[];

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    const [products, setProducts] = useState([] as Array<any>);

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

    function arrayBufferToBase64(buffer: any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    function convertImageBlobToUrl(image: any) {
        const base64img = arrayBufferToBase64(image.data);
        return "data:image/png;base64," + base64img;
    }

    return (
        <ContainerProducts>
            <HeaderHome />
            <SubHeader />

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

                    <ExpandableButton
                        label="Categorias"
                        CategoryItem={ProductCategory}
                    />
                </ContentSearchProducts>
            </ContainerSearchProducts>

            <ContainerProductsList>
                <ContetentProductsList>
                    {products.map((product, index) => {
                        return (
                            <CardProduct
                                title={product.nome}
                                description={product.descricao}
                                price={"R$ " + product.valor}
                                weight={product.peso + " Kg"}
                                image={
                                    convertImageBlobToUrl(product.imagem)
                                }
                                labelButton="Comprar"
                            />
                        )
                    }
                    )}
                </ContetentProductsList>
            </ContainerProductsList>

        </ContainerProducts>
    );
}

export default Login;
