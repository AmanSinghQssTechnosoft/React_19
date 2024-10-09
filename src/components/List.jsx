const List = ({ curElem }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    curElem;
  return (
    <li className="grid-two--cols" style={{ style: "none" }}>
      <div>
        <img src={img_url} width="40%" height="40%" alt="xyz" />
      </div>
      <h2>name:{name}</h2>
      <h2 className={rating>8.5?"ylo":"grn"}>rating:{rating}</h2>
      <p>{description}</p>
      <p>{genre}</p>
      <p>{cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watchnow</button>
      </a>
    </li>
  );
};

export default List;
