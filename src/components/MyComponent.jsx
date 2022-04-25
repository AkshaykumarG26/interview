import { useState } from "react";

export const MyComponent = ({ value }) => {
  console.log({ value });
  const [title, setTitle] = useState(value.title)
  const [description, setDescription] = useState(value.description)


  const handleEdit = () => {
    setTitle(title)
    setDescription(description)
  };

  const handleDelete = () => {
      setTitle('')
      setDescription('')
  };

  
  return (
    <div>
      <div>
        {handleEdit ? null : (
          <input
            type="text"
            name=""
            value={value.title}
            id=""
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
        {handleEdit ? null : (
          <input
            type="text"
            name=""
            value={value.description}
            id=""
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
      </div>

      <div>
        <span>{value.description}</span>
        <br />
        <span>{value.title}</span>
        <br />

        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
