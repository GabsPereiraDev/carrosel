import { Container } from "./style";

import PrettyRating from "pretty-rating-react";
import { faStar, faStarHalfAlt, } from "@fortawesome/free-solid-svg-icons"
import {
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";



interface IAvaliate {
  avaliate: number;
}



export function AvaliateProduct({ avaliate }: IAvaliate) {

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };

  const colors = {
    star: ['#d9ad26', '#d9ad26', '#d9ad26'],
    heart: ['#9b111e', '#a83f39'],
  };


  return (
    <Container value={avaliate}>
      <PrettyRating icons={icons.star} value={avaliate} colors={colors.star} max={5} />
    </Container>
  )


}