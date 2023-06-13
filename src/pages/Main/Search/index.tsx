import Button from "../../../components/Button";
import "./styles.css";

export default function Search() {
  return (
    <main>
      <section className="ga-search-container">
        <div className="ga-card-container">
          <h2>Encontre um perfil Github</h2>
          <form>
            <input
              name=""
              value={""}
              type="text"
              placeholder="Usuário Github"
              onChange={""}
            />
            <div className="dflex">
              <Button text={"Encontrar"} />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
