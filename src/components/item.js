export default function ProductItem(props) {   
  return (
    <div className="item">
      <img src={props.info["image_link"]} alt={props.info["name"]}></img>
      <button onClick={() => props.setStateOfParent(props.info["name"], props.info["unit_price"], 'add')}>
        Añadir
      </button>
      <button onClick={() => props.setStateOfParent(props.info["name"], props.info["unit_price"], 'remove')}>
        Eliminar
      </button>
    </div>
  );
}
