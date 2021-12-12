import React, { useState } from "react";
import { Container, List, Title } from "../../components";
import { formatPrice } from "../../utils/formatPrice";
import PriceCard from "./components/PriceCard";
import { PriceHeader } from "./components/PriceHeader";
import Sidebar from "./components/Sidebar";
import UserQty from "./components/UserQty";

const data = {
  deal: {
    user: {
      discount: 40,
      price: {
        amount: 120,
        currency: {
          symbol: "$",
          ISOCode: "USD",
        },
        cicle: "/Mes",
      },
    },
  },
  modules: [
    {
      id: "fgsfsdfgfd",
      name: "CRM",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      price: {
        amount: 8.5,
        currency: {
          symbol: "$",
          ISOCode: "USD",
        },
        cicle: "/Mes",
      },
    },
    {
      id: "fgsfhgjghsdfgfd",

      name: "Facturación",
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      price: {
        amount: 4.5,
        currency: {
          symbol: "$",
          ISOCode: "USD",
        },
        cicle: "/Mes",
      },
    },
    {
      id: "fgsfhgjhjghjghsdfgfd",

      name: "Reportes",
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      price: {
        amount: 4.5,
        currency: {
          symbol: "$",
          ISOCode: "USD",
        },
        cicle: "/Mes",
      },
    },
    {
      id: "fgsf5455hgjghsdfgfd",

      name: "Impuestos",
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      price: {
        amount: 4.5,
        currency: {
          symbol: "$",
          ISOCode: "USD",
        },
        cicle: "/Mes",
      },
    },
  ],
};
function PricingPage() {
  const [cartItems, setCartItems] = useState([]);

  const renderItemComponent = (item) => {
    const handlerOnSelect = () => {
      const isAdded = cartItems.find((value) => value.id === item.id);

      const removeItem = cartItems.filter((value) => value.id !== item.id);

      const data = [...cartItems, item];
      isAdded ? setCartItems(removeItem) : setCartItems(data);
    };

    return <PriceCard data={item} key={item.id} onSelect={handlerOnSelect} />;
  };

  const { price, discount } = data.deal.user;

  //#region Cal user discount
  const calcDiscount = (Number(price.amount) * Number(discount)) / 100;
  const applyDiscount = Number(price.amount) - calcDiscount;

  const oldPrice = formatPrice(price.currency, price.amount);
  const offerPrice = formatPrice(price.currency, applyDiscount);
  const userQtySubTitle = (
    <span>
      Antes <span className="line-through">{oldPrice}</span> y ahora{" "}
      <span className="font-bold">{offerPrice}</span>
    </span>
  );

  //#endregion

  const deal = {
    ...data.deal,
    user: {
      ...data.deal.user,
      quantity: 8,
      price: {
        ...data.deal.user.price,
        offer: applyDiscount,
      },
    },
  };

  return (
    <div>
      <PriceHeader />
      <Container>
        <div className="flex justify-between gap-4 flex-col md:flex-row">
          <section className="w-full">
            <UserQty data={data.deal.user} subTitle={userQtySubTitle} />

            <Title type="h3">Elige tus Aplicaciones</Title>
            <List
              data={data.modules}
              renderItem={renderItemComponent}
              showBottomDivider
              listClasses="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4" />
          </section>
          <Sidebar
            data={cartItems}
            deal={deal}
            currency={data.modules["0"].price.currency}
          />
        </div>
      </Container>
    </div>
  );
}
export default PricingPage;
