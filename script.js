
const recipientList = ["Anh A", "Chị B", "Anh C", "Chị D"];  // Thêm danh sách tên

let currentRecipientIndex = 0;

function updateRecipient() {
  const recipientElement = document.getElementById("recipient");
  if (currentRecipientIndex < recipientList.length) {
    recipientElement.innerHTML = `Thân gửi: ${recipientList[currentRecipientIndex]}`;
    currentRecipientIndex++;
  }
}

// Tự động thay đổi người nhận sau 5 giây
setInterval(updateRecipient, 5000);

// Khởi tạo lần đầu
updateRecipient();
