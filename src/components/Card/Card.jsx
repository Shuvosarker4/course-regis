import PropTypes from 'prop-types';

const Card = ({card,selectHandler}) => {
    const {image,header,description,price,credit} =card;
    return (
        <div className="card w-96 md:w-auto lg:w-auto mx-auto bg-base-100 shadow-xl pb-3 rounded-lg">
                <figure className="px-6 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center p-2">
                    <h2 className="card-title text-left font-semibold text-xl">{header}</h2>
                    <p className="text-justify">{description}</p>
                    <div className="flex justify-around items-center my-3">
                        <p className="font-semibold">Price:${price}</p>
                        <p className="font-semibold">Credit: {credit}hr</p>
                    </div>
                     <div className="card-actions">
                     <button onClick={()=>selectHandler(card)} className="btn bg-cyan-500 px-20 py-2 rounded text-white font-bold">Select</button>
                     </div>
                </div>
         </div>
    );
};

Card.propTypes = {
    card:PropTypes.object,
    selectHandler:PropTypes.func.isRequired,
}

export default Card;