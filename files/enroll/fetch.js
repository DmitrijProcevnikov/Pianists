token = "6815622159:AAEi0Xp1753lx2Iz--Kp-7GjJlYWevjodho";
chat_id = "-1001898298001";

let text = "";

function serializeForm(formNode) {
  const { elements } = formNode;

  const data = new FormData();

  Array.from(elements)
    .filter((item) => !!item.name)
    .forEach((element) => {
      const { name, type } = element;
      const value = type === "checkbox" ? element.checked : element.value;

      data.append(name, value);
      text += `${name}: -- ${value} %0A`;
    });
  console.log(text);
  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${text}`
  );
}

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

const applicantForm = document.getElementById("mars-once");
applicantForm.addEventListener("submit", handleFormSubmit);
