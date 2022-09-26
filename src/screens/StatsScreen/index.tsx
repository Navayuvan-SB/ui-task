import React from "react";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import StatsList from "../../components/StatsList";
import Title from "../../components/Title";

const StatsScreen = () => {
  return (
    <div>
      <Header />
      <Title />
      <Filters />
      <StatsList />
    </div>
  );
};

export default StatsScreen;
