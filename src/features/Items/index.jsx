import styled from "styled-components";
import ItemsSection from "./components/ItemsSection";
import ItemsGrid from "./components/ItemsGrid";
import { useState, useMemo } from "react";
import SearchBar from "../../components/ui/SearchBar";
import FiltersBar from "./components/FiltersBar";
import FilterDropdown from "./components/FilterDropdown";
import ItemsHeader from "./components/ItemsHeader";
import ItemsCount from "./components/ItemsCount";
import ItemsPagination from "./components/ItemsPagination";

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
    type: "Unique",
  },
  {
    name: "Needlessly Large Rod",
    price: 1250,
    game: "League of Legends",
    salePrice: 875,
    stock: 12,
    img: "/Needlessly_Large_Rod_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "Unique",
  },
  {
    name: "Giant's Belt",
    price: 900,
    game: "League of Legends",
    stock: 6,
    img: "/Giant's_Belt_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "Unique",
  },
  {
    name: "Sunfire Aegis",
    price: 2700,
    game: "League of Legends",
    stock: 5,
    img: "/Sunfire_Aegis_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "Limited",
  },
  {
    name: "Dead Man's Plate",
    price: 2900,
    game: "League of Legends",
    stock: 0,
    img: "/Dead_Man's_Plate_item_HD.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    type: "Legendary",
  },
];

const sortByOpts = ["Featured", "Price: Low to high"];
const typeOpts = ["All", "Legendary", "Limited", "Unique"];
const gameOpts = ["All", "League of legends", "World of Warcraft"];

export default function Items() {
  const [sortBy, setSortBy] = useState(sortByOpts[0]);
  const [search, setSearch] = useState("");
  const [max, setMax] = useState(10000);
  const [min, setMin] = useState(0);
  const [type, setType] = useState(typeOpts[0]);
  const [game, setGame] = useState(gameOpts[0]);

  let filtered1 = useMemo(() => {
    if (search === "") return itemsData;
    return itemsData.filter(({ name }) => name.includes(search));
  }, [search]);
  let filtered2 = useMemo(
    () =>
      filtered1.filter(({ price, salePrice }) => {
        let finalPrice = salePrice ? salePrice : price;
        return finalPrice < max && finalPrice > min;
      }),
    [filtered1, max, min]
  );
  let filtered3 = useMemo(() => {
    if (type === "All") return filtered2;
    return filtered2.filter(({ type: itemType }) => itemType === type);
  }, [filtered2, type]);
  let filtered4 = useMemo(() => {
    if (game === "All") return filtered3;
    return filtered3.filter(
      ({ game: itemGame }) => itemGame.toLowerCase() === game.toLowerCase()
    );
  }, [filtered3, game]);

  return (
    <Container>
      <FiltersBar>
        <FilterDropdown
          type="game"
          opts={gameOpts}
          value={game}
          setStateFn={setGame}
        />
        <SearchBar searchValue={search} setSearchFn={setSearch} />
        <div>
          <FilterDropdown
            type="price"
            value={[min, max]}
            setStateFn={[setMin, setMax]}
          />
          <FilterDropdown
            type="type"
            opts={typeOpts}
            value={type}
            setStateFn={setType}
          />
        </div>
      </FiltersBar>
      <ItemsSection>
        <ItemsHeader>
          <ItemsCount total={itemsData.length} count={filtered4.length} />
          <FilterDropdown
            type="sort"
            opts={sortByOpts}
            value={sortBy}
            setStateFn={setSortBy}
          />
        </ItemsHeader>
        <ItemsGrid items={filtered4} />
        <ItemsPagination nOfPages={6} currentPage={1} />
      </ItemsSection>
    </Container>
  );
}
