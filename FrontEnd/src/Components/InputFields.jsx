import React from 'react'



const InputFields = ({ label, name, placeholder, value, onChange, type = "text" }) => {
    return (
      <div className="mx-auto my-5 w-10/12 flex justify-center items-center border-b px-8 py-4">
        <div className="w-4/12 "><i>{label}</i></div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-8/12 outline-none bg-none"
        />
      </div>
    );
  }
export default InputFields
