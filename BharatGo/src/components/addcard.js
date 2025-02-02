export const addCard = async (event, id, setCard) => {
    event.stopPropagation();
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const data = await res.json();
    setCard((prev) => [...prev, data]);
    alert("Added Successfully");
};
