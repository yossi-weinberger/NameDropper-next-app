import "./form.css";

export function Form() {
  return (
    <div className="form">
      <form action="" className="form" onsubmit="register(event)">
        <h1>Fill the form</h1>
        <input
          className="form_input"
          type="text"
          name="name"
          placeholder="Enter your name"
          minlength="2"
          required
        />
        <input
          className="form_input"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className="form_input"
          type="text"
          name="phone"
          placeholder="Enter your phone"
        />
        <input
          className="form_input"
          type="text"
          name="message"
          placeholder="Enter your message"
        />

        <input
          className="form_input"
          type="text"
          placeholder="Enter your birthday"
          onblur="this.type = 'text'"
          onfocus="this.type = 'date'"
        />

        <input
          className="form_input"
          type="password"
          name="password"
          placeholder="Enter your password"
          minlength="10"
          maxlength="20"
        />

        <input
          className="form_input"
          type="select"
          placeholder="test"
          name="select"
        />

        <div className="radio">
          <label>male</label>
          <input
            className="form_input"
            type="radio"
            name="gender"
            value="male"
          />
          <label>female</label>
          <input
            className="form_input"
            type="radio"
            name="gender"
            value="female"
          />
        </div>

        <div>
          <select name="City" id="City" title="City" aria-label="City">
            <option value="Jerusalem">Jerusalem</option>
            <option value="Tiberias">Tiberias</option>
            <option value="Moscow">Moscow</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>

        <input className="form_input submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

const users = [];
function register(event) {
  event.preventDefault();

  // console.log(event.register)
  //   console.log(event.target);
  const form_data = new FormData(event.target);
  //   console.log(form_data);

  //   const username = form_data.get("username");
  //   form_data.forEach((key, valeu) => console.log(valeu, key));

  var user = {};
  form_data.forEach((key, valeu) => (user[valeu] = key));
  users.push(user);
  // console.log(users);
  event.target.reset();
}
