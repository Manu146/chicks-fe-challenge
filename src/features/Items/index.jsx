import styled from "styled-components";
import ItemsSection from "./components/ItemsSection";
import ItemsGrid from "./components/ItemsGrid";
import { useState } from "react";

const Container = styled.div``;

const itemsData = [
  {
    name: "B. F. Sword",
    price: 1300,
    game: "League of Legends",
    salePrice: 900,
    stock: 8,
    img: "/B._F._Sword_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Needlessly Large Rod",
    price: 1250,
    game: "League of Legends",
    salePrice: 875,
    stock: 12,
    img: "/Needlessly_Large_Rod_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Giant's Belt",
    price: 900,
    game: "League of Legends",
    stock: 6,
    img: "/Giant's_Belt_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Sunfire Aegis",
    price: 2700,
    game: "League of Legends",
    stock: 5,
    img: "/Sunfire_Aegis_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Dead Man's Plate",
    price: 2900,
    game: "League of Legends",
    stock: 0,
    img: "/Dead_Man's_Plate_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Items() {
  return (
    <Container>
      <div>filters</div>
      <ItemsSection>
        <ItemsGrid items={itemsData} />
      </ItemsSection>
    </Container>
  );
}
