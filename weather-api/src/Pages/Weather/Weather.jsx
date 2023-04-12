import { useParams } from "react-router-dom";

const Weather = () => {
  const params = useParams()

  return (
    <div>
        { params.id }
    </div>
  )
}

export default Weather