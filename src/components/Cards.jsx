import React from "react";
import Loader from "./Loader";
import Card from "./Card";
import Page from "./Page";

function Cards({ charge, pokemons, page, setPage, total }) {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <>
      {charge ? (
        <Loader />
      ) : (
        <div className="cardContainer">
          {pokemons.map((pokemon, idx) => (
            <Card pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      )}
      <Page
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
    </>
  );
}

export default Cards;
