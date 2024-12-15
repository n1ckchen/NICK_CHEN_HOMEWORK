import { useState } from "react";

interface Items {
  id: number;
  name: string;
}
export const SelectAllForms = () => {
  const items: Items[] = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
    { id: 4, name: "item 4" },
  ];

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelectAll = (isChecked: boolean) => {
    setSelectedItems(isChecked ? items.map((item) => item.id) : []);
  };

  const handleItemSelect = (id: number) => {
    setSelectedItems(
      (prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id) // Uncheck if already selected
          : [...prev, id] // Add to selected list
    );
  };
  return (
    <div className="app">
      <div className="selectAllItems">
        <h1>All the selected items:</h1>
        <p>{selectedItems.map((id) => `Item ${id}`).join(", ") || "None"}</p>
        <input
          type="checkbox"
          checked={selectedItems.length === items.length}
          onChange={(e) => {
            handleSelectAll(e.target.checked);
          }}
        />
        <label>SelectAll</label>
      </div>
      <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleItemSelect(item.id)}
              />
              <label>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
