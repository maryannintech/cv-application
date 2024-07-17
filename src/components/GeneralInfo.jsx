import "../css/Fonts.css";
import "../css/GeneralInfo.css";

export default function GeneralInfo({
  fullName,
  email,
  phoneNumber,
  address,
  handleFullName,
  handleEmail,
  handlePhoneNumber,
  handleAddress,
  clearInfo,
}) {
  return (
    <div className="form">
      <div className="general-info">
        <p className="general-title">General Information</p>
        <p className="general-desc">
          General information on a CV serves as a foundation for potential
          employers to contact you.
        </p>
        <label htmlFor="fullname">* Full name</label>
        <input
          type="text"
          id="fullname"
          required
          placeholder="Example: Juan Dela Cruz"
          onChange={handleFullName}
          value={fullName}
        ></input>
        <label htmlFor="phonenumber">* Phone number</label>
        <input
          type="email"
          id="phonenumber"
          required
          placeholder="Example: +63 2 XXX XXXX"
          onChange={handlePhoneNumber}
          value={phoneNumber}
        ></input>
        <label htmlFor="email">* Email</label>
        <input
          type="email"
          id="email"
          required
          placeholder="Example: juandelacruz@gmail.com"
          onChange={handleEmail}
          value={email}
        ></input>
        <label htmlFor="address">* Address</label>
        <input
          type="text"
          id="address"
          required
          placeholder="Example: Mandaluyong City, Philippines"
          onChange={handleAddress}
          value={address}
        ></input>
        <button onClick={clearInfo}>
          <i className="bx bx-eraser"></i> Clear general information
        </button>
      </div>
    </div>
  );
}
