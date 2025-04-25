interface CardProps{
    link: string,
    nome: string,
    text: string
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <div className="img">
        <img src={props.link} />
      </div>
      <div className="text">
        <h1>{props.nome}</h1>
        <p>
         {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
