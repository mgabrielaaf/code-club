import Heart from "react-heart"
import { useState } from "react";
import PropTypes from 'prop-types';

export function Card({ titleCard, textCard }) {
  const [active, setActive] = useState(false)
  
  return (
    <div id="card" className="bg-[#A4A9AD] p-10 border border-gray-500 rounded-md hover:border-gray-900">
      <div className="flex justify-between mb-5 font-sans text-sm">
        17 de ago, 2024
        <button>
          <Heart className="size-5" isActive={active} onClick={() => setActive(!active)} />
        </button>
      </div>
      <div>
        <h2 className="font-semibold text-xl font-serif mb-5">{titleCard}</h2>
        <p className="font-sans">{textCard}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  titleCard: PropTypes.string.isRequired,
  textCard: PropTypes.string.isRequired
}