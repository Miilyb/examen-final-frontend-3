import React, {useState} from "react";

const Form = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length < 5 || !/\S+@\S+\.\S+/.test(email)) {
      setError("Verifique si la información es correcta");
    } else {
      setError(null)
      setSuccess(`Gracias ${name}, pronto te contactaremos`);
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Nombre y Apellido"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Form;