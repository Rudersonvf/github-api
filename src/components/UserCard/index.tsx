import { UserDTO } from "../../models/UserDTO";
import "./styles.css";

type Props ={
    dataUser: UserDTO
}

export default function UserCard({dataUser}: Props) {
    return(
        <div className="ga-user-card-container">
            <img src={dataUser.avatar_url} alt={dataUser.name} />
            <div className="ga-info-container">
                <h2>Informações</h2>
                <div className="ga-fields-container">
                    <div className="ga-field"><p>Perfil:<span>{dataUser.html_url}</span></p></div>
                    <div className="ga-field"><p>Seguidores:<span>{dataUser.followers}</span></p></div>
                    <div className="ga-field"><p>Localidade:<span>{dataUser.location}</span></p></div>
                    <div className="ga-field"><p>Nome:<span>{dataUser.name}</span></p></div>
                </div>
            </div>
        </div>
    );
}