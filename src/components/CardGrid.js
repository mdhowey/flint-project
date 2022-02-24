import Card from './Card';

const CardGrid = (props) => {
  const cardGridCreator = props.recommendations.map((recommendation, index) => {
    return (
      <Card
        quote={recommendation.quote}
        author={recommendation.author}
        position={recommendation.position}
        company={recommendation.company}
        key={index}
      />
    )
  });
  return cardGridCreator
}

export default CardGrid
