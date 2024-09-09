import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import NumericFormat  from "react-number-format";
import { FaShareAlt, FaComment } from "react-icons/fa";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Collapse,
  Fade,
  IconButton,
  Image,
  LinkOverlay,
  Progress,
  SlideFade,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddToCartBtn from "../Ui/AddToCartBtn";
import { Link } from "react-router-dom";
import Ratings from "react-ratings-declarative";

const Card = (props) => {
  const [show, setShow] = useState(false);

  const {
    rvw_id,
    rvw_name,
    rvw_email,
    rvw_rate,
    rvw_title,
    rvw_comment,
    rvw_date,
  } = props.data;

  useEffect(() => {}, []);
  return (
    <Box>
      <Ratings rating={rvw_rate} widgetDimensions="20px" widgetSpacings="2px">
        <Ratings.Widget widgetRatedColor="green" />
        <Ratings.Widget widgetRatedColor="green" />
        <Ratings.Widget widgetRatedColor="green" />
        <Ratings.Widget widgetRatedColor="green" />
        <Ratings.Widget widgetRatedColor="green" />
      </Ratings>
      <Text fontSize="22px" fontWeight="bold">
        {rvw_title}
      </Text>
      <Text fontSize="14px" fontWeight="semibold">
        {rvw_name} on {rvw_date}
      </Text>
      <Text fontSize="14px" fontWeight="medium">
        {rvw_comment}
      </Text>
    </Box>
  );
};

export default Card;
