import { useState } from 'react';
import HeaderHome from "../../components/HeaderHome";
import CardProduct from "../../components/CardProduct";
import { ContainerProducts, ContainerSearchProducts, ContentSearchProducts, InputTextStyle, ContainerProductsList, SubHeader } from "./style";
import InputText from "../../components/InputText";
import ExpandableButton from "../../components/ExpandableButton"
import InputAdornment from '@mui/material/InputAdornment';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

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

    const products = [
        {
            title: "Sucata informática eletronica compra",
            price: "R$ 120,00",
            weight: "10 Kg",
            image: "https://i.imgur.com/i0tnYFf.jpg",
            description: "Placa mãe, memória, processador, placa central telefônica, placa de celular todo tipo de sucata informatica e eletronica compra paga se por kg buscamos no local consulte valores",
        },
        {
            title: "Sucata informática eletronica compra",
            price: "R$ 120,00",
            weight: "10 Kg",
            image: "https://i.imgur.com/8t3yoqA.jpg",
            description: "Placa mãe, memória, processador, placa central telefônica, placa de celular todo tipo de sucata informatica e eletronica compra paga se por kg buscamos no local consulte valores",
        },
    ] as Array<any>;

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
                {products.map((product, index) => {
                    return (
                        <CardProduct
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            weight={product.weight}
                            image={product.image}
                            labelButton="Comprar"
                        />
                    )
                }
                )}
            </ContainerProductsList>

        </ContainerProducts>
    );
}

export default Login;
