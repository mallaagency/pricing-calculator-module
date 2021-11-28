import React, { useState } from "react";
import PropTypes from "prop-types";
import { Title, Text } from "../../../components";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { APP_NAME } from "../../../config";

function PriceCard({ data, onSelect }) {
  const [selected, setSelected] = useState(false);

  const { name, price, image } = data;
  const { amount = 0, currency, cicle } = price;

  const priceAmount = `${currency.symbol}${amount}`;
  const pricingDetail = ` ${currency.ISOCode} ${cicle}`;

  const handlerOnSelect = () => {
    setSelected(!selected);
    onSelect && onSelect();
    // console.log("Selected!");
  };
  return (
    <div
      className={`bg-white border w-full ${
        selected ? "border-blue-100" : "border-gray-100"
      } rounded p-2 flex gap-2`}
      onClick={handlerOnSelect}
    >
      <div className="w-14">
        <img
          src={image}
          alt={name || APP_NAME}
          className="h-14 w-14 rounded object-cover"
        />
      </div>
      <div className="flex-auto">
        <Title type="h4">{name}</Title>
        <Text>
          <span className="font-bold">{priceAmount}</span>
          {pricingDetail}
        </Text>
      </div>
      <div className="justify-end">
        <CheckCircleIcon
          className={`h-5 w-5 ${selected ? "text-blue-500" : "text-gray-200"}`}
        />
      </div>
    </div>
  );
}

PriceCard.propTypes = {
  data: PropTypes.arrayOf(["id", "name", "price", "image"]).isRequired,
  onSelect: PropTypes.bool,
};

export default PriceCard;
