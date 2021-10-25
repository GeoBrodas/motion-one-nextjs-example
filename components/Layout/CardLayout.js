function CardLayout(props) {
  return (
    <div className="border-2 m-2 p-2 w-auto h-auto rounded-md shadow-md">
      {props.children}
    </div>
  );
}

export default CardLayout;
