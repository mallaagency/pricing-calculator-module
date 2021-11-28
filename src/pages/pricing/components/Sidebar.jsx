import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Text, Title } from "../../../components";
import { formatPrice } from "../../../utils/formatPrice";

function Sidebar({ data, deal, currency }) {
  const [modulesAmount, setModulesAmount] = useState(0);

  const {
    quantity: userQuantity,
    price: { offer: userOfferPrice },
  } = deal.user;

  const totalUserAmount = userOfferPrice * userQuantity;
  const totalAmount = modulesAmount + totalUserAmount;

  useEffect(() => {
    const sumModulesPrices = data.reduce((initialValue, module) => {
      return initialValue + module.price.amount;
    }, 0);
    setModulesAmount(sumModulesPrices);
    return () => {};
  }, [data]);

  return (
    <aside>
      <div className="bg-white px-12 pb-16 w-96 rounded border border-gray-100">
        <div className="pt-16 pb-8">
          <Title type="h3">Su orden</Title>
        </div>
        <div className="flex gap-4 justify-between py-4 border-b border-gray-100">
          <Text>Usuarios</Text>
          <div className="flex flex-col text-right">
            <Text>
              <span className="font-bold">
                {formatPrice(currency, totalUserAmount)}
              </span>
            </Text>
            {userQuantity > 1 && (
              <Text size="xs">
                {formatPrice(currency, userOfferPrice)} x {userQuantity}
              </Text>
            )}
          </div>
        </div>

        <div className="flex gap-4 justify-between py-4 border-b border-gray-100">
          <div>
            <Text>Modulos</Text>
          </div>
          <div className="text-right">
            <Text>
              <span className="font-bold">
                {formatPrice(currency, modulesAmount)}
              </span>
            </Text>
            <Text size="xs">{data.length} modulos</Text>
          </div>
        </div>
        <div className="flex gap-4 justify-between py-4">
          <Text>Total/mes</Text>
          <div>
            <Text>
              <span className="font-bold">
                {formatPrice(currency, totalAmount)}{" "}
              </span>
            </Text>
          </div>
        </div>

        <div>
          <Button
            name="Comprar ahora"
            type="primary"
            isFullWidth
            isDisable={data.length === 0}
          />
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  data: PropTypes.array,
};

export default Sidebar;
