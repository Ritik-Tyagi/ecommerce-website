export const addCard = async (event, id, setCard) => {
    event.stopPropagation();
    const res = await fetch(`https://6790dd28af8442fd737812a6.mockapi.io/employee/${id}`);
    const data = await res.json();
    setCard((prev) => [...prev, data]);
    alert("Added Successfully");
};
