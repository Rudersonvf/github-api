import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

export default function Home() {
  return (
    <main>
      <section className="ga-section-container">
        <div className="ga-inner-section-container">
          <h2>Desafio Github API</h2>
          <p>DevSuperior - Escola de programação</p>
        </div>
        <Link to={"/search"}>
          <div className="dflex">
            <Button text={"Começar"} />
          </div>
        </Link>
      </section>
    </main>
  );
}
