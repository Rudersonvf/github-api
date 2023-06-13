import { useState } from "react";
import Button from "../../../components/Button";
import "./styles.css";
import * as userService from "../../../services/user-service";
import { UserDTO } from "../../../models/UserDTO";

type FormData = {
    userName: string
}

export default function Search() {

    const [formData, setFromData] = useState<FormData>({
        userName: ""
    });
    const [userData, setUserData] = useState<UserDTO>();
    const [error, setError] = useState();

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFromData({...formData, [name]: value});
        console.log(formData);
    }
    
    function handleFormSubmit(event: any) {
        event.preventDefault();
        userService.findByName(formData.userName).then(response => {
            setUserData(response.data)
            console.log(userData);
        }).catch((error) => {
            setError(error.response.data);
        }), [];
    }

    

  return (
    <main>
      <section className="ga-search-container">
        <div className="ga-card-container">
          <h2>Encontre um perfil Github</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              name="userName"
              value={formData.userName}
              type="text"
              placeholder="Usuário Github"
              onChange={handleInputChange}
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
