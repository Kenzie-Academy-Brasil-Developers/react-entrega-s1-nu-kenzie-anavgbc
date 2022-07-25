import Card from "../Card";
import HeaderCard from "../HeaderCard";
import EmptyCard from "../EmptyCards";

import "./style.css";

const List = ({ listTransactions, setFilter, filterList }) => {
  return (
    <div className="container_list">
      <HeaderCard listTransactions={listTransactions} setFilter={setFilter} />
      {filterList.length > 0 ? (
        filterList.map((elem, index) => (
          <Card
            key={index}
            elemento={elem}
            filterList={filterList}
            setFilter={setFilter}
          />
        ))
      ) : (
        <div className="NoCards_container">
          <EmptyCard />
        </div>
      )}
    </div>
  );
};

export default List;
