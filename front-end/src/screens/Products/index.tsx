import { useState, useEffect } from 'react';
import HeaderHome from "../../components/HeaderHome";
import CardProduct from "../../components/CardProduct";
import {
    ContainerProducts,
    ContainerSearchProducts,
    ContentSearchProducts,
    InputTextStyle,
    ContainerProductsList,
    ContetentProductsList,
    SubHeader,
    FadeInUpDiv,
    ContentNothingFound,
    NothingFound
} from "./style";
import InputText from "../../components/InputText";
import ExpandableButton from "../../components/ExpandableButton"
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { getProducts } from '../../services/products';
import nothingFound from "../../assets/lotties/gpNwVHuEII.json";
import Lottie from "lottie-react";

function Products() {
    const [search, setSearch] = useState('' as string);
    const ProductCategory = [
        "Categoria 1",
        "Categoria 2",
        "Categoria 3"
    ] as string[];
    const [products, setProducts] = useState([] as Array<any>);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data);
        });
    }, []);

    function filterProducts() {
        if (search === '') {
            return products;
        }

        return products.filter((product: any) => {
            var name = product.nome.toLowerCase() as string;
            name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") as string;

            var searchNormalize = search.toLowerCase() as string;
            searchNormalize = searchNormalize.normalize('NFD').replace(/[\u0300-\u036f]/g, "") as string;

            return name.includes(searchNormalize);
        });
    }

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
                    {
                        filterProducts().map((product, index) => {
                            return (
                                <FadeInUpDiv key={index}>
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
                                </FadeInUpDiv>
                            )
                        })
                    }
                </ContetentProductsList>

                <ContentNothingFound>
                    {!filterProducts().length && search !== '' && (
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
