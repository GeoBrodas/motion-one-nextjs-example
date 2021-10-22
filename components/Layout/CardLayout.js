function CardLayout(props) {
  return (
    <div className="border-2 m-2 p-4 rounded-md shadow-md">
      {props.children}
    </div>
  );
}

export default CardLayout;
