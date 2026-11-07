const summaryItemList = document.getElementById("summaryItemList");
const cardResultValue = document.getElementById("cardResultValue");
const DATA_URL = "./data/data.json";

async function getData() {

    try {
        const response = await fetch(DATA_URL);

        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }

        const result = await response.json();
        return Array.isArray(result) ? result : [];
    } catch (error) {
        console.error(error.message);
        return [];
    }
}
