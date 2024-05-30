import { useState } from "react";

/**
 * Form for adding new boxes
 *
 * State:
 * formData: { backgroundColor, width, height, unit,}
 *
 * Events:
 * addItem: function from Boxlist to add boxes
 *
 */

function NewBoxForm({ addItem }) {
  const initialState = { backgroundColor: "", width: 0, height: 0, unit: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send { backgroundColor: "", width: 0, height: 0 } to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addItem({
      backgroundColor: formData.backgroundColor,
      width: Number(formData.width),
      height: Number(formData.height)
    });
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currData => ({
      ...currData,
      [name]: value,
    }));
  }

  /** render form */
  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="NewBoxForm-backgroundColor">Background Color:</label>
      <input
        id="NewBoxForm-backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="NewBoxForm-width">Width:</label>
      <input
        id="NewBoxForm-width"
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="NewBoxForm-height">Height:</label>
      <input
        id="NewBoxForm-height"
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="NewBoxForm-unit">Unit:</label>
      <input
        id="NewBoxForm-unit"
        name="unit"
        value={formData.unit}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;