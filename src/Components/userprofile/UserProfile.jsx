import { useContext, useEffect, useState } from "react";
import "./UserProfile.css";
import LoginContext from "../../Context/LoginContext";
import axios from "axios";

const UserProfile = () => {
  const [pageLoading, setPageLoading] = useState(false);
  const {
    user,
    setUser,
    profile: profileContext,
    loading,
  } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  function loadUser() {
    if (!loading && user) {
      setFormData({
        name: user.name,
        surname: user.surname,
        username: user.username,
        mail: user.mail,
        password: "",
        confirmPassword: "",
      });
    }
  }

  async function changeAvatar(event) {
    const resetFile = event.target;
    const body = new FormData();
    const file = event.target.files[0];
    if (file) {
      body.append("file", file)
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const validExtensions = ["png", "jpg", "jpeg", "webp"];
      if (validExtensions.includes(fileExtension)) {
        try {
          setPageLoading(true);
          const response = await axios.post(
            process.env.REACT_APP_BACKEND + "/auth/changeAvatar",
            body,
            {
              headers: {
                "Content-Type": "multipart/form-data",

                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          setUser(response.data);
          setPageLoading(false);
        } catch (error) {
          setPageLoading(false);
      } finally {
        resetFile.value = null;
      }
    } else {
      console.log("Estensione non valida");
    }
  }

  useEffect(() => {
    loadUser();
  }, [loading, user]);

  useEffect(() => {
    loadUser();
  }, []);

  async function profile(event) {
    event.preventDefault();
    profileContext(formData);
  }

  function change(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <div className="container utenteList col-12">
      <h1 className="text-center pt-4">PROFILO</h1>
      <div className="row g-0">
        <div className="avatarProfile col-xs-12 col-sm-12 col-md-12 col-lg-2 px-4 mt-4">
          <img
            src={"assets/Avatar/" + user.img}
            className="avatar img-circle img-thumbnail"
            alt="avatar"
            onError={(event) =>
              (event.target.src =
                "http://ssl.gstatic.com/accounts/ui/avatar_2x.png")
            }
          />
          <input
            type="file"
            onChange={changeAvatar}
            className="file center-block file-upload custom-file-input"
          />
        </div>

        <div className="col-sm-9 col-md-12">
          <form className="form" onSubmit={profile}>
            <div className="form-group col-xs-6">
              <label for="name">
                <h4 className="utentePlaceholder">Nome</h4>
              </label>
              <input
                type="text"
                value={formData.name}
                name="name"
                onChange={change}
                className="form-control"
              />

              <label for="surname">
                <h4 className="utentePlaceholder">Cognome</h4>
              </label>
              <input
                type="text"
                value={formData.surname}
                name="surname"
                onChange={change}
                className="form-control"
              />

              <label for="username">
                <h4 className="utentePlaceholder">Username</h4>
              </label>
              <input
                type="text"
                value={formData.username}
                name="username"
                onChange={change}
                className="form-control"
              />

              <label for="email">
                <h4 className="utentePlaceholder">Email</h4>
              </label>
              <input
                type="email"
                value={formData.mail}
                name="mail"
                onChange={change}
                className="form-control"
              />

              <label for="password">
                <h4 className="utentePlaceholder">Password</h4>
              </label>
              <input
                type="password"
                onChange={change}
                name="password"
                value={formData.password}
                className="form-control"
              />

              <label for="password2">
                <h4 className="utentePlaceholder">Conferma Password</h4>
              </label>
              <input
                type="password"
                onChange={change}
                name="password"
                value={formData.confirmPassword}
                className="form-control"
              />
            </div>

            <div className="form-buttons col-xs-12 col-sm-12 col-md-12">
              <button
                className="btn btn-lg btn-outline-success sx-dx"
                type="submit"
              >
                <ion-icon name="save"></ion-icon> Salva Dati
              </button>

              <button
                className="btn btn-lg btn-outline-danger sx-dx"
                type="reset"
                onClick={loadUser}
              >
                <ion-icon name="refresh"></ion-icon> Ripristina
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
