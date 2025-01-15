// Fungsi untuk menghitung kecepatan kendaraan
function calculateSpeed() {
  // Ambil nilai input
  const rpm = parseFloat(document.getElementById("rpm").value);
  const circumference = parseFloat(document.getElementById("circumference").value);

  // Validasi input
  if (isNaN(rpm) || isNaN(circumference) || rpm <= 0 || circumference <= 0) {
    alert("Masukkan nilai yang valid!");
    return;
  }

  // Hitung kecepatan (km/jam)
  const speed = rpm * circumference * (60 / 1000);

  // Tampilkan hasil
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = `Kecepatan Kendaraan: ${speed.toFixed(2)} km/jam`;
}

// Tambahkan event listener ke tombol
document.getElementById("calculateButton").addEventListener("click", calculateSpeed);
function calculateSpeed() {
  const rpm = parseFloat(document.getElementById("rpm").value);
  const circumference = parseFloat(document.getElementById("circumference").value);

  if (isNaN(rpm) || isNaN(circumference) || rpm <= 0 || circumference <= 0) {
    alert("Masukkan nilai yang valid!");
    return;
  }

  const speed = rpm * circumference * (60 / 1000);
  const resultDiv = document.getElementById("result");

  resultDiv.classList.remove("d-none");
  resultDiv.innerText = `Kecepatan Kendaraan: ${speed.toFixed(2)} km/jam`;
}

document.getElementById("calculateButton").addEventListener("click", calculateSpeed);
