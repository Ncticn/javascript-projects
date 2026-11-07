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


function createSummaryItem({ category, icon, score }) {

    const li = document.createElement("li");
    li.className = "summary-item";
    li.dataset.variant = category.toLowerCase();

    const label = document.createElement("div");
    label.className = "summary-item__label";

    const img = document.createElement("img");
    img.className = "summary-item__icon";
    img.src = icon;
    img.alt = "";

    const title = document.createElement("span");
    title.className = "summary-item__title text-sm font-medium";
    title.textContent = category;

    label.append(img, title);

    const scoreBox = document.createElement("span");
    scoreBox.className = "summary-item__score";

    const value = document.createElement("span");
    value.className = "summary-item__value text-sm font-bold";
    value.textContent = score;

    const total = document.createElement("span");
    total.className = "summary-item__total text-sm font-bold";
    total.textContent = "/ 100";

    scoreBox.append(value, total);
    li.append(label, scoreBox);
    return li;

}