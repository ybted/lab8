import { Link } from "react-router-dom"
import App from '../App'
const About = () => {
  return (
    <div>
      <h2>about music platform</h2>
      <Link to="/" element={<App />}>main</Link>
    </div>
  )
}

export default About